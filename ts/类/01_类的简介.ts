/**
 * 类中主要包含两个部分，属性和方法。
 * 
 * 
 */
class Person{
    // 实例属性。只有new 了实例后才能访问到属性。
    name: string = 'cjk';
    age : number = 12
    // 类属性， 通过Person.age 直接访问。可以使用static 创建静态属性
    static car: string = '宝马'
    // 实例属性可以随便更改，但是类属性是固定的。
    sayHello() {
        console.log('大家好')
    }
    static eat() {
        console.log('该吃饭了');
        
    }
}
const per = new Person()
console.log(per);
console.log(Person.car);
per.sayHello()
Person.eat()

