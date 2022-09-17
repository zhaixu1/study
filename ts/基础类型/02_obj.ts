let a1 : {name: string}
a1 = {name: 'xiaohong'}
console.log(a1);

// 必须有name属性
let c2 : {name: string, [propName: string]: any}
c2 = {age: 14, name: '小花'}
console.log(c2);

let d2: object
d2 = {name: '小红'}
d2 = function (): boolean {
    return true
}
// 定义一个e2， 希望有两个参数，一个是number类型一个是string，返回值是一个string类型
// 设置函数的结构类型声明
let e2 : (a:number, b : string) => string

e2 = function(a: number, b: string) {
    return a + b
}

console.log(e2(1, 'numberdsfd'));


// 声明 number类型的数组
let f2 : Array<number>
f2 = [1, 2, 3]
console.log(f2);

let g2 : Array<any>
g2 = [1, '2323' ,22]
console.log(g2);

// 元祖就是固定长度的数组
let h2 : [string, number]
h2 = ['22', 122]


var h = 1213
h = 'wewe'





