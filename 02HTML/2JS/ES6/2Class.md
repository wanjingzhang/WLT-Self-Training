# 类 
> ECMAScript6实现了class语法糖，新的写法让对象的原型更加清晰、更接近面向对象。
> ECMAScript5是原型链继承。 prototype
```javascript
class Point{
    // ...
}
typeof Point // "function"
Point === Point.prototype.constructor // true
```
> 类的数据类型就是函数，类本身就是指向构造函数。
>

```javascript
class Person{
    constructor(name, age, gender, smoke, marital) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.smoke = smoke;
        this.marital = marital;
    }

    describeYourself() {
        console.log(`Hello, My name's ${this.name}, I'm ${this.age} years old, and I'm a ${this.gender}.`);
    }

    toString(){
        // ...
    }

    toValue(){
        // ...
    }
} 
// 等同于
Person.prototype = {
    constructor(){},
    decribleYourself(){},
    toString(){},
    toValue(){},
} 
```

# 继承
```javascript
class Regional extends Person{
    constructor(name, age, gender, smoke, marital, comefrom) {
        super(name, age, gender, smoke, marital);
        this.comefrom = comefrom;
    }

    descriptYourComefrom() {
        console.log(`I'm come from ${this.comefrom}.`);
    }
} 
var XiaoQiang = new Person("XiaoQiang",18, "male", "smoking", "single");
XiaoQiang.describeYourself(); 
var ZhangSan = new Regional("ZhangSan", 22, "female", "non-smoking", "single", "ShangHai");
ZhangSan.descriptYourComefrom();
```

[GoBack](https://github.com/wanjingzhang/Self-Training/tree/master/02HTML/2JS/ES6)