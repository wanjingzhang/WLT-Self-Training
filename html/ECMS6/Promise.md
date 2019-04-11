
# Promise 
> Promise 对象用于表示一个异步操作的最终状态（完成或失败），以及其返回的值。
> 它的构造函数接收一个参数，是函数，并且传入两个参数：resolve，reject，分别表示异步操作执行成功后的回调函数和异步操作执行失败后的回调函数。
 
```javascript 
new Promise((resolve,reject) => {
    if(typeof seconds !== 'number'){
        reject(new Error("Argument seconds should be a number~!")) 
    }
    setTimeout(() => resolve(`${seconds} second delay is up`),
        seconds * 1000);
});
```

### 优点
> 异步调用不阻断当前程序的运行。
> 可以用在API调用、计算大量数据，需要暂用较长时间。
### 缺点
> 结构复杂，不易掌握
> 两种方式在调用API的运行时间基本一致。影响调用时间的是API的相应速度。

### Tradition 示例
```javascript 
alert("start");
const Http = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/posts"; 
console.time("trandition");
Http.open("GET",url,false); 
Http.send();
Http.onreadystatechange = (e) =>{ 
    if(e.target.readyState == 4 && e.target.status == 200){ 
        alert('success!');
        console.timeEnd("trandition");
    } else if(e.target.status == 404){
        alert('default!');
        console.timeEnd("trandition");
    } 
}
alert("other things");
```
### Promise HTTP 访问示例
```javascript 
const Http = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/posts"; 
alert("start");
console.time("promise");
const getHttp = url =>{
    return new Promise((resolve,reject) => {
        Http.open("GET",url); 
        Http.send();

        Http.onreadystatechange = (e) =>{ 
            console.log(e);
            if(e.target.readyState == 4 && e.target.status == 200){
				resolve(e.target.responseText); 
				alert("success~");
                // console.log(e.target.responseText);
            } else if(e.target.status == 404){
				reject(`The data not accessed successfully! e.target.readyState: ${e.target.readyState} , e.target.status ${e.target.status}`);
				alert("failed");
            } 
			console.timeEnd("promise");
			
        }

        Http.ontimeout = (e) =>{ 
            reject(`The data not accessed successfully! e.target.readyState: ${e.target.readyState} , e.target.status ${e.target.status}`); 
            console.timeEnd("promise");
        }	 
    })
}  
getHttp(url).then(res => {
    console.log("resolve: " + res);
} , err=> {
    console.log("reject: " + err);
});  
alert("other things");
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
### Promise 计算器示例 
```javascript 
console.log('start'); 
var calculator = count => {
	var temp = 0;
	for(var i = 0; i< count; i+= 0.0001){
		temp += i * i + (0.00213332) / -0.23242342 + i * 0.2222 * i * i + (0.00213332) / -0.23242342 + i * 0.2222 ;
	}
	return temp;
}   

var calculatorPromise = count =>{
	return new Promise((resolve,reject) => {
		var result = calculator(count) 
		if(typeof(result) === 'number'){
			resolve("successful calculator get result = " + result);
		}else{
			reject("badly calculator!");
		}

		console.timeEnd('calculatorPromise');
	})
}
console.time('calculatorPromise');
calculatorPromise(20420).then(
	result => {
		console.log( `then resolve:  ${result}`);
	}
	,
	fail => {
		console.log(` then reject: ${fail}`);
	}
); 
console.log('end  ~~~~~~~~'); 
```
### setTimeout Promise 示例
```javascript
console.log('start');
const delay = seconds => {
	return new Promise((resolve,reject) => {
		if(typeof seconds !== 'number'){
			// reject(new Error("Argument seconds should be a number~!"))
			reject("Argument seconds should be a number~!");
		}
		setTimeout(
			() => resolve(`${seconds} second delay is up`),
			seconds * 1000
		); 
})
}
delay(1).then(msg => console.log(msg));
console.log("end");
```
### settimeout tradition 示例
```javascript
console.log('start');
var delay = (seconds,callback) =>{
	setTimeout(callback, seconds);
}

delay(1,function(){
	console.log('callback');
})
console.log('end');
```




