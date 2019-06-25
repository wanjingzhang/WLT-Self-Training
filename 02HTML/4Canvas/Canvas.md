# Canvas 概览
### 有趣的 canvas 案例
* [海盗游戏](http://www.pirateslovedaisies.com/)
* [碰撞点游戏S](http://www.sinuousgame.com/)
* [化学元素旋转物体](https://alteredqualia.com/canvasmol/)
* [几何画板](http://bomomo.com/)
* [地理视频](http://dmitrybaranovskiy.github.io/raphael/ )
* [画板](https://galactic.ink/sketchpad/)
* [开发工具](http://www.aptana.com/)
* [document](https://www.html5rocks.com/en/tutorials/canvas/performance/)

### 改善 HTML5 Canvas 性能

### Canvas 介绍
1. Canvas 元素特点 
    * 提供了一个代码控制的绘制区域: `shapes,images,text,curves,video,etc`.
    * 支持所有的现代浏览器: fallback content displyed in browsers that don't support canvas.
    * 一个页面可以包括多Canvas, 甚至是重叠的Canvas
    * Canvas内容不属于Dom结构的一部分.
    * SVG更适合在DOM上绘制图形.
    基础绘制
    * Canvas坐标从左上角开始，X轴向右扩展，Y轴向下扩展.
    * Declare it using the tag canvas and you typically declare it with an ID attribute.
        ```javascript
        <canvas id="cv1" with="300" height="150">
            Your browser do not support the canvas.
        </canvas>
        .canvas{
            border: dotted 3px gray;
            background-color: lightgray;
        }
        ```
    * Attributes
        `width, height, toDataURL, getContext`  
1. Canvas 绘制上下文
    * Canvas drawing API: `2d-getContext 3d-webGL`.
    * Shapes: `Rectangles, Lines, Arcs, Paths, Colors and styles, Bezier curves, Quadratic curves`.
    * Operations: `Compositing, Patterns, Gradients, Shadows, Clipping paths, Transforms`.
    * Media types: `Images, Video, DOM elements, Raw pixel access`.

1. 基础 Canvas 绘制技术
    > 颜色和样式
    * `fillStyles`: filling objects; property values: CSS color, gradient, or pattern; default to black
    * `strokeStyle`: object strokes; property values: CSS color, gradient, or pattern; default to black
    > 矩形是Canvas唯一的原始方法，三个方法操作绘制矩形。 
    * `clearRect(x,y,w,h)` Erases the given rectangle on the canvas.
    * `strokeRect(x,y,w,h)` Strokes the specified rectangle with the current stroke style.
    * `fillRect(x,y,w,h)` Fills the specified rectangle with the current fill style.
    > 线条
    * `moveTo(x,y)` Moves the drawing pen to (x,y); does not perform any drawing
    * `lineTo(x,y)` Draws a line from the current pen position to (x,y)
    * `lineWidth` Gets or sets the width of the pen
    * `lineCap` Gets or sets the line end-cap type (butt, round, square)
    * `lineJoin` Gets or sets the method used to join lines (default is miter)
    * `miterJoin` Gets or sets the limit at which line (default is 10)
    * `beginPath()` Begins a set of multiple drawing commands as a single path
    * `stroken()` Strokes the currently open path that was started by beginPath()
    * `setLinDash()` Specifies a custom set of spaces to create a dashed line
    * `getLineDash()` Retrieves the current line dash settings
    * lineDashOffset Specifies the initial offset to use when creating dashed lines
   > Canvas 状态
    * Each canvas context maintains a drawing state
    * The context state keeps track of various global settings: lineWidth, strokeStyle, fillStyle, transformation matrix, clipping region
    * Your code can save and restore individual states
    * Drawing states are maintained as a stack: Saved states are pushed onto the stack, restore pops off the top one
    * `save()` Saves the current drawing context, save the current setting
    * `restore()` Restores the most recent saved drawing context and makes it current
   > 弧线
    * `arc(x, y, startAngle, radius, startAngle, endAngle [, anticlockwise]);`
    ''/
   > 路径
    * A path is a set of connected points, and is open or closed
    * The drawing context always has one current path
    * Closed paths have the same starting and ending point
    * The `beginPath()` method is used to start a path
    * Segments are added using drawing routines
    * The `stroke()` and `fill()` methods stroke and fill the path
    * The `closePath()` method closes the current path 
   > 曲线
    * Bezier Curve: have four points, start\end\two control point; `bezierCurveTo(cx1,cy1,cx2,cy2,end1,end2)`;
    * Quadratic Curve: have three points, start\end\only one control point; `quadraticCurveTo(cx,cy,x,y)`;

1. 复杂 Canvas 绘图
   > Drawing shadows
    `shadowColor, shadowOffsetX, shadowOffsetY, shadowBlur`.
   > 模式
    * Patterns and gradients can be used for `fillStyle` and `strokeStyle`
    * Patterns can be created from `images, video, other canvases`
    * For video, the current frame is used as the pattern
    * Patterns can be set to repeat `vertically, horizontally`, or both
    * `creatPattern(elem,repeat)`
    * Pattern source: images, video and even another canvas as our pattern source
   > 渐变
    * Two gradient types: `linear and radial`
    * Creating a gradient: Creat the specific gradient type, then add color stops
    * Gradients can be used for fill and stroke styles, juse like patterns
    * `creatLinearGradient(x0,y0,x1,y1), createdRadialGradient(x0,y0,r0,x1,y1,r1), addColorStop(position(0,1),color)`
   > 图片和视频
    * Images data can come from video elements, image elements, or other canvas elements
    * Images can be resized or cropped
    * `drawImage(src,x,y)` 
   > 剪贴路径
    * A clipping path is a type of "mask"
    * Defines a region outside of which drawing is "clipped"
    * Initially, the entire canvas is the default clipping path
    * Any path can be a clipping path
     
1. 高级绘制 APIs
   > 变形
    * `transform(a,b,c,d,e,f)` Adds the transform to the current canvas transform
    * `setTransform(a,b,c,d,e,f)` Sets the canvas transform to the specified transform
   > 缩放
   > 旋转
   > 自定义变形
   > Composition and globalAlpha
   > 像素操作

1. 实用示例
   > 构建幻灯片
    `showCanvasCtx.drawImage(img, 0, 0, 600, 400);`
   > 平滑转场
   
   > 基础动画
   > 双倍缓冲动画

1. 结论 路径绘图分成4步：
    1. 路径开始与封闭：`beginPath / closePath`  
    1. 移动与画线：`moveTo / lineTo / arc...`
    1. 指定填色或线条颜色：`fillStyle / strokeStyle`
    1. 最后把路径填色或者描绘出来：`stroke / fill`
1. 变形位移
    `ctx.translate //移动`
    `ctx.scale //缩放`
    `ctx.rotate //旋转`
1. 状态的保存与还原
    `ctx.save() //存储当下坐标状态`
    `ctx.restore() //还原上一个存储的状态`
1. 原则先进后出stack，利用存储状态，将函数产生的坐标变化限制在函数内
    ```javascript
    function drawSomething(x,y,angle){
        ctx.save(); //存储进函数前的状态 
        ctx.translate(x,y);
        ctx.rotate(angle);
        //...drawing
        ctx.restore(); //还原进来前的状态，前面的位移旋转将不会影响当前画布
    }
    ```
    > 相对关系的绘制
    ```javascript 
    ctx.save();
    var i = 7;
    while(i){
        ctx.fillRect(0,0,50,50);
        ctx.translate(70,0);
        i--;
    }
    ctx.restore();
    ```
    > 相对角度的绘制
    ```javascript
    ctx.save();
    ctx.translate(100, 100);
    var i = 7;
    while (i) {
        ctx.beginPath(); 
        ctx.arc(50, 0, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.rotate(Math.PI / 4);
        ctx.scale(0.8, 0.8);
        i--;
    }
    ctx.restore(); 
    ```
    > 残影
    ```javascript
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext("2d");
    var ww = window.innerWidth;
    var wh = window.innerHeight;
    canvas.width = ww;
    canvas.height = wh;  
    var obj = {
        x: 200,
        y: 0
    };
    function draw() {
        ctx.fillStyle = "black";
        ctx.fillStyle = "rgba(0,0,0,0.2)"; // 残影
        ctx.fillRect(0, 0, ww, wh);
        obj.x += 5;
        obj.y += 5;
        ctx.fillStyle = 'red';
        ctx.fillRect(obj.x, obj.y, 50, 50);
    }
    setInterval(draw, 100); 
    ```
    