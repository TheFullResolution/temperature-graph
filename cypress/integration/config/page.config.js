
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
  controller: dataTest('controller'),
  graphWrapper: dataTest('graph-wrapper'),
  header: dataTest('header'),
  loader: dataTest('loader'),
  timer: dataTest('timer')
}
