* 8.5.2019
[H5 手机陀螺仪](https://blog.csdn.net/u013288800/article/details/82907233)

# Opencv.js Demo

[图像阈值](https://docs.opencv.org/4.1.0/d7/dd0/tutorial_js_thresholding.html)

[形态转换](https://docs.opencv.org/4.1.0/d4/d76/tutorial_js_morphological_ops.html)

[Image AbsSobel Example](https://docs.opencv.org/4.1.0/da/d85/tutorial_js_gradients.html)

[坎尼边缘检测 Good](https://docs.opencv.org/4.1.0/d7/de1/tutorial_js_canny.html)

[轮廓](https://docs.opencv.org/4.1.0/d5/daa/tutorial_js_contours_begin.html)

[轮廓边缘 Good](https://docs.opencv.org/4.1.0/dc/dcf/tutorial_js_contour_features.html)

[模版匹配](https://docs.opencv.org/4.1.0/d8/dd1/tutorial_js_template_matching.html)

[抓取前景 Good](https://docs.opencv.org/4.1.0/dd/dfc/tutorial_js_grabcut.html)

# 适应性
我测试了安卓手机，chrome和firefox都是可以运行的
但是IOS的safari和chrome都不支持
[demo](https://docs.opencv.org/4.1.0/df/d24/tutorial_js_image_display.html)
 
计算方法
获取图片-》得到形状-》获取两点的距离-》计算D,E,H-》得到马桶的类型
 
马桶类型？v，u，o

需要查看Opencv.js支持的浏览器类型，以及设备

8.5.2019
环境测试
React, Opencv, Packaging
[构建opencv在React中的应用](https://brainhub.eu/blog/opencv-react-native-image-processing/)
[opencv4nodejs](https://github.com/justadudewhohacks/opencv4nodejs)
```javascript

// 安装 cmake
brew install cmake
//  新建react项目
npx create-react-app e-bidet
cd e-bidet
npm init react-app e-bidet
npm start

// 安装opencv4nodejs
npm install --save opencv4nodejs
// 运行electron-rebuild
"electron-rebuild": "electron-rebuild -w opencv4nodejs"
npm run electron-rebuild
```

测试图片，边缘形状测试


形状匹配、缩放。 卡缩放成 长方形 
卡片有一定的倾斜角度，但是角度不大；卡片背景是亮色的，而且卡片的边缘应该比较明显。

没错，卡片的边缘比较明显，所以把轮廓找出来（找出来的轮廓当然就是一个大大的矩形），然后用矩形去包围它，得到他的旋转角度，然后根据得到的角度进行旋转，实现矫正

我把该矫正算法命名为基于轮廓提取的矫正算法，因为其关键技术就是通过轮廓来获取旋转角度。
[](https://www.cnblogs.com/skyfsm/p/6902524.html)