var box;
var plane;

function init() {
    // 新建一个场景      
    var scene = new THREE.Scene();
    box = getBox(1, 1, 1);
    plane = getPlane(4); 

    box.position.y = box.geometry.parameters.height / 2;
    plane.rotation.x = Math.PI / 2;

    // 像场景添加对象到坐标(0，0，0)点
    scene.add(box);
    scene.add(plane);

    // 视野、纵横比以及远、近剪裁平面
    var camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth/window.innerHeight,
        1,
        1000
    );
    // 摄像机的位置
    camera.position.x = 1;
    camera.position.y = 2;
    camera.position.z = 5;

    camera.lookAt(new THREE.Vector3(0, 0, 0));
    // Three.js 有几个渲染器
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('webgl').appendChild(renderer.domElement);
    update(renderer, scene, camera);
    return scene; 
}

function getBox(w, h, d) {
    // 1.新建一个立方体，它包括了所以的顶点以及填充的面。
    var geometry = new THREE.BoxGeometry(w, h, d);
    // 2.需要用材质填充
    var material = new THREE.MeshBasicMaterial({
        color: 0x00ff00
    });
    // 3.新建一个网格，它把材质运用于几何图形
    var mesh = new THREE.Mesh(
        geometry,
        material
    )
    return mesh;
}

function getPlane(size) {
    var geometry = new THREE.PlaneGeometry(size, size);
    var material = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        side: THREE.DoubleSide
    })
    var mesh = new THREE.Mesh(
        geometry,
        material
    )
    return mesh;
}

// 渲染循环的动画
function update(renderer, scene, camera) {
    
    requestAnimationFrame(
        function () {
            update(renderer, scene, camera);
        }
    );
    box.rotation.y += 0.01;
    renderer.render(
        scene,
        camera
    )
}

var scene = init();
