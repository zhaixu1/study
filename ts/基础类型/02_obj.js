var a1;
a1 = { name: 'xiaohong' };
console.log(a1);
// 必须有name属性
var c2;
c2 = { age: 14, name: '小花' };
console.log(c2);
var d2;
d2 = { name: '小红' };
d2 = function () {
    return true;
};
// 定义一个e2， 希望有两个参数，一个是number类型一个是string，返回值是一个string类型
// 设置函数的结构类型声明
var e2;
e2 = function (a, b) {
    return a + b;
};
console.log(e2(1, 'numberdsfd'));
// 声明 number类型的数组
var f2;
f2 = [1, 2, 3];
console.log(f2);
var g2;
g2 = [1, '2323', 22];
console.log(g2);
