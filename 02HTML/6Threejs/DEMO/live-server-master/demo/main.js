

function init() {
    var scene = new THREE.Scene();

    var box = getBox(1, 1, 1); 
    var plane = getPlane(4);

    box.position.y = box.geometry.parameters.height/2;
    plane.rotation.x = Math.PI / 2; // 90 degree radiants;

    scene.add(box);  //get box 
    scene.add(plane);

    var camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth/window.innerHeight,
        1,
        1000
    );
    camera.position.x = 1;
    camera.position.y = 2;
    camera.position.z = 5;
    camera.lookAt(new THREE.Vector3(0, 0, 0)); // 是摄像头看向中间 0，0，0点
    
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('webgl').appendChild(renderer.domElement); 
    update(renderer, scene, camera);

    return scene;
}

function getBox(w, h, d) {
    var geometry = new THREE.BoxGeometry(w, h, d);
    var material = new THREE.MeshBasicMaterial({
        color: 0x00ff00
    });
    var mesh = new THREE.Mesh(
        geometry,
        material
    );
    return mesh;
}

function getPlane(size) {
    var geometry = new THREE.PlaneGeometry(size,size);
    var material = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        side: THREE.DoubleSide
    });
    var mesh = new THREE.Mesh(
        geometry,
        material
    );
    return mesh;
}

function update(renderer, scene, camera) {
    renderer.render(
        scene,
        camera
    );
    requestAnimationFrame(function () {
        
    });
}

var scene = init(); 