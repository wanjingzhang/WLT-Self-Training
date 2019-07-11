# 使用Canvas來製作小遊戲吧 by吳哲宇

20180718



## 當周挑戰
![](https://i.imgur.com/0BEoe6c.png)

設計稿：https://hackmd.io/N5yEjm2vSx6D41qAbJGDmw

---

## Canvas開發起手式
跟前端切版的異同
* 位置需要自行控制
* 需要自行處理繪圖層
* 有比較複雜的互動邏輯跟即時控制



## Canvas應用範例
球 https://codepen.io/frank890417/pen/pLgZWG?editors=1011
聖誕樹 https://codepen.io/frank890417/pen/JvjvoX?editors=0011
下樓梯 https://codepen.io/frank890417/pen/Jvbqdv
小精靈 https://codepen.io/frank890417/pen/jxBeWO?editors=0011
Agar.io https://codepen.io/frank890417/pen/aGOgvq


## 常用框架(函式庫)
* Canvas https://developer.mozilla.org/zh-TW/docs/Web/API/Canvas_API/Tutorial
* Pixi.js http://www.pixijs.com/
* Phasor.js https://phaser.io/
* Three.js https://threejs.org/
* p5.js https://p5js.org/
* TweenMax https://greensock.com/tweenmax



## 框架(函式庫)裡的核心概念
* 繪圖層次的抽象/高階化
    * 什麼叫做低階的繪圖？ 
* 物件的包裝
    * 圖形、位置、邏輯、控制
* 物理模型的包裝
    * 速度、加速度、蹦狀
* 場景的包裝
    * 管理、呈現方式



## 核心概念的數學跟程式基礎
* 座標
    * 在哪個位置繪製
* 向量
    * 如何優雅的描述位置跟變化
* 角度
    * 用不同的方式描述位置
* 碰撞偵測
    * 偵測交疊



## 此次挑戰會用到的概念
* 繪製基礎
* 相對與進階繪製
* 遊戲結構的製作
* 極座標
* 碰撞與物理基礎
* 物件導向開發
* TweenMax的補間應用
https://youtu.be/sOHcx9jekzs?t=5949

---

## 實作
- 範例：
https://codepen.io/frank890417/pen/wxWQGe
- youtube
https://youtu.be/sOHcx9jekzs?t=3434
- step
    - □
    - 格線：背景
        - translate
    - 船：中間、旋轉
        - 滑鼠事件
    - 物件化
        - 物件導向結構-粒子篇
        - 三角函數
        - translate、draw
    - 子彈
        - update、draw
    - 子彈射擊
        - time
        - TweenMax的補間

---
## 簡報筆記
- video：https://youtu.be/sOHcx9jekzs

- 教材
    - 課程連結：https://goo.gl/qsvg3z
        - 單元45. Canvas與特效動畫-繪圖基礎語法與動畫原理 
        - 單元50. Canvas與特效動畫-ES6類別定義與模板製作 
        - 單元52. Canvas與特效動畫-極座標的基礎概念 

    - 簡報連結：https://goo.gl/vFfp1H

- 繪圖基礎語法與動畫原理
    - Canvas基礎特性
    - 我們在Canvas裡要掌握的
        - 繪製圖形
        - 向量概念
        - 三角函數
        - OOP
    - 點線⾯構成圖形
    - Canvas的座標系⽅向
        - 角度：逆時針
    - 路徑繪圖
        - 範例
        - 路徑開始與封閉： beginPath / closePath
        - 移動與畫線 moveTo / lineTo / arc ….
        - 指定填⾊或線條顏⾊ fillStyle / strokeStyle
        - 指定填⾊或線條顏⾊ fillStyle / lineStyle
        - 讓線條變粗 lineWidth
        - 設定畫布的寬高
        ```javascript=
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        ```
    - 圓形的路徑
https://youtu.be/sOHcx9jekzs?t=3713
    - 時間函數與動畫
        - 特性：30 60/sec 
        - 利用不完全清除保留之前狀態
    - 簡易互動輸入 取得滑鼠位置
    
- 畫布的座標系操作
    - 進階繪製
        - 重複繪製的圖形
        - 不好計算的角度
        - 相對關係的繪製
    - 畫布的座標系轉移
        - 轉移方法
            - Translate( x , y ) // 偏移 (移動紙張)
            - Rotate( deg ) // 中⼼旋轉 deg
            - Scale( x , y ) // 中⼼
        - 座標轉換在繪製物件的應⽤（好處）
            - 座標重置
            - 相對位置
            - 當下座標做額外繪製
    - 狀態的保存與還原
        - 概念
            - ctx.save( ) //儲存當下座標狀態
            - ctx.restore( ) //還原上⼀個儲存的狀態
            - stack：先進後出
        - 應用在函數上
            - https://youtu.be/sOHcx9jekzs?t=1681
        - 相對關係的繪製、相對⾓度的繪製、多重轉移的應⽤
            - 多重轉移的應⽤（邊轉邊畫）ex
            https://youtu.be/sOHcx9jekzs?t=1859
            ![Imgur](https://i.imgur.com/Rhlb0ns.png)
- 物理基礎（速度/加速度）
https://youtu.be/sOHcx9jekzs?t=2273
    - 概念
    ![Imgur](https://i.imgur.com/yXKDNai.png)
    - Canvas應用範例 
        - ex 小精靈 https://youtu.be/sOHcx9jekzs?t=2574
        - ex agar.io：TweenMax

- ES6類別定義與模板
https://youtu.be/sOHcx9jekzs?t=3014
    - 基礎繪圖程式架構
    ![Imgur](https://i.imgur.com/9ppc3J9.png)
    - 程式結構的規劃
        - init
        - update
        - draw
    - 原型、原型繼承、建構式、ES6 Class
https://wcc723.github.io/javascript/2017/12/17/javascript-prototype/

- 物件導向結構-粒子篇
https://youtu.be/sOHcx9jekzs?t=4564
    - 粒子系統的製作
    - 一些粒子範例
    - 粒子的生存週期
    - 粒子屬性-物理與運動模型
    - 參數的選填
    - object.assign

- 三角函數入門、三角函數與波的軌跡
https://youtu.be/sOHcx9jekzs?t=5821
    - 極座標跟一般座標的轉換
    - 圓周軌道的變形
 
         
         
---

## 進修資源
* 動態互動網頁特效入門 (https://hahow.in/cr/monoame-webdesign2)
* 動畫互動網頁程式入門 (https://hahow.in/cr/monoame-webdesign1)



![](https://i.imgur.com/2TPAhEO.png)
![](https://i.imgur.com/fQCqbok.png)



## 課程章節介紹 - 動態互動網頁特效入門

### 1.HTML/CSS 快速入門(436分鐘)
精煉入門，重新設計範例，帶你熟悉網頁基礎語法，到使用sass/pug 做出漂亮介面 (包含flex 、前處理語言模組使用)

![](https://i.imgur.com/Scesjrw.png)



### 2.JavaScript程式基礎 (750分鐘) 
從最簡單的邏輯判斷、陣列字串操作，製作動畫、物件導向，帶你用實際10幾個有趣範例入門JS打基礎

![](https://i.imgur.com/7XXYEu1.png)



### 3.Canvas與特效動畫(1050分鐘)
從數學座標、物理模擬、三角函數到音效設計，讓你結合數學跟程式，創造互動藝術與各種遊戲(agar.io / 小精靈 / 科幻碼表...等)，實戰10個範例與6個大專案。

![](https://i.imgur.com/HET0zqV.png)
![](https://i.imgur.com/7jmtaou.png)
![](https://i.imgur.com/QjnAVS7.png)



### 4.Vue.js前端資料框架(340分鐘)
帶你從應用情景（車票、商品列表、電影選擇、撲克牌遊戲）入門，掌握如何將前端框架應用在互動網頁上。

![](https://i.imgur.com/7PZEkcH.png)

---

## Q&A

### youtube
https://youtu.be/sOHcx9jekzs?t=6361

### Q1：想問下面的觀念描述是否正確？

#### 繪製步驟

當同一時間是畫單個圖形，還是畫多個圖形時，
程式的用法主要差異點是在「先上色 或 先繪圖」，
然後再做剩下未完成的事項。

#### 單個圖形

先上色再繪圖

1. 要先指定顏色 fillStyle
2. 再指定要用 fillRect 或 strokeRect

```javascript=
ctx.beginPath()
ctx.fillStyle="#f26248"       // 指定顏色
ctx.fillRect(300,300,50,50)   // 矩形填滿
ctx.strokeRect(300,300,50,50) // 矩形邊線
```

#### 多個圖形

先繪圖再上色

1. 先畫好全部的圖形
2. 再指定顏色
3. 再決定要「填滿或邊框」

```javascript=
ctx.beginPath()
  ctx.rect(250,250,50,100) // 先畫好全部的圖形
  ctx.rect(50,300,50,50)
ctx.fillStyle="#ffe14f"    // 再指定顏色
ctx.fill()                 // 填滿
ctx.stroke()               // 邊框
```



