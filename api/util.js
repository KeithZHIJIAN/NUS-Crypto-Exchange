//保留n位小数
function roundFun(value, n) {
    return Math.round(value*Math.pow(10,n))/Math.pow(10,n);
}

module.exports = { roundFun };