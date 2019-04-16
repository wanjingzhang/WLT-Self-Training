# OSX的文件系统
### 一. 文件操作 
* Wanjing'sMacintosh 显示桌面上的移动硬盘 `ls /Volumes/WanjingsMacintosh/`    
* 使用指南页面 `man ls` 
* 显示隐藏文件 `ls -la` 
* 退出当前命令页面 `q` 
* 终止错误命令 `Control + C` 

### 二.切换到其他路径 
* 显示当前绝对路径 “/Users/zhangwanjing” `pwd ＃print working directory` 
* 列出当前目录的内容 `ls #list directory contents` 
* 改变当前目录到指定 `cd #change directory` 

### 三.处理特殊字符 
* 特殊字符前加 `\`
* 在特殊符号外加  `""` 

### 四.Command-Line管理文件 
1. cat合并文件  `cat textOne.txt >> textTwo.txt`
1. less打开文件 `less textOne.txt`
1. which查看命令所在路径 `which man ls pwd cd`
```javascript
/usr/bin/man
/bin/ls
/bin/pwd
/usr/bin/cd
```
1. file显示文件信息，对没有后缀的文件很友好 `file /Users/zhangwanjing/Desktop/works/Terminal/schneider`
`＃/Users/zhangwanjing/Desktop/works/Terminal/schneider: PNG image data, 146 x 520, 8-bit/color RGB, non-interlaced`
1. find查找文件夹下的所有文件，包括子目录 `find /Users/zhangwanjing/Desktop/ -name "*.psd"` 
`＃/Users/zhangwanjing/Desktop//works/project/1PX/INTERNAL_SITE_1PX/LAYOUT/About_Us_V3_cover_img_thum.psd`
1. 使用-x避免搜索/Volumes文件夹 `find -x /Users/zhangwanjing/Desktop/ -name "*.png"`
1. spotlight搜索 `mdfind About_Us_V3_cover_img_thum` 
`＃/Users/zhangwanjing/Desktop/works/project/1PX/INTERNAL_SITE_1PX/LAYOUT/About_Us_V3_cover_img_thum.psd`
1. -r使用递归命令访问子目录 `ls -R /Users/zhangwanjing/Desktop/works/Terminal`
```javascript
drop box schneider textOne.txt textTwo.txt
/Users/zhangwanjing/Desktop/works/Terminal/drop box:
textThree.txt 
```

### 五.使用通配符 
* `*`--代表任何长度的字符 
* `*.tiff`:匹配所有tiff类型的文件
* `?`--代表单个字符      
* `b?ok`:匹配book
* `[]`--定义一定范围的字符 
* `[Dd]ocument`:匹配Document\document 

### 六.编辑文件&文件夹 
1. `mkdir`创建文件夹 
`mkdir -p new2/new3/new4` 
1. `cp`复制文件
`cp 原始路径 目标路径`
-R 复制整个文件夹和所有内容,同名文件会被覆盖
1. `mv`移动文件 整个目录移动
`mv /Users/zhangwanjing/Desktop/UTC-\ 5-2-2-M/ /Users/zhangwanjing/Desktop/works/Terminal/drop\ box/`
1. `rm` 完全删除文件
`srm` 安全删除文件
1. `rmdir` 删除文件夹
1. 显示隐藏文件和文件夹
`defaults write com.apple.finder AppleShowAllFiles -boolean true ; killall Finder `

### 七.Command-Line管理系统 
1. 切换用户 `su user`     
1. Super user do `sudo`        
1. 临时取得root级别访问权限 `sudo -s`     
1. 查看历史纪录 `history`     
1. 清屏  `Control ＋ L`   
