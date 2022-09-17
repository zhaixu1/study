class Dog {
    // 构造函数会在函数创建时调用
    constructor() {

    }
    name: string = 'wangcai';
    age: number = 1
    eat() {
        console.log('wangwangwang');
        
    }
}

class mat {
    // 在构造函数中，如果初始化属性必须声明
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }
    eat() {
        console.log(`${this.name}今年${this.age}岁了`);
        
    }
}
const mat1 = new mat('小花', 23)
mat1.eat()
