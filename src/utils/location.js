export const reenterPage = (path, router, dispatch) => {
    dispatch(router.push('/empty'));
    setTimeout(() => dispatch(router.replace(path)));
}

export const reloadPage = () => {
    window.location.href = window.location.href + "";
}

export const redirectToUrl = (url) => {
    debugger;
    window.location.href = url;
}
