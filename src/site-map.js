let siteMapOrigin = [];

export let siteMap = [];

export const setSiteMap = (data) => siteMapOrigin = data;

export const generateSiteMap = () => {
    siteMap = siteMapOrigin.flatMap(item => item);
    return siteMap;
};
