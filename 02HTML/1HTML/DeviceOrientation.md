# 处理方向变化的 deviceorientation 事件

> 监听 deviceorientation 事件比较简单： 
``` javascript
 window.addEventListener('deviceorientation', handleFunc, false);
 // 然后在回调函数 handleFunc 中会有设备转过的角度：
 function handleFunc(evnet){
    var alpha = event.alpha; // alpha：表示设备沿 Z 轴旋转的角度，范围为 0~360；
    var beta = event.beta; // beta：表示设备在x轴上的旋转角度，范围为-180~180。它描述的是设备由前向后旋转的情况；
    var gamma = event.gamma; // gamma：表示设备在y轴上的旋转角度，范围为-90~90。它描述的是设备由左向右旋转的情况。
    //这里的 alpha, beta, gamma 表示的是相对于坐标轴，设备在某个给定轴上的旋转量。
 }
 ```
  






 
来源：https://juejin.im/post/5854bca4128fe100698d7467 