####调研CEP的可行性
* 的作用，实现的功能。
* 在项目中的可行性。
* 有什么优势。


## CEP 8.0 HTML Extension Cookbook
#### overview
  this guide to creating CEP8.0 HTML/Javascript Extensions for Creative cloud application.
#### CEP Extension
  need to specify an extension's type in its manifest.xml
  type:Panel,ModalDialog,Modeless,Custom(Since CEP 5.0)
#### CEP Version
  Photoshop CC 2018 :19(CEP 8) & Node.js 7.7.4
#### Development and Debugging
#### HTML Extension Builder
  a tool set built on top of Eclipse and can be used for developing and debugging HTML extensions.
#### Debugging Unsigned Extensions
  Mac: In the terminal, type: defaults write com.adobe.CSXS.8 PlayerDebugMode 1 (The plist is also located at /Users/<username>/Library/Preferences/com.adobe.CSXS.8.plist)
#### Remote Debugging
  CEP supports remote debugging for HTML extensions from 5.0
#### Where are the Log Files
  Mac: /users/<USERNAME>/Library/Logs/CSXS
  CEP HTMLEngine Logs
#### CEP HTML Test Extensions
  some sample extensions for extension developers.
#### Extension Manifest
  manifest.xml file is required for every extension and provides the necessary information to configure a CEP extension.
  you can specify extensin size, max size and min size in extension manifest.Size is mandatory.
##### Customize Extension Menu
  you can customize the extension menu by editing <menu/> item in manifest.
##### High DPI Panel Icons
  In hight DPI display mode, panel extensions may want to use hight DPI icons. You set these icons in extension's manifest.
  <Icons>
##### Dialog Size bansed on Screen Size
  You can specify CEP dialog size as a percentage of screen size.
##### Shortcut Keys for HTML Extensions
  Since 5.2 supports shortcut keys for HTML extensions.
#### CEP JavaScript Programming
##### CEP JavaScript Libraries
  The provide JavaScript APIs to access application and CEP information.
  * CSInterface.js
  * IMSInterface.js
  * Vulcan.js
##### CEP Events
##### CSEvent
##### Listen for and Dispatch CSEvent
##### Communication between Native Point Product and CEP extensions
##### Vulcan messages
  starting with CEP 5, global CEP Events whose scope attribute is set to "GLOBAL" are no longer supported, instead by the the APIs in Vulcan.js.
##### Access Application DOM frome Htmo Extension
  to access application DOM from CEP extensions, CEP JavaScript library provides an API, CSInterface.evalScript, to execute extend script to access the host application's DOM.
  to separate JavaScript engines:
  * Javascript engine of host application
  * Javascript engine of CEP HTML runtime
#### Access HTML DOM form extend script
  CEP creates a library which uses External Object mechanism of ExtendScript to send CSXS events.
#### Menu
##### fly-out menu
##### customize context menu
##### disable context menu
#### Getting and Changeing Extension Content Size
#### Register invalid certificate error callback
### Using Node.js APIs (CEP 7.0)
  one of most prominent feature in CEP 5.0 is allowing Node.js APIs to be used in HTML extensions.
#### Other JavaScript Information
  Load Multiple JSX files
#### Drap and Drop
  * inside HTML extension,
  * between two extension,
  * between HTML extension and its host application,
  * between HTML extension and operating system.
##### Disable Drap and Drop
#### CEP HtmlEngine
##### Multi-process Architecture
  CEP and the underlying Chromium have multi-process architecture.


#### Development Machine Setup
  * Adobe Creative Cloud applications supporting CEP HTML extensions.
  * HTML Extension Builder (Nice to have, but not mandatory).
  * Adobe ExtendScript Tool Kit (This is available as an optional install).
  * Chrome browser for debug workflow.












































































