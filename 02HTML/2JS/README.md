# JS 常用功能
### 1. 正则表达式
```javascript
var string1 = 'This is the longest string ever.';
var string2 = 'This is the shortest string ever.';
var string3 = 'Is this the thing called Mount Everest?';
var string4 = 'This is the Sherman on the Mount.'; 
var regex = /this/;
console.log(regex.test(string1));
console.log(regex.test(string2));
console.log(regex.test(string3));
console.log(regex.test(string4));
```
### 2. 弹出对话框
```javascript
//  确定取消
var answer = window.confirm("Click OK, get true. Click cancel, get false.");
if(answer === true){
    console.log("You said true!");
}else{
    console.log("You said something else!");
} 
// 输入对话框
var answer = window.prompt("Type YES, NO, or MAYBE. Then click OK.");
switch (answer) {
    case "YES":
        console.log("You said YES!");
        break;
    case "MAYBE":
        console.log("You said maybe. I don't know that what to make of that.");
        break;
    case "NO":
        console.log("You said no. :(");
        break;
    default:
        console.log("You rebel, you!");
        break;
}
``` 
### 3. 获取类型
```javascript
var thing = "twelve";
typeof thing; //"string"
thing.hasOwnProperty("length"); // true
``` 
### 4. 原型继承 枚举
```javascript
var pages = {
    first:"Home",
    second:"LivingRoom",
    third:"bathroom"
}
for(var p in pages){
    if(pages.hasOwnProperty(p)){
        console.log(p,pages[p]);
    }
}
``` 
### 5. 字串重复
```javascript
var speakSomething = (str,times) => {
    console.log(str.repeat(times));         //Hey Hey 
    console.log(Array(times).join(str));    //Hey
}
speakSomething("Hey ", 2);
``` 
### 6. MAP遍历
```javascript
function doubleIt(number){
    return (number *=2);
}
var myNumbers = [1,2,3,4,5];
var myDoubles = myNumbers.map(doubleIt);
```

### 7. 响应式布局
```javascript
var ad = document.querySelector('#primary-content');
resizeHandler();
window.addEventListener('resize', resizeHandler);
function resizeHandler() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var size = getSize(width, height);
    ad.style.width = size.w + 'px';
    ad.style.height = size.h + 'px';
}

function getSize(width, height) {
    var layoutWidth = 200;
    var layoutHeight = 400;

    var w = layoutWidth;
    var h = layoutHeight;
    if ((width / height) > (layoutWidth / layoutHeight)) {
        w = layoutWidth * height / layoutHeight;
        h = height;
    }
    else {
        w = width;
        h = layoutHeight * width / layoutWidth;
    }
    
    // if (w > layoutWidth) {
    // 	w = layoutWidth;
    // 	h = layoutHeight;
    // }

    return {
        w: w,
        h: h
    }
}
```

# JS 高级功能
### 1. 异步调用包括 Promises, async, await
> 可以不阻隔用户操作，是页面响应变得流畅。

### HTTP 异步调用示例
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

