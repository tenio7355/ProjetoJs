export function addSerchParamsUrl(paramName, paramValue) {
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set(paramName, paramValue);
    window.history.pushState({ path: newUrl.href }, '', newUrl.href);
}
export function removeSerchParamsUrl() {
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.delete("idDiscipline");
    window.history.pushState({ path: newUrl.href }, '', newUrl.href);
}
