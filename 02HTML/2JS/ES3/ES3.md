# ES3
> 在ES3中不能直接读取对象的原型
```javascript
var obj = new Object();
obj.prototype; //这个指针是 obj 对象的原型，可以把它看作是 java 中的 super 关键字
Object.prototype.isPrototypeOf(obj); //判断对象是不是另一个对象的原型，true，
```
> ES3实现继承在JS中，所谓的类就是函数，函数就是类。
> 一般在prototype上定义方法, 这样在所以类的示例中都可以使用这些公用的方法。
> 在函数内部初始化属性，使所有类实例的属性都是相互隔离的。
1. 定义Class的prototype原型链
```javascript
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
//ClassB.prototype = ClassA.prototype;
//ClassB.prototype.sayJob = function(){
//    console.log(this.job);
//}

var b = new ClassB("sunqun",18,"developer");
var a = new ClassA("liubei",22,"engineer");

```
1. 添加prototype修复ClassA的原型
> 在函数中执行 apply 相当于在Java中执行 super() 方法，调用父类的构造函数，初始化相关属性。
> var b = new ClassB("sunqun",18,"developer");
> 实例化 b 对象，可以访问3个属性以及2个方法。
> 但是此时 b 还不能访问 ClassA 中定义的 sayName和sayAge方法， 
> 新增代码 ClassB.prototype = ClassA.prototype;
> 其实这里修改了 ClassA.prototype 方法，导致ClassA的所有实例都有 sayJob 方法。
> 为了解决这个问题我们修改 ClassB 的代码。
```javascript
function ClassB(name,age,job){
    ClassA.apply(this,[name,age]);
    this.job = job;
}
ClassB.prototype = new ClassA();
ClassB.prototype.constructor = ClassB;
ClassB.prototype.sayJob = function(){
    console.log(this.job);
}
```
1. 加入ClassMiddle做转换 
> 以上代码中 ClassB.prototype = new ClassA() 时，给 ClassA 传递的是空的参数，但是 ClassA 的构造函数默认是有值的。
> 所以在构造函数中对传入的参数进行各种处理时，传递空参数可能回导致报错。
> 在以下代码中我们添加了一个 ClassMiddle 作为 ClassB 和 ClassA 之间的桥梁。
```javascript
function ClassB(name,age,job){
    ClassA.apply(this,[name,age]);
    this.job = job;
}
function ClassMiddle(){

}
ClassMiddle.prototype = ClassA.prototype;
ClassB.prototype = new ClassMiddle();
ClassB.prototype.constructor = ClassB;
ClassB.prototype.sayJob = function(){
    console.log(this.job);
}
```
> 因为`ClassMiddle.prototype`指向了`ClassA.prototype`，所以`ClassB.prototype.__proto__`也指向了`ClassA.prototype`
> 这样`ClassB`能使用`ClassA`中定义的方法
1. 添加静态方法
```javascript
//为ClassA添加静态属性
ClassA.staticValue = "static value";
//为ClassA添加静态方法
ClassA.getStaticValue = function(){
    return ClassA.staticValue;
}
ClassA.setStaticValue = function(value){
    ClassA.staticValue = value;
};
```
> 静态属性和方法不属于某一实例，而是属于类本身。静态方法是直接添加在ClassA上的。
> ClassA.prototype 定义的方法是实例方法，不是静态的。
> 为了使ClassB继承ClassA的静态方法，我们需要为ClassB添加如下代码：
```javascript
//ClassB继承ClassA的静态属性和方法
for(var p in ClassA){
    if(ClassA.hasOwnProperty(p)){
        ClassB[p] = ClassA[p];
    }
}
```

1. 集成extendsClass
```javascript
function extendsClass(Child,Father){
    function ClassMiddle(){

    }
    ClassMiddle.prototype = Father.prototype;
    Child.prototype = new ClassMiddle();
    Child.prototype.constructor = Child;

    for (var p in Father){
        if(Father.hasOwnProperty(p)){
            Child[p] = Father[p];
        }
    }
}
```

1. 最终组合代码
```javascript
// ClassA
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
    function ClassMiddle(){
    }
    ClassMiddle.prototype = Father.prototype;
    Child.prototype = new ClassMiddle();
    Child.prototype.constructor = Child;

    for(var p in Father){
        if(Father.hasOwnProperty(p)){
            Child[p] = Father[p];
        }
    }
}

var b = new ClassB("wangwei",22,"developer");
var a = new ClassA("sunquan",23,"projectManager");
```
