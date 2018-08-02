//当 ready 返回 true 时，执行 fn
var readyDo = function (ready, fn, interval, thisArg) {
    return function rd() { ready.apply(thisArg) && (fn.apply(thisArg), true) || setTimeout(rd, interval || 100) }
}