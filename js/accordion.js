function getTabShow() {
  const floor = document.querySelectorAll('template')[1]
  let tab_index = 'tab' + floor.id
  const radio = document.getElementById(tab_index)
  radio.checked=true
}

getTabShow()