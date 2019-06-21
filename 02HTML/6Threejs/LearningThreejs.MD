# Learning Three.js
## 第一章 
#### 新建场景 
> 场景是Three.js核心的概念，它是容器，其包括你想要渲染的所有对象，灯光，照相机。
1. 新建一个能够预览的场景在Three.
1. js里面需要3件事，场景Scene、相机Camera、渲染Renderer，有了这3样我们才可以用相机渲染场景。//透视相机 投射模型模拟人眼看到的。它最常被用作为3D场景做渲染。
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

#### 创建物体
1. 形状Geometry、材质Material、模型Mesh
1. 形状是点的集合，代表在3D坐标下的各种几何形状。材质决定了模型的光照反应。模型指最终的网络模型。模型=形状+材质

#### 渲染阴影
1. 比较花计算机性能computer power，所以默认是没有渲染阴影的。
    `renderer.shadowMapEnabled = true;`
1. 还需要设置哪个物体投射阴影，哪个物体接受阴影。
```javascript 
    // 在例子中平面接受 球形和立方体投射的阴影
    plane.receiveShadow = true;  
    cube.castShadow = true; 
    sphere.castShadow = true;
```
1. 最后需要设置光源
```javascript
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(-40, 60, -10);
    spotLight.castShadow = true;
    scene.add(spotLight);
```

#### 添加动画
> 使用 `requestAnimationFrame(renderScene);`

#### stats状态 和 GUI调节控制 工具
```javascript   
    <script type="text/javascript" src="../libs/stats.js"></script>
    <script type="text/javascript" src="../libs/dat.gui.js"></script>
```

#### 重新设置窗口大小
```javascript
    window.addEventlistener('resize',onResize,false); 
    function onResize() {
        // 对于照相机来说我们需要改变视角属性，它保留屏幕方向的比例
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        // 对于渲染来说我们需要改变其大小
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

```

## 第二章 使用组件构建场景
#### 场景图表由一系列树结构的节点组成
```javascript
this.addCube = function() {
    var cubeSize = Math.ceil((Math.random() * 3));
    var cubeGeometry = new THREE.BoxGeometry(cubeSize,cubeSize,cubeSize);
    var cubeMaterial = new THREE.MeshLambertMaterial({color:Math.random() * 0xffffff });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial); cube.castShadow = true;
    cube.name = "cube-" + scene.children.length; cube.position.x=-30 + Math.round(Math.random() * planeGeometry.width));
    cube.position.y= Math.round((Math.random() * 5));
    cube.position.z=-20 + Math.round((Math.random() * planeGeometry.height));
    scene.add(cube);
    this.numberOfObjects = scene.children.length;
};
```
> 对象名非常有用，可以用来调试或者直接用来访问场景内的对象。
` Scene.getObjectByName(name)`可以直接检索特殊物体，例如对js没有实例化全局变量的对象，修改其位置。
` scene.children.length` 获取场景中对象数量。
```javascript
this.removeCube = function() {
    var allChildren = scene.children;
    var lastObject = allChildren[allChildren.length-1];
    if (lastObject instanceof THREE.Mesh) {
        scene.remove(lastObject);
        this.numberOfObjects = scene.children.length;
    }
}
```
> 场景相关的方法
```javascript
THREE.Scene.Add();             // 添加对象
THREE.Scene.Remove();          // 删除对象
THREE.Scene.children();        // 获取场景中的对象列表
THREE.Scene.getObjectByName(); // 用名字获取对象
```
```javascript
function render() {
     stats.update();
     scene.traverse(function(obj) {
       if (obj instanceof THREE.Mesh && obj != plane ) {
         obj.rotation.x+=controls.rotationSpeed;
         obj.rotation.y+=controls.rotationSpeed;
         obj.rotation.z+=controls.rotationSpeed;
    } });
     requestAnimationFrame(render);
     renderer.render(scene, camera);
}
```
> 我们使用render循环去渲染我们的场景。
> 可以传递一个方法给场景的traverse方法，这个function将会被场景里面所以的对象调用（也包括嵌套对象）。
`THREE.Scene.traverse(function(obj){})`

#### 添加雾气特效
`scene.fog = new THREE.Fog(0xffffff, 0.015,100);`
> 雾气颜色，近远效果。Fog可以设置雾气开始的位置，密集程度，雾气线性增加速度。
`scene.fog = new THREE.FogExp2(0xffffff,0.01);`
> 雾气的颜色，密度。FogExp2是以指数增长的方式而不是线性的方式。

#### 覆盖材质
> 会使用新的材质覆盖物体本身原有的材质。
`scene.overrideMaterial = new THREE.MeshLambertMaterial({color:0xffffff});`

#### 几何图形Geometries和网格meshes
> 添加一个球形到场景
```javascript
var sphereGeometry = new THREE.SphereGeometry(4,20,20); // 定义对象的形状
var sphereMaterial = new THREE.MeshBasicMaterial({color:0x7777ff); // 定义基础材质
var sphere = new THREE.Mesh(sphereGeometry,sphereMaterial); // 组合形状和材质，形成网格
```
> 几何体的属性和方法，在Three.js中几个物体基本上是3D空间中点的集合，也称为顶点，以及将这些点链接在一起的多个面。


