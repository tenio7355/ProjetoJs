export function addSerchParamsUrl(paramName: string, paramValue: string) {
  const newUrl = new URL(window.location.href)
  newUrl.searchParams.set(paramName, paramValue)
  window.history.pushState({ path: newUrl.href }, '', newUrl.href)
}

export function removeSerchParamsUrl() {
  const newUrl = new URL(window.location.href)
  newUrl.searchParams.delete("idDiscipline")
  window.history.pushState({ path: newUrl.href }, '', newUrl.href)
}