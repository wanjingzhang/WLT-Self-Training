
# Promise 
> Promise 对象用于表示一个异步操作的最终状态（完成或失败），以及其返回的值。
> 它的构造函数接收一个参数，是函数，并且传入两个参数：resolve，reject，分别表示异步操作执行成功后的回调函数和异步操作执行失败后的回调函数。 

### 优缺点 
> 优点: 异步调用不阻断当前程序的运行。
> 可以用在API调用等待获取大量数据、计算较复杂的程序，非常费时的操作。
> 缺点: 结构复杂，不易掌握，嵌套结构复杂 
![Drag Promise](https://raw.githubusercontent.com/wanjingzhang/Self-Training/master/02HTML/2JS/ES6/PROMISE.png)
 
### Promise 示例
```javascript
const f = () => { 
  return promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("async await done!"), 1000)
  });  
} 
alert("start");
f().then(str=>{
    alert("then" + str);
}); 
alert("another thing");

//异常处理
Promise.reject(new Error("fail")).then(function(result) {
	// 未被调用
	}, function(error) {
		console.log("Error:"+ error); // stacktrace
});
```

### Tradition 示例
```javascript 
console.log('start');
console.time('trandition');
var calculator = count => {
	var temp = 0;
	for(var i = 0; i< count; i+= 0.0001){
		temp += i * i + (0.00213332) / -0.23242342 + i * 0.2222 * i * i + (0.00213332) / -0.23242342 + i * 0.2222 ;
	}
	return temp;
} 
var t = calculator(204202);
console.log(t);
console.timeEnd('trandition');
console.log('end');
```

### Promise的嵌套
> Promise会按照需要，一步步执行
```javascript
const makeRequest = () => {
  return promise1()
    .then(value1 => {
      // do something
      return promise2(value1)
        .then(value2 => {
          // do something          
          return promise3(value1, value2)
        })
    })
} 
```
> Promise如果不需要返回值，可以不用嵌套，用队列，按照顺序执行。
```javascript
const makeRequest = () => {
  return promise1()
    .then(value1 => {
      // do something
      return Promise.all([value1, promise2(value1)])
    })
    .then(([value1, value2]) => {
      // do something          
      return promise3(value1, value2)
    })
}
```

### 错误捕获
> 在Promise中，无法知道准确的错误位置，所以如果嵌套很深找错比较麻烦
```javascript
const makeRequest = () => {
  return callAPromise()
    .then(() => callAPromise())
    .then(() => callAPromise())
    .then(() => callAPromise())
    .then(() => callAPromise())
    .then(() => {
      throw new Error("oops");
    })
}

makeRequest()
  .catch(err => {
    console.log(err);
    // output
    // Error: oops at callAPromise.then.then.then.then.then (index.js:8:13)
  })
```
