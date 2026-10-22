import * as THREE from "../js/three.module.js";

export default function GD1 ({x, y, z}) {
    // Geometría de la base del incienso
    var geometriaBase = new RoundedBoxGeometry(8, 2.5, 3, 0.4, 5);
    var materialBase = new THREE.MeshLambertMaterial({color: 0x8b4513}); // Material por defecto por si no está definido fuera
    var baseIncienso = new THREE.Mesh(geometriaBase, materialBase);

    // Posición de la base
    baseIncienso.position.set(0, 2, 0);
    //calavera.add(baseIncienso);

    // VARITA DE INCIENSO
    var geometriaVarita = new THREE.CylinderGeometry(0.18, 0.18, 6, 16);
    var materialPalo = new THREE.MeshLambertMaterial({color: 0xd2b48c}); // Material por defecto por si no está definido fuera
    var varitaIncienso = new THREE.Mesh(geometriaVarita, materialPalo);
    varitaIncienso.rotation.z = -0.65; 
    varitaIncienso.position.set(-0.5, 4, 0);
    //calavera.add(varitaIncienso);


    const dulces = new THREE.Group();
    dulces.add(baseIncienso, varitaIncienso);
    dulces.position.set(x, y, z);

    return dulces;
}