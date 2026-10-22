import * as THREE from "../js/three.module.js";

export default function GT1 ({x, y, z}) {
var geometry01 = new RoundedBoxGeometry(2,10,2,5,0.8);
var material01 = new THREE.MeshLambertMaterial({
    color:0xFFA500,
    //wireframe:true,
});
// Tortilla 1
var geometry01 = new THREE.CylinderGeometry(3, 3, 0.1, 32);
var material01 = new THREE.MeshLambertMaterial({
    color: 0xE6C687,
    side: THREE.DoubleSide,
});
var mesh01 = new THREE.Mesh(geometry01, material01);
//scene.add(mesh01);
mesh01.position.set(0, 1.5, 0);

// Tortilla 2
var geometry02 = new THREE.CylinderGeometry(3, 3, 0.1, 32);
var material02 = new THREE.MeshLambertMaterial({
    color: 0xE6C687,
    side: THREE.DoubleSide,
});
var mesh02 = new THREE.Mesh(geometry02, material02);
//scene.add(mesh02);
mesh02.position.set(-3, 1, 3);

// Tortilla 3
var geometry03 = new THREE.CylinderGeometry(3, 3, 0.1, 32);
var material03 = new THREE.MeshLambertMaterial({
    color: 0xE6C687,
    side: THREE.DoubleSide,
});
var mesh03 = new THREE.Mesh(geometry03, material03);
//scene.add(mesh03);
mesh03.position.set(3, 1, -3);

// Tortilla 4
var geometry04 = new THREE.CylinderGeometry(3, 3, 0.1, 32);
var material04 = new THREE.MeshLambertMaterial({
    color: 0xE6C687,
    side: THREE.DoubleSide,
});
var mesh04 = new THREE.Mesh(geometry04, material04);
//scene.add(mesh04);
mesh04.position.set(-3, 1, -3);

// Tortilla 5
var geometry05 = new THREE.CylinderGeometry(3, 3, 0.1, 32);
var material05 = new THREE.MeshLambertMaterial({
    color: 0xE6C687,
    side: THREE.DoubleSide,
});
var mesh05 = new THREE.Mesh(geometry05, material05);
//scene.add(mesh05);
mesh05.position.set(3, 1, 3);

    const tortillas = new THREE.Group();
    tortillas.add(mesh01,mesh02,mesh03,mesh04,mesh05);
    tortillas.position.set(x, y, z);

    return tortillas;
}