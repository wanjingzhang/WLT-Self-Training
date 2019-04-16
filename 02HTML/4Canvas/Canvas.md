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
1. Canvas 元素
    Features
    * Provides a place for program-controlled drawing: shapes,images,text,curves,video,etc.
    * Supported in all major modern browsers: fallback content displyed in browsers that don't support canvas.
    * Pages can have multiple canvases, even overlapping ones
    * Canvas content is not part of the page DOM.
    * SVG is more suitable for mixing graphics with the DOM.
    Basic
    * The canvas coordinates start at top left, with values increasing toward the right along the x axis and down along the y axis
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
    - Colors and Styles
    * `fillStyles`: filling objects; property values: CSS color, gradient, or pattern; default to black
    * `strokeStyle`: object strokes; property values: CSS color, gradient, or pattern; default to black
    - Rectangles are the only primitive shape supported by Canvas.
    Three function for operating on rectangles.
    * `clearRect(x,y,w,h)` Erases the given rectangle on the canvas.
    * `strokeRect(x,y,w,h)` Strokes the specified rectangle with the current stroke style.
    * `fillRect(x,y,w,h)` Fills the specified rectangle with the current fill style.
    - Lines
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
   - The canvas state
    * Each canvas context maintains a drawing state
    * The context state keeps track of various global settings: lineWidth, strokeStyle, fillStyle, transformation matrix, clipping region
    * Your code can save and restore individual states
    * Drawing states are maintained as a stack: Saved states are pushed onto the stack, restore pops off the top one
    * `save()` Saves the current drawing context, save the current setting
    * `restore()` Restores the most recent saved drawing context and makes it current
   - The Arcs and Paths
    * `arc(x, y, startAngle, radius, startAngle, endAngle [, anticlockwise]);`
   - Paths
    * A path is a set of connected points, and is open or closed
    * The drawing context always has one current path
    * Closed paths have the same starting and ending point
    * The `beginPath()` method is used to start a path
    * Segments are added using drawing routines
    * The `stroke()` and `fill()` methods stroke and fill the path
    * The `closePath()` method closes the current path 
   - Curves
    * Bezier Curve: have four points, start\end\two control point; `bezierCurveTo(cx1,cy1,cx2,cy2,end1,end2)`;
    * Quadratic Curve: have three points, start\end\only one control point; `quadraticCurveTo(cx,cy,x,y)`;

1. 复杂 Canvas 绘图
   - Drawing shadows
    `shadowColor, shadowOffsetX, shadowOffsetY, shadowBlur`.
   - Using patterns
    * Patterns and gradients can be used for `fillStyle` and `strokeStyle`
    * Patterns can be created from `images, video, other canvases`
    * For video, the current frame is used as the pattern
    * Patterns can be set to repeat `vertically, horizontally`, or both
    * `creatPattern(elem,repeat)`
    * Pattern source: images, video and even another canvas as our pattern source
   - Using gradients
    * Two gradient types: `linear and radial`
    * Creating a gradient: Creat the specific gradient type, then add color stops
    * Gradients can be used for fill and stroke styles, juse like patterns
    * `creatLinearGradient(x0,y0,x1,y1), createdRadialGradient(x0,y0,r0,x1,y1,r1), addColorStop(position(0,1),color)`
   - Images and video
    * Images data can come from video elements, image elements, or other canvas elements
    * Images can be resized or cropped
    * `drawImage(src,x,y)` 
   - Clipping paths
    * A clipping path is a type of "mask"
    * Defines a region outside of which drawing is "clipped"
    * Initially, the entire canvas is the default clipping path
    * Any path can be a clipping path
     
1. 高级绘制 APIs
   - Transformations
    * `transform(a,b,c,d,e,f)` Adds the transform to the current canvas transform
    * `setTransform(a,b,c,d,e,f)` Sets the canvas transform to the specified transform
   - Scaling
   - Rotation
   - Custom transformations
   - Composition and globalAlpha
   - Manipulating raw pixels

1. 实用示例
   - Building an image slideshow
    `showCanvasCtx.drawImage(img, 0, 0, 600, 400);`
   - Using smooth transitions
   
   - Basic animation
   - Double-buffered animation

1. 结论