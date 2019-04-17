# Object.creat()
> 接着用ES5改写ES3的代码。
> ES5 新增了 `Object.creat()` 方法，该方法会传入一个对象，然后返回一个对象，返回对象的原型指向传入的对象。
> `var output = Object.create(input)`相当于`output.__proto__ = input;` output的原型是input。
> 我们可以简化 `ClassMiddle` 只需要执行 `ClassB.prototype = Object.create(ClassA.prototype);`,等于`ClassB.prototype.__proto__ = ClassA.prototype;`。
> 根据以上两点我们可以修改`extendsClass()`方法
```javascript
function extendsClass(Child,Father){
  //继承父类prototype中定义的实例属性和方法
  Child.prototype = Object.create(Father.prototype);
  Child.prototype.constructor = Child;

  //继承父类的静态属性和方法
  Object.keys(Father).forEach(
    function(key){
      Child[key] = Father[key];
    }
  ) 
}
```
>  完整代码 
```javascript
function ClassA(name,age){
    this.name = name;
    this.age = age;
}
ClassA.prototype.sayName = function(){
    console.log(this.name);
}
ClassA.prototype.sayAge = function(){
    console.log(this.age);
}
ClassA.staticValue = "static value";
ClassA.getStaticValue = function(){
    return ClassA.staticValue;
}
ClassA.setStaticValue = function(value){
    ClassA.staticValue = value;
}
//ClassB
function ClassB(name,age,job){
    ClassA.apply(this,[name,age]);
    this.job = job;
} 
extendsClass(ClassB,ClassA);
ClassB.prototype.sayJob = function(){
    console.log(this.job);
} 
//ExtendsClass
function extendsClass(Child,Father){
  //继承父类prototype中定义的实例属性和方法
  Child.prototype = Object.create(Father.prototype);
  Child.prototype.constructor = Child;

  //继承父类的静态属性和方法
  Object.keys(Father).forEach(
    function(key){
      Child[key] = Father[key];
    }
  ) 
}

var b = new ClassB("wangwei",22,"developer");
var a = new ClassA("sunquan",23,"projectManager");
```


# ES5新方法
> ES5 定义了Object.getPrototype()方法，可以获取对象的原型
```javascript
var obj = new Object();
Object.getPrototypeOf(obj) === Object.prototype // true;
```
 > `Object.keys`
 > `Object.getOwnPropertyNames`
```javascript
var Point = function (x, y) {
  // ...
};
Point.prototype.toString = function() {
  // ...
};
Object.keys(Point.prototype)
// ["toString"]
Object.getOwnPropertyNames(Point.prototype)
// ["constructor","toString"]
```
> ES5中`toString()`是可枚举的。


