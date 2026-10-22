import * as THREE from "../js/three.module.js";

export default function GG1 ({x, y, z}) {
var geometryGalleta = new THREE.CylinderGeometry(3.5, 3.5, 0.8, 32);
var materialGalleta = new THREE.MeshLambertMaterial({
    color: 0xd29034,
    roughness: 0.9,     
    metalness: 0.05
});
var galleta = new THREE.Mesh(geometryGalleta, materialGalleta);
galleta.position.set(0, 4, 0);
//scene.add(galleta);

var geometryChispa = new THREE.SphereGeometry(0.35, 16, 16);
var materialChispa = new THREE.MeshLambertMaterial({color: 0x3d1c02});

// Chispa 1
var chispa1 = new THREE.Mesh(geometryChispa, materialChispa);
chispa1.position.set(1.2, 4.45, 0.8);
chispa1.scale.set(1, 0.5, 1);
//scene.add(chispa1);

// Chispa 2
var chispa2 = new THREE.Mesh(geometryChispa, materialChispa);
chispa2.position.set(-1.5, 4.45, 1.0);
chispa2.scale.set(1, 0.5, 1);
//scene.add(chispa2);

// Chispa 3
var chispa3 = new THREE.Mesh(geometryChispa, materialChispa);
chispa3.position.set(0.0, 4.45, -1.5);
chispa3.scale.set(1, 0.5, 1);
//scene.add(chispa3);

// Chispa 4
var chispa4 = new THREE.Mesh(geometryChispa, materialChispa);
chispa4.position.set(1.8, 4.45, -0.8);
chispa4.scale.set(1, 0.5, 1);
//scene.add(chispa4);

// Chispa 5
var chispa5 = new THREE.Mesh(geometryChispa, materialChispa);
chispa5.position.set(-1.0, 4.45, -0.5);
chispa5.scale.set(1, 0.5, 1);
//scene.add(chispa5);

    const galleta1 = new THREE.Group();
    galleta1.add(galleta,chispa1,chispa2,chispa3,chispa4,chispa5);
    galleta1.position.set(x, y, z);

    return galleta1;
}