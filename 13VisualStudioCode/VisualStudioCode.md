# VisualStudioCode 快捷键

### 1. 基础编辑
* cmd + I 			//选中一行
* cmd + K , Z		//全屏
* opt + UP			//行排序
* cmd + shift + \ 	//括号配对
* Cmd + K , M 新建文件类型

### 2. 终端
* control + ～		//打开终端
* cmd + shift + P	//运行选中行
	> run selected text
* cmd + UP 			//向上翻页
* cmd + K			//清屏

### 3. 文件
* cmd + shift + S 	//另存为
* cmd + alt + S		//保存

### 4. 扩展
* git --version		//代码控制
* Express			//服务
  ctrol + shift + P  [start server, stop server], Express: Host current 
* REST Client		//发送HTTP请求，查看响应
  Get http:// 
  保存为**.http文件
* Jquery
* SASS
* Emmet 蚂蚁代码生成器 docs.emmet.io
  nav#myNav.ic>ul>(li.myLi)*5

### 5. 用户代码片段
```javascript
//定义
"document.querySelector": {
	"prefix": "dqs",
	"body": [
		"var ${1:elem} = document.querySelector('${2:expr}');"
	],
	"description": "Query for an element using CSS syntax"
}
//调用
var elem = document.querySelector('expr');
```

### 6. 编辑器
* cmd + B					\\显示左侧文件列表
* cmd + shift + T			\\打开刚刚打开的文件	
* cmd + opt + R				\\在Fiddle中打开
* cmd + |					\\在不同窗口打开相同的文件
* cmd + W					\\关闭
* 右键open to the side		 \\在右边打开
* cmd + control + Right		\\向右分窗口
* cmd + control + 1			\\合并窗口
* cmd + 1, cmd + 2			\\选择当前窗口
* control + space			\\智能感知

### 7. 代码导航
* cmd + shift + O			\\@跳转定义的变量
* control + G				\\跳转行
* cmd + P					\\文件列表

### 8. 多选
* cmd + D					\\选择当前鼠标所在的代码
* cmd + shift + L			\\重复选择相同的代码
* cmd + opt + UP			\\向上选择

### 9. MD文件
* cmd + shift + v			\\ 预览markdown文件
 