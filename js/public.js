// 判断是否是移动端
function isMobile() {
    var arr = ["iPhone","Android","iPad"]
    var is = false
    arr.forEach(function(item) {
        if (navigator.userAgent.indexOf(item) != -1) {
            is = true
        }
    })
    return is
}

// 随机函数
function rand(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

// 碰撞检测
function isCrash(a, b) {
    var l1 = a.offsetLeft
    var r1 = l1 + a.offsetWidth
    var t1 = a.offsetTop
    var b1 = t1 + a.offsetHeight

    var l2 = b.offsetLeft
    var r2 = l2 + b.offsetWidth
    var t2 = b.offsetTop
    var b2 = t2 + b.offsetHeight

    // if (r1<l2 || r2<l1 || b1<t2 || b2<t1) {
        // 不碰撞
        // return false
    // } else {
        // return true
    // }

    // return (r1<l2 || r2<l1 || b1<t2 || b2<t1) ? false : true

    return !(r1<l2 || r2<l1 || b1<t2 || b2<t1)
}