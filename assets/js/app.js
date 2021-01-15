let scene, camera, renderer;

let cube;

let ADD = 0.01;


// 3D product
let createCube = function() {
    let geometry = new THREE.BoxGeometry(1, 2, 1);
    let material = new THREE.MeshBasicMaterial({color : 0x00a1cb});

    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
};


// Set up the environment
// initialize scene, camera, object and renderer
let init = function() {
    // create the scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xe9e9e9);

    // create and locate the camera
    camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 5;

    // Add the 3D product
    createCube();

    // create the renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

};

// main animation loop - calls 50-60 in a second
let mainLoop = function() {

    cube.rotation.y += ADD;

    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop);
};




init();
mainLoop();








// ----- Documentation from ----- threejs.org
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);

// document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;

// const animate = function () {
//     requestAnimationFrame(animate);

//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;

//     renderer.render(scene, camera);
// };

// animate();