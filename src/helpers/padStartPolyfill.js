// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
export function padStartPolyfill() {
  if (!String.prototype.padStart) {
    // eslint-disable-next-line
    String.prototype.padStart = function padStart(targetLength, padString) {
      targetLength = targetLength >> 0
      padString = String(typeof padString !== 'undefined' ? padString : ' ')
      if (this.length > targetLength) {
        return String(this)
      } else {
        targetLength = targetLength - this.length
        if (targetLength > padString.length) {
          padString += padString.repeat(targetLength / padString.length) //append to original to
        }
        return padString.slice(0, targetLength) + String(this)
      }
    }
  }
}
