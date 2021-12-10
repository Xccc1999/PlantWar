// 敌机的创建与移动
// 获取敌机的管理父级
var dEnemy = document.getElementById("enemy")
var diff = 200

// 创建
function createEnemy() {
    var n = rand(0, diff)
    if (n > 10) {
        return
    } else if (n > 8) {
        createE3()
    } else if (n > 5) {
        createE2()
    } else {
        createE1()
    }
}

// 创建小敌机
function createE1() {
    var e = document.createElement("div")
    e.className = "e1"
    // 位置随机 速度随机
    e.style.left = rand(0, sw-38) + "px"
    e.speed = rand(3,10)
    e.hp = 100
    e.score = 10
    e.bgIndex = 0   //背景图的位置索引
    e.bgMax = 4     //索引最大值
    e.isBol = false //是否爆炸
    e.isDel = false //是否删掉
    dEnemy.appendChild(e)
}
// 创建中敌机
function createE2() {
    var e = document.createElement("div")
    e.className = "e2"
    // 位置随机 速度随机
    e.style.left = rand(0, sw-46) + "px"
    e.speed = rand(3,8)
    e.hp = 300
    e.score = 30
    e.bgIndex = 0   //背景图的位置索引
    e.bgMax = 6     //索引最大值
    e.isBol = false //是否爆炸
    e.isDel = false //是否删掉
    dEnemy.appendChild(e)
}
// 创建大敌机
function createE3() {
    var e = document.createElement("div")
    e.className = "e3"
    // 位置随机 速度随机
    e.style.left = rand(0, sw-110) + "px"
    e.speed = rand(3,6)
    e.hp = 600
    e.score = 60
    e.bgIndex = 0   //背景图的位置索引
    e.bgMax = 9     //索引最大值
    e.isBol = false //是否爆炸
    e.isDel = false //是否删掉
    dEnemy.appendChild(e)
}

// 移动
function enemyMove() {
    // 1.创建敌机
    createEnemy()

    // 2.敌机的移动
    var es = dEnemy.children
    for (var i=0; i<es.length; i++) {
        if (es[i].isDel) {
            dEnemy.removeChild(es[i])
            i --
            continue
        }
        if (es[i].isBol) {
            // 爆炸状态
            es[i].bgIndex ++
            var x = es[i].bgIndex * es[i].offsetWidth * -1 
            es[i].style.backgroundPosition = `${x}px 0px`
            if (es[i].bgIndex === es[i].bgMax) {
                es[i].isDel = true
            }
            continue
        }
        es[i].style.top = es[i].offsetTop + es[i].speed + 'px'
        if (es[i].offsetTop > sh) {
            // 敌机飞出屏幕 要删掉
            es[i].isDel = true
        }
    }
}