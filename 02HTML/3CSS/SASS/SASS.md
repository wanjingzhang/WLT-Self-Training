# involved website

[SASS](https://sass-lang.com)
The most mature, stable, and powerful professional grade CSS extension language in the world.

[Dart Sass](https://sass-lang.com/dart-sass)
The primary implementation of Sass. It compiles to pure JavaScript which makes it easy to integrate into modern web development workflows.

[LibSass](https://sass-lang.com/libsass)
Sass was originally written in Ruby. LibSass is a C/C++ port of the SASS engine.

[Node Sass](https://github.com/sass/node-sass)
Most popular Sass.

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
        }
    }
}
```

>  Partials
```javascript
@import "variables";
@import "mixins";
```

> Extend
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
$border_thickness: 1px;
$thicker: $border_thickness * 5;
.sidebar{
    @if($border_thickness <= 1){
        background-color: red;
    } @else{
        background-color: yellow;
    }
}
```

> Mixins
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