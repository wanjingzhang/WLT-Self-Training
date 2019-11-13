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
1. <view> // 显示页面内容
1. <text> // 页面数据绑定
1. <!--index.wxml--> // 注释

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