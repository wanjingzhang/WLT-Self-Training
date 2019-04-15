# 在ES3中不能直接读取对象的原型
```javascript
var obj = new Object();
obj.prototype; //这个指针是 obj对象的原型，可以把它看作是java中的super关键字
Object.prototype.isPrototypeOf(obj); //判断对象是不是另一个对象的原型，true，
```
> ES3实现继承在JS中，所谓的类就是函数，函数就是类。
> 一般在prototype上定义方法, 这样在所以类的示例中都可以使用这些公用的方法。
> 在函数内部初始化属性，使所有类实例的属性都是相互隔离的。

```javacript
// 我们定义两个类 classA和classB ，classB继承A
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
// 在ClassA构造函数中定义了name和age属性，并且在其原型上定义了sayName和sayAge方法。
function ClassB(name,age,job){
    ClassA.apply(this,[name,age]);
    this.job = job;
}
// 在函数中执行apply相当于在Java中执行super()方法，调用父类的构造函数，初始化相关属性。
var b = new ClassB("sunqun",18,"developer");
// 实例化 b 对象，可以访问3个属性以及2个方法。
```