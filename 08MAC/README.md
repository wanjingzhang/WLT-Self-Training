# OSX的文件系统
### 一. 文件操作
```javascript
ls /Volumes/WanjingsMacintosh/    //Wanjing'sMacintosh 显示桌面上的移动硬盘
man ls                            //使用指南页面
ls -la                            //显示隐藏文件
q                                 //退出当前命令页面
Control + C                       //终止错误命令
```

### 二.切换到其他路径
```javascript
pwd ＃print working directory 显示当前绝对路径 “/Users/zhangwanjing”
ls #list directory contents 列出当前目录的内容
cd #change directory 改变当前目录到指定
```

### 三.处理特殊字符
```javascript
特殊字符前加 \
在特殊符号外加 “”
```

### 四.Command-Line管理文件
```javascript
// 1.cat合并文件
cat textOne.txt >> textTwo.txt
// 2.less打开文件
less textOne.txt
// 3.which查看命令所在路径
which man ls pwd cd
/usr/bin/man
/bin/ls
/bin/pwd
/usr/bin/cd
// 4.file显示文件信息，对没有后缀的文件很友好
file /Users/zhangwanjing/Desktop/works/Terminal/schneider
＃/Users/zhangwanjing/Desktop/works/Terminal/schneider: PNG image data, 146 x 520, 8-bit/color RGB, non-interlaced
// 5.find查找文件夹下的所有文件，包括子目录
find /Users/zhangwanjing/Desktop/ -name "*.psd"
＃/Users/zhangwanjing/Desktop//works/project/1PX/INTERNAL_SITE_1PX/LAYOUT/About_Us_V3_cover_img_thum.psd
// 6.使用-x避免搜索/Volumes文件夹
find -x /Users/zhangwanjing/Desktop/ -name "*.png"
// 7.spotlight搜索
mdfind About_Us_V3_cover_img_thum
＃/Users/zhangwanjing/Desktop/works/project/1PX/INTERNAL_SITE_1PX/LAYOUT/About_Us_V3_cover_img_thum.psd
// 8.-r使用递归命令访问子目录
ls -R /Users/zhangwanjing/Desktop/works/Terminal
#drop box schneider textOne.txt textTwo.txt
#/Users/zhangwanjing/Desktop/works/Terminal/drop box:
#textThree.txt
``` 

### 五.使用通配符
```javascript
*--代表任何长度的字符 *.tiff:匹配所有tiff类型的文件
?--代表单个字符      b?ok:匹配book
[]--定义一定范围的字符 [Dd]ocument:匹配Document\document
```

### 六.编辑文件&文件夹
```javascript
// 1.mkdir创建文件夹make directory
mkdir -p new2/new3/new4
#创建子目录
// 2.cp复制文件
cp 原始路径 目标路径
-R 复制整个文件夹和所有内容,同名文件会被覆盖
// 3.mv移动文件 整个目录移动
mv /Users/zhangwanjing/Desktop/UTC-\ 5-2-2-M/ /Users/zhangwanjing/Desktop/works/Terminal/drop\ box/
// 4.rm 完全删除文件 remove
srm 安全删除文件
// 5.rmdir 删除文件夹
// 6.显示隐藏文件和文件夹
defaults write com.apple.finder AppleShowAllFiles -boolean true ; killall Finder
```

### 七.Command-Line管理系统
```javascript
su user           \\切换用户
sudo              \\Super user do
sudo -s           \\临时取得root级别访问权限
history           \\查看历史纪录
Control ＋ L         \\清屏
```
