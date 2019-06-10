### DEMO
[水母](http://aleksandarrodic.com/p/jellyfish/
)
LinkIn Learning 3D Graphics on the Web with Three.js
[3D全球地图 cool](https://www.gsmlondon.ac.uk/global-oil-map/)
[Live-Server 动态实时启动服务器](https://github.com/tapio/live-server)
install `npm install live-server`
running `live-server`

# Scene Objecct 场景对象
，是一个3D容器，2D世界中没有摄像机，所看到的东西都是一样的，3D中需要摄像头来定义视角。
Three.js需要初始化：视野、纵横比以及远、近剪裁平面
首先定一个视野，设置正在看的场景数，然后定义纵横比，window.innerWidth/innerHeigh,然后定义远近裁剪平面主要
用来优化。超出距离的将不会渲染，相机用来显示看到的物体，但是为了让我们实际看到需要将3D数据转化成2D图像，这个过程成为渲染。Three.js有几个渲染器：Canvas或SVGRenderer。
输出的大小决定渲染器的大小，一般等于屏幕宽高innerHeight，然后将渲染器的domElement添加到HTML中。

# Three.js 对象
形状和材质构成一个对象的三个网格中的网格，形成了3D对象。盒子对象需要宽度、高度和深度。我们可以选择各种材料的材质。材质决定物体对场景的照明的反应。我们可以使用物体材质来使物体反射、粗糙、透明等。
Three.js默认的材料是网格，它不受照明影响。所以即使没有光源我们也可以看见。我们用十六进制为网格对象定义颜色。使用Screen.add方法添加对象到场景中。对象有3个属性：位置、旋转和缩放都有可以选择的轴。
弧度是Three.js默认的单位。 大多数对象继承Object3D类。通过add方法添加对象使两个对象建立联系。