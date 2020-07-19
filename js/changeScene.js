// @params 传入的imageId为a-assets中的图片id,根据这个图片id来查询
function getFloor(templateId) {
  //这里面的Ajax请求,通过templateId和imageId之间的对应关系
}

function changeScene() {
  const left_plane = document.getElementById('left_fly')
  const right_plane = document.getElementById('right_fly')
  const sky = document.getElementById('sky')

  //下面的两个left就是传入getFloor中的元素
  let imageId_left = 'sechelt'
  let imageId_right = 'cube'
  left_plane.onclick = function () {
    sky.setAttribute('src', '#' + imageId_left)
  }

  right_plane.onclick = function () {
    sky.setAttribute('src', '#' + imageId_right)
  }

  //设置template

  const floor = document.getElementsByTagName('template')[0]

  const FloorObj = getFloor()

  const floorList = document.getElementsByClassName('byr-floor-room')

  //1.根据FloorObj和floorList中的图片编号找到样式

  //2.根据图片编号设置样式 add方法()

  getTabShow()
}

changeScene()
