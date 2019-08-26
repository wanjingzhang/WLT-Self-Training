#### Demo
1. [酷炫动画网站](https://tympanus.net/codrops/css_reference/)
1. [飞机游戏](https://tympanus.net/Tutorials/TheAviator/part1.html) 
1. [标准化 reset](https://necolas.github.io/normalize.css/)
1. [字体](https://fontawesome.com/)
1. [橘皮配色](http://colours.neilorangepeel.com/)
1. [HEX颜色](https://rgb.to/)
1. [免费图片](https://unsplash.com)
1. [流式布局](http://www.liquidapsive.com/)
1. [响应式布局break points](https://gs.statcounter.com/screen-resolution-stats)
1. [媒体查询](https://tympanus.net/codrops/css_reference/media-queries/) 
1. [在线图片编辑器](https://pixlr.com/editor/)

1. [add two crickets]()
2. [all of james and frederick's initial dialog]()

#### Block Comment

#### CSS Essential Training 1
1. Floats.
    1. clear floats
    ```javascript
    img{
        float:left;
    }
    h1{
        clear:both;
    }
    <div>
        <img/>
        <p></p>
    </div> 
    ```
    // self clear
    `overflow:hidden, both`

    ```javascript
    .clearfix:after{
        content: "";
        display: table;
        clear: both;
    }
    <div class="parent clearfix">
        <p></p>
    </div>
    ```
    1. box sizing
        ```javascript
        html{
            box-sizing: border-box;
        }
        *, *:before, *:after{
            box-sizing: inherit;
        }
        ```



#### CSS Essential Training 2

1. CSS Selectors:
    1. attribute: [type], [type=“search”];
    1. combinators: section a(child, descendant), section > a (child), h1 + p (adjacent, sibling 1), h1 ~ p (general sibling multiple)
    1. pseudo-class: a:hover, p:first-child, p:last-child, p:first-of-type, p:last-of-type, p:nth-child(odd,3,3n+2)(based on the order within the parent container, keyword, number, algebraic expression), p:nth-of-type(3n+2), a::first-letter, a:before, p:after, content:”/2764”(unicode), text-transform: uppercase, 
2. Layouts: 
    1. Box model, float, display
    1. positioning(fixed, left:0, right:0 = 100%),
    1. Float, display, position can’t be used together on the same element.
If using position, then float is ignored.
If using float, then display is ignored.
    1. index: relative, fixed, absolute can set.
    1. resetting stylesheets: reset, Normalize.css
    1. Icon fonts: Fontawesome.io
    1. Background: alpha transparency and gradients: linear-gradient(rgba(141,153,174,0.8),rgba(141,153,174.0.5)), url(../image/toronto.jpg) no-repeat fixed;
Background-size:cover;
3. Responsive and Mobile
    1. breakpoints
    1. <link media=“screen and (max-width: 400px)” rel=“stylesheet” href=“mobile.css”>