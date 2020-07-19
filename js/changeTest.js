const t_i = document.getElementById('thumb_image');
const sky = document.getElementById('sky');
t_i.onclick=function(){
    //更改position的值也是很好的呀,切换属性值src
    // const src=sky.getAttribute('src')
    // if(src==='#city'){
        alert(t_i)
        alert(sky)
        sky.setAttribute('src','#sechelt')
        // t_i.setAttribute('src','#thumb_c')
        // t_i.setAttribute('position','2 4 3')
    // }
    // else if(src==='#sechelt'){
    //     sky.setAttribute('src','#city')
    //     t_i.setAttribute('src','#thumb_s')
    //     t_i.setAttribute('position','1 4 -3')
    // }
}