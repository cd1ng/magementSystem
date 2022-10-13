export function debounce(callback, delay) {
  let timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      callback()
      timer = null
    }, delay)
  }
}
