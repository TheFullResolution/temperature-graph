
function dataTest(id) {
  return `[data-test="${id}"]`
}

export const PATHS = {
  API: /api.openweathermap.org/
}

export const VAR_NAMES = {
  waitApi: 'openweather'
}

export const SELECTORS = {
  graphWrapper: dataTest('graph-wrapper'),
  header: dataTest('header'),
  loader: dataTest('loader'),
  controller: dataTest('controller')
}
