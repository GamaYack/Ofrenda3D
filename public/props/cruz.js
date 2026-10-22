import * as THREE from "../js/three.module.js";

export default function GD1 ({x, y, z}) {
    // CRUZ 
    // =================================================

    // Material dorado brillante
    var materialCruz = new THREE.MeshLambertMaterial({ color: 0xFFD700 });

    // Parte vertical de la cruz (más esbelta y alta)
    var geometryCruzV = new THREE.BoxGeometry(1.2, 14, 0.6);
    var cruzVertical = new THREE.Mesh(geometryCruzV, materialCruz);
    cruzVertical.position.set(0, 10, 0);
    cruzVertical.castShadow = true;
    //calavera.add(cruzVertical);

    // Parte horizontal de la cruz (proporcionada y elegante)
    var geometryCruzH = new THREE.BoxGeometry(7, 1.2, 0.6);
    var cruzHorizontal = new THREE.Mesh(geometryCruzH, materialCruz);
    cruzHorizontal.position.set(0, 13, 0);
    cruzHorizontal.castShadow = true;
    //calavera.add(cruzHorizontal);

    // Base escalonada parte 1
    var geometryBase1 = new THREE.BoxGeometry(4, 0.8, 2);
    var cruzBase1 = new THREE.Mesh(geometryBase1, materialCruz);
    cruzBase1.position.set(0, 3.4, 0);
    cruzBase1.castShadow = true;
    //calavera.add(cruzBase1);

    // Base escalonada parte 2
    var geometryBase2 = new THREE.BoxGeometry(2.5, 0.8, 1.5);
    var cruzBase2 = new THREE.Mesh(geometryBase2, materialCruz);
    cruzBase2.position.set(0, 4.2, 0);
    cruzBase2.castShadow = true;
    //calavera.add(cruzBase2);


    const dulces = new THREE.Group();
    dulces.add(cruzVertical, cruzHorizontal, cruzBase1, cruzBase2);
    dulces.position.set(x, y, z);

    return dulces;
}