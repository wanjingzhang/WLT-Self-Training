// 新建一个立方体贴纸，需要6个面 CubeTexture

// 新建一个能够预览的场景在Three.js里面需要3件事，场景、相机、渲染，有了这3样我们才可以用相机渲染场景。
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/innerHeight,0.1,1000);
//透视相机 投射模型模拟人眼看到的。它最常被用作为3D场景做渲染。
// PerspectiveCamera(fov : Number, aspect : Number, near : Number, far : Number)
// fov — 视野.
// aspect — 宽高比.
// near — 平面近剪裁平面.
// far — 平面远剪裁平面.
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);//渲染大小
document.body.appendChild(renderer.domElement); //加入渲染对象