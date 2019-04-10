
#Promise 
> Promise 对象用于表示一个异步操作的最终状态（完成或失败），以及其返回的值。
> 它的构造函数接收一个参数，是函数，并且传入两个参数：resolve，reject，分别表示异步操作执行成功后的回调函数和异步操作执行失败后的回调函数。
 
```javascript 
new Promise((resolve,reject) => {
    if(typeof seconds !== 'number'){
        // reject(new Error("Argument seconds should be a number~!"))
        reject("Argument seconds should be a number~!");
    }
    setTimeout(() => resolve(`${seconds} second delay is up`),
        seconds * 1000);
});
```

### 优点
> 异步调用不阻断当前程序的运行。
> 可以用在API调用、计算大量数据，需要暂用较长时间。
### Promise 示例
```javascript 
const Http = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/posts"; 
console.time("promise");
const getHttp = url =>{
    return new Promise((resolve,reject) => {
        Http.open("GET",url); 
        Http.send();

        Http.onreadystatechange = (e) =>{ 
            console.log(e);
            if(e.target.readyState == 4 && e.target.status == 200){
                resolve(e.target.responseText); 
                // console.log(e.target.responseText);
            } else if(e.target.status == 404){
                reject(`The data not accessed successfully! e.target.readyState: ${e.target.readyState} , e.target.status ${e.target.status}`);
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
```

### Tradition 示例
```javascript 
console.time("trandition");
Http.open("GET",url); 
Http.send();
Http.onreadystatechange = (e) =>{ 
    if(e.target.readyState == 4 && e.target.status == 200){ 
        console.log('success!');
        console.timeEnd("trandition");
    } else if(e.target.status == 404){
        console.log('default!');
        console.timeEnd("trandition");
    } 
}
```




