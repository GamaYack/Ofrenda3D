import * as THREE from "../js/three.module.js";
import { RoundedBoxGeometry } from "../js/RoundedBoxGeometry.js";

export default function GCF1 ({x, y, z}) {
    var geometry01 = new RoundedBoxGeometry(2, 10, 2, 5, 0.8);
    var material01 = new THREE.MeshLambertMaterial({
        color: 0xE64402,
    });

    var mesh01 = new THREE.Mesh(geometry01, material01);

    var mesh02 = new THREE.Mesh(geometry01, material01);
    mesh02.rotation.set(0, 0, Math.PI/4);

    var mesh03 = new THREE.Mesh(geometry01, material01);
    mesh03.rotation.set(0, 0, Math.PI/2);

    var mesh04 = new THREE.Mesh(geometry01, material01);
    mesh04.rotation.set(0, 0, 2.355);

    var UNO = new THREE.Group();
    UNO.add(mesh01, mesh02, mesh03, mesh04);

    var B = UNO.clone();
    B.rotation.set(0, Math.PI/4, 0);

    var C = UNO.clone();
    C.rotation.set(0, Math.PI/2, 0);

    var D = UNO.clone();
    D.rotation.set(0, 2.355, 0);

    var uno = new THREE.Group();
    uno.add(UNO, B, C, D);
    uno.position.set(0, 6, 0);

    var b = uno.clone();
    b.position.set(-12, 6, 0);

    var c = uno.clone();
    c.position.set(12, 6, 0);

    var fila1 = new THREE.Group();
    fila1.add(uno, b, c);
    fila1.position.set(0, 1, 15);
    fila1.scale.set(0.25, 0.25, 0.25);

    var fila2 = fila1.clone();
    fila2.position.set(0, 1, 20);

    var fila3 = fila1.clone();
    fila3.position.set(0, 1, 25);

    var fila4 = fila1.clone();
    fila4.position.set(0, 1, 30);

    var fila5 = fila1.clone();
    fila5.position.set(0, 1, 35);

    var fila6 = fila1.clone();
    fila6.position.set(0, 1, 40);

    var fila7 = fila1.clone();
    fila7.position.set(0, 1, 45);

    var fila8 = fila1.clone();
    fila8.position.set(0, 1, 50);

    var grupo1 = new THREE.Group();
    grupo1.add(fila1, fila2, fila3, fila4, fila5, fila6, fila7, fila8);
    grupo1.position.set(0, 1, 0);

    var grupo2 = grupo1.clone();
    grupo2.position.set(0, 1, 40);

    const flores = new THREE.Group();
    flores.add(grupo1, grupo2);
    flores.position.set(x, y, z);

    return flores;
}