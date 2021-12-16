const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.x = -25;
camera.position.y = 30;
camera.position.z = 25;
camera.lookAt(scene.position)

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight)
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
// scene.add(axes);

const cubeGeometry = new THREE.BoxGeometry(5,5,5);
const cubeMaterial = new THREE.MeshLambertMaterial({color:0x12db00, wireframe: false})
const cube = new THREE.Mesh(cubeGeometry,cubeMaterial)
cube.castShadow = true;
cube.position.x = -4;
cube.position.y = 5;
cube.position.z = 0;
scene.add(cube)

function rotateCube(time){
    time *= 0.0005;
    cube.rotation.x = time;
    cube.rotation.y = time;
    cube.rotation.z = time;

    renderer.render(scene,camera);
    requestAnimationFrame(rotateCube)
}
requestAnimationFrame(rotateCube)

const spotLight = new THREE.SpotLight(0xffff00);
spotLight.position.set(-40,60,-10);
spotLight.castShadow = true;
spotLight.shadowMapHeight = 5000;
spotLight.shadowMapWidth = 5000;
scene.add(spotLight)

const spotLight2 = new THREE.SpotLight(0xcccccc);
spotLight2.position.set(40,60,100);
spotLight2.castShadow = true;
spotLight2.shadowMapHeight = 5000;
spotLight2.shadowMapWidth = 5000;
scene.add(spotLight2)

const line1points = [];
line1points.push(new THREE.Vector3(-10,0,0))
line1points.push(new THREE.Vector3(0,10,0))
line1points.push(new THREE.Vector3(10,0,0))
const line1Geometry = new THREE.BufferGeometry().setFromPoints(line1points);
const line1Material = new THREE.LineBasicMaterial({color: 0x0000ff});
const line1 = new THREE.Line(line1Geometry,line1Material)
scene.add(line1)


document.getElementById("WebGL-output").appendChild(renderer.domElement);
renderer.render(scene, camera)

window.addEventListener("resize",resize,false)
function resize(){
    renderer.setSize(window.innerWidth,window.innerHeight)
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        5
    )
    camera.position.z = 2;
}