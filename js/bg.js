// 每隔30ms调用一次
function bgMove() {
    dis += 5
    if (dis >= sh) {
        dis = 0
    }
    dWrap.style.backgroundPosition = `0px ${dis}px`
}