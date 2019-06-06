console.log(THREE);
function init() {
    var scene = new THREE.Scene();
    // 视野、纵横比以及远、近剪裁平面
    var camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );
    //Three.js有几个渲染器
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('webgl').appendChild(renderer.domElement);
    renderer.render(
        scene,
        camera
    );
}

init();