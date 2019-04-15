# 对象的原型
> Object.getPrototypeOf()获取对象的原型
> ES5 定义了Object.getPrototype()方法，可以获取对象的原型
```javascript
var obj = new Object();
Object.getPrototypeOf(obj) === Object.prototype // true;
```
 
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
> ES5 的写法，toString方法就是可枚举的。

```javacript

```
