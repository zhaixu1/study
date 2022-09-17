"use strict";
class Dog {
    // 构造函数会在函数创建时调用
    constructor() {
        this.name = 'wangcai';
        this.age = 1;
    }
    eat() {
        console.log('wangwangwang');
    }
}
class mat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name}今年${this.age}岁了`);
    }
}
const mat1 = new mat('小花', 23);
