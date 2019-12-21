window.onload = function () {
    var parent = document.querySelector('.skin-CardBanner')
    var images = document.querySelectorAll('.skin-imageItem')
    var switchButton = document.querySelectorAll('.skin-card-button')
    var p = 0
    var timer = null
    for (var i = 0; i < switchButton.length; i++) {
        switchButton[i].index = i
        switchButton[i].onclick = function () {
            for (var j = 0; j < images.length; j++) {
                images[j].classList.remove('on')
            }
            images[this.index].classList.add('on')
            p = this.index
        }
    }
    function intervalGo () {
        timer = setInterval(function () {
            for (var k = 0; k < images.length; k++) {
                images[k].classList.remove('on')
            }
            if (p < 3) {
                p = p + 1
            } else if (p >= 3) {
                p = 0
            }
            console.log(p)
            images[p].classList.add('on')
        }, 2000)
    }
    intervalGo()
    parent.onmouseover = function () {
        console.log('in')
        clearInterval(timer)
    }
    parent.onmouseleave = function () {
        console.log('out')
        intervalGo()
    }
}
