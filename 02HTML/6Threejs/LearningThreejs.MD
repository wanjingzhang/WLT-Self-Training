# Learning Three.js
## 第一章 
#### 新建场景 
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