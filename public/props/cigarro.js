import * as THREE from "../js/three.module.js";

export default function GD1 ({x, y, z}) {
    const grupo = new THREE.Group();

    // CYLINDER 01
    var geometry01 = new THREE.CylinderGeometry(0.5, 0.5, 6, 32);
    var material01 = new THREE.MeshLambertMaterial({color: 0xffffff});
    var mesh01 = new THREE.Mesh(geometry01, material01);
    mesh01.rotation.set(0, 0, Math.PI / 2);
    mesh01.position.set(0, 3, 0);
    //grupo.add(mesh01);

    // CYLINDER 02
    var geometry02 = new THREE.CylinderGeometry(0.51, 0.51, 2, 32);
    var material02 = new THREE.MeshLambertMaterial({color: 0xd99c50});
    var mesh02 = new THREE.Mesh(geometry02, material02);
    mesh02.rotation.set(0, 0, Math.PI / 2);
    mesh02.position.set(-4, 3, 0);
    //grupo.add(mesh02);

    // CYLINDER 03
    var geometry03 = new THREE.CylinderGeometry(0.48, 0.48, 0.4, 32);
    var material03 = new THREE.MeshLambertMaterial({color: 0xff0000});
    var mesh03 = new THREE.Mesh(geometry03, material03);
    mesh03.rotation.set(0, 0, Math.PI / 2);
    mesh03.position.set(3.1, 3, 0);
    //grupo.add(mesh03);


    const dulces = new THREE.Group();
    dulces.add(mesh01, mesh02, mesh03);
    dulces.position.set(x, y, z);

    return dulces;
}