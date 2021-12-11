const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.x = -25;
camera.position.y = 30;
camera.position.z = 25;
camera.lookAt(scene.position)

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setClearColor(new THREE.Color(0xeeeeee));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapEnabled =true;

const planeGeometry = new THREE.PlaneGeometry(180, 180, 1, 1)
const planeMaterial = new THREE.MeshLambertMaterial({color:0xffffff})
const plane = new THREE.Mesh(planeGeometry,planeMaterial)
plane.recieveShadow = true;
plane.rotation.x = -0.5* Math.PI;
plane.position.x = 15;
plane.position.y = 0;
plane.position.z = 0;
scene.add(plane)

const axes = new THREE.AxisHelper(20);
scene.add(axes);

const cubeGeometry = new THREE.BoxGeometry(4,4,4);
const cubeMaterial = new THREE.MeshLambertMaterial({color:0x12db00, wireframe: false})
const cube = new THREE.Mesh(cubeGeometry,cubeMaterial)
cube.castShadow = true;
cube.position.x = -4;
cube.position.y = 5;
cube.position.z = 0;
scene.add(cube)

const spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(-40,60,-10);
spotLight.castShadow = true;
spotLight.shadowMapHeight = 5000;
spotLight.shadowMapWidth = 5000;
scene.add(spotLight)

document.getElementById("WebGL-output").appendChild(renderer.domElement);
renderer.render(scene, camera)