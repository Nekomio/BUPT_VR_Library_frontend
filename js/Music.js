(function () {
    const music = document.getElementById('music')
    const song = document.getElementById('guoge')
    const fn = function () {
        song.play()
        document.removeEventListener('click',fn)
        music.setAttribute('src', 'images/on.png')
    }


    music.onclick = function () {
        const src = music.getAttribute('src')
        if (src.indexOf('on') > 0) {
            music.setAttribute('src', 'images/off.png')
            song.pause()
        } else if (src.indexOf('off') > 0) {
            music.setAttribute('src', 'images/on.png')
            song.play();
        }
    }

    song.onended=function(){
        music.setAttribute('src', 'images/off.png')
        music.currentTime=0
    }

    document.addEventListener('click', fn);
})()