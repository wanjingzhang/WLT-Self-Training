# involved website

[SASS](https://sass-lang.com)
The most mature, stable, and powerful professional grade CSS extension language in the world.

[Dart Sass](https://sass-lang.com/dart-sass)
The primary implementation of Sass. It compiles to pure JavaScript which makes it easy to integrate into modern web development workflows.

[LibSass](https://sass-lang.com/libsass)
Sass was originally written in Ruby. LibSass is a C/C++ port of the SASS engine.

[Node Sass](https://github.com/sass/node-sass)
Most popular Sass.

# Learning repostory
```javascript
// creat bare repository which the .git folder in it.
git clone --bare https://github.com/planetoftheweb/sassEssentials.git .git
// modify the variable, the folder shows up properly
git config --bool core.bare false
// make this into a regular repository
git reset --hard
// get git branch command
git branch
// press q for exit
// install all dependencies
npm install
// checkout the branch
git checkout 02_03a
// to the proper branch
git stash
```

> css继承 interface: @extends %btn;
> css方法 mixins：@include clearfix;
> comments注释:  //压缩模式不显示  /*可以计算插值 */ /*! 文字原样输出 */

# Sass Features: Variables, Nesting, Partials, Extend, Operators, Mixnis, .sass
> Variables
```javascript
$main_color: #9E2932;
.navbar {
    background: $main_color;
}
```

> Nesting
```javascript
.pixgrid{
    ul { 
        margin: 0;
        padding: 0;
        list-style: none;
        li{
            float: left;
            width: 96px;
            height: 96px;
            padding: 0 5px 5px 0;
            a{
                color: $yellow;
                &:hover{
                    background: $red; 
                }
                &:last-of-type{
                    border-bottom: 1px dotted $color-item-border;
                }
            }
        }
    }
}
```

>  Partials -> modules
```javascript
@import "variables";
@import "mixins";
```

> Extend -> inherit
```javascript
.btn{
    padding: 6px 12px;
    line-height: 140%;
    text-align: center;
}
.btn-reverse{
    @extend .btn;
    background: #FCF4DC;
    color: #C61C6F;
}
```

> Operators
```javascript
// if
$border_thickness: 1px;
$thicker: $border_thickness * 5;
.sidebar{
    @if($border_thickness <= 1){
        background-color: red;
    } @else{
        background-color: yellow;
    }
}

// each
$color-btn-names: 'default', 'hot', 'cool';
$color-btn-values: $color-main, $red, $blue;
@each $name in $color-btn-names{
    $i: index($color-btn-names, $name);

    .btn-#($name){
        @extend %btn;
        background-color: nth($color-btn-values, $i);
    }
}
```

> Mixins -> function
```javascript
@mixin rounded ($radius: 10px){
    -webkit-border-radius: $radius;
    border-radius: $radius;
    background-clip: padding-box;
}
ul{
    padding: 0;
    margin: 0;
    list-style: none;
    li img{
        display: block;
        @include rounded(20px);
    }
}
```

> .sass
```javascript
.pixgrid
    ul
        margin: 0
        padding: 0
        list-style: none
        li
            float: left
            width: 96px
            height: 96px
            padding: 0 5px 5px 0
```