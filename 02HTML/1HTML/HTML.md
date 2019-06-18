1. meta 信息
> `<meta>`元素描述了页面介绍以及viewport声明
```javascript
<meta property="og:description" content=" ">
<meta name="viewport" content="width=device-width, initial-scale=1">
```

1. 读取写入Cookie
```javascript
// 分数 获取保存
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    var l = ca.length();
    while (l--) {
        var c = ca[l].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    } 
    return "";
} 
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
```