import * as THREE from "../js/three.module.js";

export default function GJ1 ({x, y, z}) {
//Jugo
var geometryCaja = new THREE.BoxGeometry(2.5, 4.5, 1.5);
var materialCaja = new THREE.MeshLambertMaterial({
    color: 0xff6600,        
    roughness: 0.3,        
    metalness: 0.1
});
var cajaJugo = new THREE.Mesh(geometryCaja, materialCaja);
cajaJugo.position.set(0, 6, 0);
//scene.add(cajaJugo);

var geometryPopote = new THREE.CylinderGeometry(0.08, 0.08, 2, 16);
var materialPopote = new THREE.MeshLambertMaterial({
    color: 0x00ccff        
});
var popote = new THREE.Mesh(geometryPopote, materialPopote);
popote.position.set(0.7, 8.6, 0.3);
popote.rotation.set(0,0,Math.PI/1.2);
//scene.add(popote);

    const jugo = new THREE.Group();
    jugo.add(cajaJugo,popote);
    jugo.position.set(x, y, z);

    return jugo;
}