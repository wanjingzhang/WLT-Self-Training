# Async Await异步调用 
### 优点
> 相比Promise写法简洁，可以定义try, catch进行错误捕获。嵌套结构简单

```javascript
//  异步执行 使用 async， promise
async function f() { 
  try {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("async await done!"), 1000)
    }); 
    let result = await promise; // wait till the promise resolves (*) 
    alert(result); // "done!"
  } catch (err) {
    console.log(err)
  }
} 
alert("start");
f(); 
alert("another thing");
// start => another thing => done
```

> 如果去掉等待 就会变成异步方法方法 
> 加上wait就会变成传统的同步方法
```javascript
alert('start'); 
async function calculator(count){
	var temp = 0;
	for(var i = 0; i< count; i+= 0.0001){
		temp += i * i + (0.00213332) / -0.23242342 + i * 0.2222 * i * i + (0.00213332) / -0.23242342 + i * 0.2222 ;
	}
	return temp;
}    
console.time('calculatorPromise');
await calculator(20420).then(str => {alert("then." + str)} );
alert('other things' ); 
// 执行顺序 start => then => other things 
```

> Async，Promise在类中添加
```javascript 
class Waiter {
  async wait() {
    return await Promise.resolve(1);
  }
} 
alert("start");
new Waiter()
  .wait()
  .then(()=>{alert("then")}); // 1
alert("other things");
// 执行顺序 start => other things => then
```

### Async 嵌套使用
```javascript
const makeRequest = async () => {
  const value1 = await promise1()
  const value2 = await promise2(value1)
  return promise3(value1, value2)
}
```

### Async 错误捕获
> 简单明了
```javascript
const makeRequest = async () => {
  await callAPromise()
  await callAPromise()
  await callAPromise()
  await callAPromise()
  await callAPromise()
  throw new Error("oops");
}

makeRequest()
  .catch(err => {
    console.log(err);
    // output
    // Error: oops at makeRequest (index.js:7:9)
  })
```

[GoBack](https://github.com/wanjingzhang/Self-Training/tree/master/02HTML/2JS/ES6)