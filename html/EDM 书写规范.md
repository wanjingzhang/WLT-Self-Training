# EDM 书写规范
#### 使用psd导出html文件
* export html&jpge

#### 头部规范
* !DOCTYPE,htmltype!
`<!DOCTYPE html PUBLIC"-//W3C//DTD XHTML 1.0 Transitional//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">`
`<html xmlns="http://www.w3.org/1999/xhtml">`

* viewport,contenttype,charset
`<meta name="viewport" content="width=device-width; initial-scale=1.0;">`
`<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />`
`<meta http-equic="X-UA-Compatible" content="IE-edge">`
`<meta charset="utf-8">`

#### table 规范
* 整体大table，分列需单独嵌入小table。
<table>
  <tr>
    <td>
      <table width="100%" height="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td align="center" valign="top"></td>
          <td></td>
        <tr>
      </table>
    </td>
  </tr>
</table>

* td嵌入图片 *需要设定 align="center" valign="top" height="400"
* table需要嵌入100%大table。否则在Windows系统布局不居中.

#### 样式规范
* 不使用link或style，不使用行内样式style=“”
* 不使用padding或margin
* 图片出现缝需要加 vertical="top" align="center"
* 不使用background
* 文字部分做自动延展
* 添加样式
<td style=“font-size: 12px; font-family: Arial, sans-serif; color: #666666;”> Text </td>
* img {outline:none; text-decoration:none; -ms-interpolation-mode: bicubic;}
* #backgroundTable {margin:0; padding:0; width:100% !important; line-height: 100% !important;}
<table cellpadding="0" cellspacing="0" border="0" id="backgroundTable">
* 修复雅虎段落边界
<p style="margin-top: 1em; margin-bottom: 1em; margin-left: 0; margin-right: 0;">Pellentesque habitant morbi tristique senectus ...</p>

* <img>包含alt

#### 转义字符 规范
* https://dev.w3.org/html5/html-author/charref
* &nbsp;              //space
* &lsquo; &rsquo;     //‘ ’
* &laquo; &raquo;     //« »
* &lt; &gt;           //< >
* &reg;               //®
* &copy;              //©
* &trade;             //™ <sup>TM</sup>
* &pound;             //£
* &mdash;             //—
* &amp;               //&

#### 测试
* Litmus https://litmus.com/blog/
* Acid https://www.emailonacid.com/
* http://premailer.dialect.ca/
* w3c validator http://validator.w3.org/
* 多浏览器测试
