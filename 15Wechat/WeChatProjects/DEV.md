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
