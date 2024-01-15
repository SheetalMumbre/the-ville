const findClosestMenu = (breadcrumb, placeholder, pathForMenu) => {
    for (let i = breadcrumb.length - 1; i >= 0; i--) {
      if (breadcrumb[i].siteMapData.placeholder === placeholder && !breadcrumb[i].siteMapData.omitMenuLevel) {
        return breadcrumb[i].siteMapData.parentPath;
      }
    }
  };
  
  export const getMenu = async (pathForMenu, parameters, placeholder, currentPath, authUser, siteMap, state) => {
    const breadcrumb = await getBreadcrumb(currentPath, parameters, authUser, siteMap, state);
    const closestMenuPath = findClosestMenu(breadcrumb, placeholder, pathForMenu);
  
    const filteredSiteMap = siteMap
      .filter(item => item.parentPath === closestMenuPath && item.placeholder && item.placeholder === placeholder && hasAccessToSiteMenuItem(item, state, authUser));
  
    filteredSiteMap
      .sort((a, b) => a.placeholderIndex - b.placeholderIndex);
  
    return await Promise.all(filteredSiteMap
      .map(async item => ({
        title: await item.title(parameters),
        titleSuffix: item.titleSuffix && (await item.titleSuffix(parameters)),
        url: getUrl(item.path, { ...parameters, ...(item.data || {}) }),
        isActive: breadcrumb.some(b => item.path === b.siteMapData.path && (!item.generated || String(item.id) === String(parameters[item.idParameter]))),
        siteMapData: { ...item }
      })));
  };
  
  export const getBreadcrumb = async (path, parameters, authUser, siteMap, state) => {
    if (!authUser || !path) {
      return [];
    }
  
    let currentItem = findSiteMapItem(path, parameters, siteMap);
    let hierarchy = [];
  
    while (true) {
      if (hasAccessToSiteMenuItem(currentItem, state, authUser)) {
        hierarchy.splice(0, 0, {
          title: await currentItem.title(parameters),
          url: getUrl(currentItem.path, parameters),
          isActive: currentItem.path === path,
          siteMapData: { ...currentItem },
          hidden: hierarchy.length === 0 && currentItem.middleStep
        });
      }
  
      if (!currentItem.parentPath) {
        break;
      }
  
      currentItem = findSiteMapItem(currentItem.parentPath, parameters, siteMap);
    }
  
    return hierarchy;
  }
  
  const getUrl = (template, params) =>
    Object.keys(params).reduce((result, key) => typeof result === 'string' ? result.replace(`:${key}`, params[key]) : result, template);
  
  const findSiteMapItem = (path, parameters, siteMap) => {
    const item = siteMap.find(item => {
      return item.path === path
        && (!item.generated || String(item.id) === String(parameters[item.idParameter]))
    });
  
    if (!item) {
      throw new Error(`SiteMap configuration is inconsistent. Cannot find item with path: ${path}`)
    }
    return item;
  }
  
  export const hasRequiredRoles = (accessRule, accessRules, userRoles) =>{
    const requiredRoles = accessRules[accessRule];
    if (requiredRoles === undefined) {
      throw new Error(`Access rules for ${accessRule} are not defined`);
    }
    return requiredRoles.some(requiredRole => userRoles.some(userRole => userRole === requiredRole));
  }
  
  const hasAccessToSiteMenuItem = (item, state, user) => {
    if (!item.accessRule) {
      return true;
    }
    return hasRequiredRoles(item.accessRule, state.application.accessRules, user.roles);
  }
  