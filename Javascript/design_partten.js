// http://www.alloyteam.com/2012/10/common-javascript-design-patterns/
/*单例模式
单例模式是一种简单但非常实用的模式，特别是惰性单例技术，在合适的时候才创建对象，
并且只创建唯一的一个。更奇妙的是，创建对象和管理单例的职责被分布在两个不同的方
法中，这两个方法组合起来才具有单例模式的威力。
*/
var singleton = function (fn, thisArg) {
    var rslt
    return function () {
        return rslt || (rslt = fn.apply(thisArg, arguments))
    }
}

// Javascript 设计模式与开发实践 5
/*策略模式
策略模式利用组合、委托和多态等技术和思想，可以有效地避免多重条件选择语句。
策略模式提供了对开放—封闭原则的完美支持，将算法封装在独立的 strategy 中，使得它
们易于切换，易于理解，易于扩展。
策略模式中的算法也可以复用在系统的其他地方，从而避免许多重复的复制粘贴工作。
在策略模式中利用组合和委托来让 Context 拥有执行算法的能力，这也是继承的一种更轻
便的替代方案。
*/
var strategies = {
    "S": function (salary) {
        return salary * 4;
    },
    "A": function (salary) {
        return salary * 3;
    },
    "B": function (salary) {
        return salary * 2;
    }
}

var calculateBonus = function (level, salary) {
    return strategies[level](salary);
};

console.log(calculateBonus('S', 20000)); // 输出：80000
console.log(calculateBonus('A', 10000)); // 输出：30000