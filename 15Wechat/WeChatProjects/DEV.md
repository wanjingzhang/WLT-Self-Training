### 本地存储
微信给每个小程序分配了10M的存储空间，对缓存的操作类似H5的localStorage。提供了三个主要接口：
1. wx.setStorage(wx.setStorageSync)
1. wx.getStorage(wx.getStorageSync)
1. wx.clearStorage(wx.clearStorageSync) // 可以清除所有的数据

1. wx.removeStorage(wx.removeStorageSync) //移除某个数据
1. wx.getStorageInfoSync() // .keys, .currentSize, . limitSize 返回数据的集合、所占空间、限制最大等属性
异步可以解决页面卡顿的问题。超过5M的空间需要用try catch方法捕捉错误。括号里面是同步的方法。

### 文件操作
1. wx.downloadFile({}) // 下载文件
1. wx.saveFile({}) // 保存文件
1. wx.openFile({}) // 打开文件
1. wx.getSavedFileList({}) // 获取本地已保存的文件列表
1. wx.getSavedFileInfo({}) // 获取文件信息
1. wx.removeSavedFile({}) // 移除文件

### 网络数据请求
1. wx.request // 上传文件
1. wx.downloadFile // 下载文件
1. wx.connectSocket // WebSocket通信

### 调用URL的API
1. wx.navigateTo // 新窗口打开页面
1. wx.redirectTo // 原窗口打开页面

### 视图层
1. <view> // 显示页面内容，替代html大部分标签
1. <text> // 页面数据绑定，长按选中，不可嵌套
1. <!--index.wxml--> // 注释
1. <navigator> // 只支持小程序内跳转，不支持外部链接

### wxss 样式表
1. 两种屏幕尺寸：rpx,rem. 1rpx=0.5px=1, 1rem=(750/20)rpx 
1. 样式导入 @import
/**common.wxss**/
.small-p{
    padding:5px;
}
/**app.wxss**/
@import "common.wxss"
.middle-p{
    padding:15px;
}
1. 内联样式
<view style="{{color}};"/>
<view class="normal_view"/>
1. wxss支持的选择器 .class, #id, element, element,element, ::after, ::before

### 数据绑定
1. 显示数据
<view>{{text}}</view> 
Page({
    data:{
        text:"欢迎学习"
    }
})
1. 主件属性
<view id="item-{{id}}"></view>
Page({
    data:{
        id:0
    }
})
1. 控制属性
<view wx:if="{{condition}}">欢迎学习</view>
Page({
    data:{
        condition:false
    }
})
1. 关键字
<checkbox checked="{{true}}"></checkbox>

### 数据的运算
1. 三元
<view>{{a+b}} + {{c}} + d</view>
Page({
    data:{
        a:1,
        b:2,
        c:3
    }
})
1. 判断
<view wx:if="{{count > 5}}">欢迎学习</view>
Page({
    data:{
        count:6
    }
})
1. 字符串运算
<view>{{"hello" + name}}</view>
Page({
    data:{
        name:"MINA"
    }
})
1. 数据运算路径
<view>{{object.key}} {{array[0]}}</view>
Page({
    data:{
        object:{
            key:"Hello"
        },
        array:['MINA']
    }
})

1. 数据的组合
<view wx:for-items="{{[value,1,2,3,4]}}">{{item}}</view>
Page({
    data:{
        value:0
    }
})

1. 数据类型
Boolean, Number, String, Array, Object, EventHandler, Any

1. 循环绑定 数值
<view wx:for="{{array}}">{{item}}</view>
Page({
    data:{
        array:["第一章","第二章","第三章","第四章","第五章"]
    }
})

1. 循环绑定 key-value
<view wx:for="{{items}}">
{{index}}:{{item.fruits}}
</view>
Page({
    data:{
        items:[
            {fruits:'apple'},
            {fruits:'orange'},
            {fruits:'banana'}
        ]
    }
})

1. 模版
<!--template.wxml-->
<template>
    <view>FirstName:{{firstName}},LastName:{{lastName}}</view>
</template>
<!--实用模版-->
<template is="StudentName" data="{{...StudentA}}"></template>
Page({
    data:{
        StudentA:{fistName:'San',lastName:'Zhang'}
    }
})

### 事件
touchstart // 手指触摸
touchmove // 手指触摸后移动
touchcancel // 手指触摸被打断
touchend // 手指触摸结束
tap // 点击事件
longtap // 长按事件
TouchEvent // 触摸事件

1. 事件的属性
type // 类型
timeStamp // 事件生成的时间戳，从页面打开到触发
target // 触发事件的目标
id // 事件组件的id
dataset // 事件组件上有data-开头自定义属性组成的集合
offsetLeft, offsetTop // 事件组件坐标系统中的偏移量
currentTarget // 当前触发事件的目标
touches // 触摸事件，当前停留在屏幕中触摸点的信息数组(identifier,pageX,pageY,clientX,clientY)
changedTouches // 触摸事件，当前变化的触摸点信息的数组
detail // 额外的信息,自定义事件

### 文件的引用
1. import // 使用目标文件的template, 有作用域的概念。不可以越级引用，c不可引用a
<!--pages/a/a.wxml-->
<template name="A">
    <text>{{text}}</text>
</template>
<!--pages/b/b.wxml-->
<import src="../../pages/a/a.wxml">
<template is="A" data="{{text:'b import a'}}">

1. include // 代码整个引入，相当于复制代码到include的位置，可跨级引用
<!--pages/c/c.wxml-->
<include src="../../pages/a/a.wxml">

### 组件
1. 公有属性
id, class, style,hidden , data-*, bind*/catch*

1. 视图容器
view // 视图容器
scroll-view // 可滚动的视图容器
swiper // 可滑动的视图容器
movable-area // 可移动的视图容器，在页面中可以拖拽滑动
cover-view // 覆盖在原生组件之上的文本视图

1. 基础容器
icon // 图标
text // 文字
rich-text // 富文本
progress // 进度条

1. 视图容器
view, scroll-view, swiper, swiper-item, movable-area, movable-view, cover-view, cover-image

1. 表单
button // 按钮
form // 表单
input // 输入框
checkbox // 单项选择器
radio // 多项选择器
picker // 列表选择器
picker-view // 嵌入页面的滚动选择
slider // 滑动选择器
switch // 开关选择器
label // 标签
textarea // 多行输入框
