// http://www.alloyteam.com/2012/10/common-javascript-design-patterns/
// 单例模式
var singleton = function (fn, thisArg) {
    var rslt
    return function () {
        return rslt || (rslt = fn.apply(thisArg, arguments))
    }
}
