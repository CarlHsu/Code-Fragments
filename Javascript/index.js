//当 ready 返回 true 时，执行 fn
var readyDo = function (ready, fn, interval, thisArg) {
    return function rd() { ready.apply(thisArg) && (fn.apply(thisArg), true) || setTimeout(rd, interval || 100) }
}

//动态引用 js 文件
var loadScript = function (url) {
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url
    document.getElementsByTagName('head')[0].appendChild(script)
}

//动态引用 css 文件
var loadScript = function (url) {
    var link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = url
    document.getElementsByTagName('head')[0].appendChild(link)
}

//获取 querystring
var getQueryString = function (key, decode) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i")
    var r = window.location.search.substr(1).match(reg)
    if (r != null) {
        return decode ? decodeURIComponent(r[2]) : r[2]
    }
    return null
}

//Json 转 querystring
var jsonToQueryString = function (json) {
    return Object.keys(json).map(function (key) {
        return encodeURIComponent(key) + '=' +
            encodeURIComponent(json[key])
    }).join('&')
}

//单例模式
var singleton = function (fn, thisArg) {
    var result;
    return function () {
        return result || (result = fn.apply(thisArg, arguments));
    }
}
