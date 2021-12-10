// 1.hero的位置初始化
function setHeroPosition() {
    dHero.style.left = (sw - dHero.offsetWidth) / 2 + "px"
    dHero.style.top = sh - dHero.offsetHeight + "px"
}
setHeroPosition()
// 2.pc端的键盘事件的添加
var isLeft = false
var isTop = false
var isRight = false
var isBottom = false

window.onkeydown = function (e) {
    if (e.keyCode === 37) {
        isLeft = true
    }
    if (e.keyCode === 38) {
        isTop = true
    }
    if (e.keyCode === 39) {
        isRight = true
    }
    if (e.keyCode === 40) {
        isBottom = true
    }
}

window.onkeyup = function (e) {
    if (e.keyCode === 37) {
        isLeft = false
    }
    if (e.keyCode === 38) {
        isTop = false
    }
    if (e.keyCode === 39) {
        isRight = false
    }
    if (e.keyCode === 40) {
        isBottom = false
    }
}

function heroMove() {
    var left = dHero.offsetLeft
    var top = dHero.offsetTop
    if (isLeft) {
        left -= 9
    }
    if (isTop) {
        top -= 9
    }
    if (isRight) {
        left += 9
    }
    if (isBottom) {
        top += 9
    }

    // 边界处理
    top = top < 0 ? 0 : top
    top = top > (sh - 82) ? sh - 82 : top
    left = left < -33 ? -33 : left
    left = left > (sw - 33) ? sw - 33 : left

    dHero.style.left = left + "px"
    dHero.style.top = top + "px"
}

// 3.移动端触屏事件的添加
dHero.ontouchstart = function (e) {
    
    // 阻止默认
    e.preventDefault()
    // 不能有多个触控点
    if (e.touches.length !== 1) {
        return
    }
    // 先获取触控点
    var touch = e.touches[0]
    var left = dHero.offsetLeft
    var top = dHero.offsetTop
    var x1 = touch.clientX
    var y1 = touch.clientY

    window.ontouchmove = function (e2) {
        var touch2 = e2.touches[0]
        var l = touch2.clientX - x1 + left
        var t = touch2.clientY - y1 + top
        // 边界处理
        t = t < 0 ? 0 : t
        t = t > (sh - 82) ? sh - 82 : t
        l = l < -33 ? -33 : l
        l = l > (sw - 33) ? sw - 33 : l
        dHero.style.left = l + "px"
        dHero.style.top = t + "px" 
    }
}

dHero.ontouchend = function () {
    window.ontouchmove = null
}