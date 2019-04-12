# Quick start
###### Hello World
```javascript
ReactDOM.render(
   <h1>Hello, world!</h1>,
   document.getElementById('root')
);
```
### 使用 JSX
```javascript
 const element = <h1>Hello, world!</h1>
 JSX produces React "elements".
```
### 嵌入表达式 in JSX
```javascript
 const name = 'Josh Perez';
 const element = <h1>Hello, {name}</h1>;
 ReactDOM.render(
 element,
 document.getElementById('root')
 );
```

electron-rebuild 包重新编译原生模块，它帮你自动完成了下载 headers、编译原生模块等步骤：
npm install --save-dev electron-rebuild

# 每次运行"npm install"时，也运行这条命令
./node_modules/.bin/electron-rebuild


