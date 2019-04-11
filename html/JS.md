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

# JS 高级功能
### 1. 一步
