// 子弹的创建与移动
var dBullet = document.getElementById("bullet")
var gap = 7     // 间隔参数
var count = 0       // 计数参数

function createBullet() {
    var b = document.createElement("div")
    b.className = "bullet"
    b.style.left = dHero.offsetLeft + 30 + 'px'
    b.style.top = dHero.offsetTop - 14 + 'px'
    b.isDel = false 
    dBullet.appendChild(b)
}

function bulletMove() {
    // 1.创建子弹
    count ++
    if (count >= gap) {
        createBullet()
        count = 0
    }
    // 2.移动
    var bs = dBullet.children
    for (var i=0; i<bs.length; i++) {
        if (bs[i].isDel) {
            // 需要删掉
            dBullet.removeChild(bs[i])
            i--
            continue
        }
        bs[i].style.top = bs[i].offsetTop - 11 + 'px'
        if (bs[i].offsetTop <= -14) {
            bs[i].isDel = true
        }
    }
}