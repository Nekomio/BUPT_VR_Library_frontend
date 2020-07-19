//toggle Love
const love=document.getElementById('love')
const count=document.getElementsByClassName('count')[0]
let Loved=false
const xhr=new XMLHttpRequest()


//getLove
function getLoveCount() {
    xhr.onreadystatechange=function () {
        if(xhr.readyState===4){
            count.innerHTML=xhr.responseText
        }
    }
    xhr.open('GET','url')
    xhr.send()
}


// getLoveCount()

//sendLove
function sendLoveCount(countNum){
    xhr.onreadystatechange=function () {
        if(xhr.readyState===4){
            count.innerHTML=xhr.responseText
        }
    }
    xhr.open('POST','url')
    xhr.send('count='+countNum)
}


love.onclick=function () {
    if(!Loved){
        count.innerHTML=parseInt(count.innerHTML)+1
        Loved=true
        sendLoveCount(count.innerHTML)
    }
    else {
        count.innerHTML=parseInt(count.innerHTML)-1
        Loved=false
        sendLoveCount(count.innerHTML)
    }
}