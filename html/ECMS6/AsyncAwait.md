# Async Await异步调用 
> Async await 写法简单
```javascript
async function f() { 
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("async await done!"), 1000)
  }); 
  let result = await promise; // wait till the promise resolves (*) 
  alert(result); // "done!"
} 
alert("start");
f(); 
alert("another thing");
```

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
```


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
// start => then. => other things
// await 等待当前函数执行完毕后再执行下一步。
```