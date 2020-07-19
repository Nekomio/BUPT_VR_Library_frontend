const mask = document.getElementsByClassName('byr-mask-show')[0]
const web = document.getElementsByClassName('web')[0]
let showfflag = false
mask.onclick = function () {
  if (!showfflag) {
    mask.innerHTML = 'Close'
    web.style.display = 'block'
    showfflag = true
  } else if (showfflag) {
    mask.innerHTML = 'More'
    web.style.display = 'none'
    showfflag = false
  }
}
