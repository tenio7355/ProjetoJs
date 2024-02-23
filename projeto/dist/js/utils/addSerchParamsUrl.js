export default function addSerchParamsUrl(paramName, paramValue) {
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set(paramName, paramValue);
    window.history.pushState({ path: newUrl.href }, '', newUrl.href);
}
