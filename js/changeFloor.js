function floorTab() {
  const floorMax = 4
  const up = document.getElementById('up')
  const down = document.getElementById('down')

  up.onclick = function () {
    //切换楼层
    const floor = document.getElementsByTagName('template')[1]
    if (floor.id < floorMax) {
      const id = parseInt(floor.id)
      floor.id = (id + 1).toString()
      getTabShow()
    } else {
      alert('~这里已经是图书馆的最高层了哦,沿途看看呗~')
    }
  }

  down.onclick = function () {
    //切换楼层
    const floor = document.getElementsByTagName('template')[1]
    if (floor.id > 1) {
      const id = parseInt(floor.id)
      floor.id = (id - 1).toString()
      getTabShow()
    } else {
      alert('~这里就是一楼了哈,进馆转转吧~')
    }
  }
}

floorTab()
