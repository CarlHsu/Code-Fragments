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

/*
单一职责原则
单一职责原则指的是，就一个类（通常也包括对象和函数等）而言，应该仅有一个引起它变
化的原因。如果一个对象承担了多项职责，就意味着这个对象将变得巨大，引起它变化的原因可
能会有多个。面向对象设计鼓励将行为分布到细粒度的对象之中，如果一个对象承担的职责过多，
等于把这些职责耦合到了一起，这种耦合会导致脆弱和低内聚的设计。当变化发生时，设计可能
会遭到意外的破坏。
*/

/*
依赖倒置(反转)原则 https://zh.wikipedia.org/wiki/%E4%BE%9D%E8%B5%96%E5%8F%8D%E8%BD%AC%E5%8E%9F%E5%88%99
在面向对象编程领域中，依赖反转原则（Dependency inversion principle，DIP）是指一种
特定的解耦（传统的依赖关系创建在高层次上，而具体的策略设置则应用在低层次的模块上）形
式，使得高层次的模块不依赖于低层次的模块的实现细节，依赖关系被颠倒（反转），从而使得
低层次模块依赖于高层次模块的需求抽象。

该原则规定：
1.高层次的模块不应该依赖于低层次的模块，两者都应该依赖于抽象接口。
2.抽象接口不应该依赖于具体实现。而具体实现则应该依赖于抽象接口。
*/

