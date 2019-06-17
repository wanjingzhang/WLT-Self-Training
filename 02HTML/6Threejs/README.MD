# Three.js 原理
 
1. Scene Objecct 场景对象
，是一个3D容器，2D世界中没有摄像机，所看到的东西都是一样的，3D中需要摄像头来定义视角。
Three.js需要初始化：视野、纵横比以及远、近剪裁平面
首先定一个视野，设置正在看的场景数，然后定义纵横比，window.innerWidth/innerHeigh,然后定义远近裁剪平面主要
用来优化。超出距离的将不会渲染，相机用来显示看到的物体，但是为了让我们实际看到需要将3D数据转化成2D图像，这个过程成为渲染。Three.js有几个渲染器：Canvas或SVGRenderer。
输出的大小决定渲染器的大小，一般等于屏幕宽高innerHeight，然后将渲染器的domElement添加到HTML中。

1. Three.js 对象
形状和材质构成一个对象的三个网格中的网格，形成了3D对象。盒子对象需要宽度、高度和深度。我们可以选择各种材料的材质。材质决定物体对场景的照明的反应。我们可以使用物体材质来使物体反射、粗糙、透明等。
Three.js默认的材料是网格，它不受照明影响。所以即使没有光源我们也可以看见。我们用十六进制为网格对象定义颜色。使用Screen.add方法添加对象到场景中。对象有3个属性：位置、旋转和缩放都有可以选择的轴。
弧度是Three.js默认的单位。 大多数对象继承Object3D类。通过add方法添加对象使两个对象建立联系。

1. 建模软件 
extremely sophisticated:Blender, Maya, Modo, 3ds Max, Houdini, More

1. 常见类型
FBX, OBJ, STL

1. 后处理-Shader
是一段描述GPU渲染像素在屏幕上的代码，GLSL是高级别的渲染代码，语法基于C 

1. WebAR WhitestormJS 
是一个3D框架，使用three.js构建的，它可以根据容易的创建3D物理模拟器。

[whs-dev](https://whs-dev.surge.sh/examples/)

[Engin Arslan](https://www.linkedin.com/in/enginarslan)

1. DEMO
[水母](http://aleksandarrodic.com/p/jellyfish/
)

LinkIn Learning 3D Graphics on the Web with Three.js
[3D全球地图 cool](https://www.gsmlondon.ac.uk/global-oil-map/)

[Live-Server 动态实时启动服务器](https://github.com/tapio/live-server)

[3D Modering Web](https://sketchfab.com)

[Clara io](https://clara.io)

# 如何使用
1. 新建一个能够预览的场景在Three.
1. js里面需要3件事，场景、相机、渲染，有了这3样我们才可以用相机渲染场景。//透视相机 投射模型模拟人眼看到的。它最常被用作为3D场景做渲染。
    1. `var scene = new THREE.Scene();`
    1. `var camera = new THREE.PerspectiveCamera(fov,aspect,near,far);`
    1. `var renderer = new THREE.WebGLRenderer();` 
* `PerspectiveCamera(fov : Number, aspect : Number, near : Number, far : Number) `
>  fov — 相机视锥体垂直视野.
>  aspect — 相机平截头宽高比.
>  near — 平面近视锥.
>  far — 平面远视锥.
* `renderer.setSize(window.innerWidth, window.innerHeight);//渲染大小`
* `document.body.appendChild(renderer.domElement); //加入渲染对象` 