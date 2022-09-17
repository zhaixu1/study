let a : boolean = false;
a = true
console.log(a);

// 将b赋值为 hello，只能是 hello或者 wowrld
let b : "hello" | "world"
b = "hello"

// 
let c: number | string
c = 'true'

// 显式和隐式 any, 如果
let d : any
let e 

let f : unknown
f = 1
f = 'sdfdsf'
console.log(f);
// 将 类型未unknown的值赋值给 string的值的时候，需要进行类型判断，否则会报错
let g : string
if( typeof f === 'string') {
    g = f
}
// 类型断言，告诉解析器变量的实际类型
g = f  as string
g = <string>f

// 
function fun() {
    return
}

function fun1(a: number, b: number): number {
    return a + b
}