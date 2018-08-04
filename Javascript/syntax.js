// 赋值并 return
return cache[key] = val

// 赋值并做 for 判断条件
var Type = {}

for (var i = 0, type; type = ['String', 'Array', 'Number'][i++];) {
    (function (type) {
        Type['is' + type] = function (obj) {
            return Object.prototype.toString.call(obj) === '[object ' + type + ']'
        }
    }(type))
}