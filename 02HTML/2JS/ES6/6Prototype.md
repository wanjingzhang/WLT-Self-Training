# ES6 原型链

> __proto__ 属性可以获取对象原型

```javascript
var obj = new Object();
obj.__proto__ === Object.prototype // 返回true
```

# 原型链
```javascript
function Person(){};
var p = new Person();
```

> p.__proto__ 指向了 Person.prototype, 
> Person.prototype 的原型是 Person.prototype.__proto__, 
> Person.prototype.__proto__ 指向了 Object.prototype,
> Object.prototype.__proto__ 为 null
 
#  
```javacript

```

[GoBack](https://github.com/wanjingzhang/Self-Training/tree/master/02HTML/2JS/ES6)