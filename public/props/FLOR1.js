import * as THREE from "../js/three.module.js";
import { RoundedBoxGeometry } from "../js/RoundedBoxGeometry.js";

export default function GCF1 ({x, y, z}) {
    var geometry01 = new RoundedBoxGeometry(2, 10, 2, 5, 0.8);
    var material01 = new THREE.MeshLambertMaterial({
        color: 0xE64402,
        side: THREE.DoubleSide
    });

    var mesh01 = new THREE.Mesh(geometry01, material01);

    var mesh02 = new THREE.Mesh(geometry01, material01);
    mesh02.rotation.set(0, 0, Math.PI / 4);

    var mesh03 = new THREE.Mesh(geometry01, material01);
    mesh03.rotation.set(0, 0, Math.PI / 2);

    var mesh04 = new THREE.Mesh(geometry01, material01);
    mesh04.rotation.set(0, 0, 2.355);

    var UNO = new THREE.Group();
    UNO.add(mesh01, mesh02, mesh03, mesh04);

    var B = UNO.clone();
    B.rotation.set(0, Math.PI / 4, 0);

    var C = UNO.clone();
    C.rotation.set(0, Math.PI / 2, 0);

    var D = UNO.clone();
    D.rotation.set(0, 2.355, 0);

    var uno = new THREE.Group();
    uno.add(UNO, B, C, D);
    uno.position.set(0, 6, 0);

    const flores = new THREE.Group();
    flores.add(uno);
    flores.position.set(x, y, z);

    return flores;
}