# 作用域
> 分为全局作用域和本地作用域，全局作用域被认为是有害的
> 定义变量可以使用var, let, const
> 方法定义了变量的作用域
```javascript
var person = {
  first: "Doug",
  actions: ['bike', 'hike', 'ski', 'surf'],
  printActions: function() {
  var _this = this;
    _this.actions.forEach(action => {
      var str = _this.first + " likes to " + action;
      console.log(str);
    });
  }
};
person.printActions(); 
var x = 2;
function test() {
  this.x = 1;
  console.log(x);
  console.log(this.x);
} 
var obj = new test(); 
```

# 闭包
> 当内部函数以某一种方式被任何一个外部函数作用域访问时，一个闭包就产生了。 
### 经典示例
```javascript
for(var i = 0;i<5;i++){
    setTimeout(function(){
        console.log("i:" ,i);
    },1000);
}
console.log(i); 
//输出 5
//i:  5 (5) 
``` 
> 使用毕包
```javascript  
var loop = function(_i){
    setTimeout(function(){
        console.log("2: ",_i); 
    },1000)
}
for(var _i=0 ; _i<5 ; _i++ ){
    loop(_i);
}
console.log(_i);
```
> 使用Promise
```javascript
let a = new Promise(
  function(resolve, reject) {
    console.log(1)
    setTimeout(() => console.log(2), 0)
    console.log(3)
    console.log(4)
    resolve(true)
  }
)
a.then(v => {
  console.log(8)
})

let b = new Promise(
  function() {
    console.log(5)
    setTimeout(() => console.log(6), 0)
  }
) 
console.log(7);
//输出结果 1，3，4，5，7，8，2，6
```
> 1. 我们知道Promise是异步的，是指他的then()和catch()方法，Promise本身还是同步的，所以这里先执行a变量内部的Promise同步代码。（同步优先）1,3,4
> 2. 接着执行resolve(true)，进入then()，then是异步，下面还有同步没执行完呢，所以then也滚去消息队列排队等候。（异步靠边）
> 3. b变量也是一个Promise，和a一样，执行内部的同步代码，输出5，setTimeout到消息队列排队等候。
> 4. 最下面同步输出7。
> 5. 同步的代码执行完了，JavaScript就跑去消息队列呼叫异步的代码：异步，出来执行了。这里只有一个异步then，所以输出8。
> 6. 异步执行结束，最后轮到回调。输出2，6
> 口诀：同步=> 异步=> 回调 


[GoBack](https://github.com/wanjingzhang/Self-Training/tree/master/02HTML/2JS/ES6)

