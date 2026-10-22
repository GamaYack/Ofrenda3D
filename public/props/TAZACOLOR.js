import * as THREE from "../js/three.module.js";

export default function GD1 ({x, y, z}) {
    const grupo = new THREE.Group();

    // Materiales
    var matBlanco = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide
    });

    var matNegro = new THREE.MeshLambertMaterial({
        color: 0x000000,
        side: THREE.DoubleSide
    });

    // CUERPO DE LA TAZA
    var geoCuerpo = new THREE.SphereGeometry(
        5, 40, 40, 0, Math.PI * 2, 0, Math.PI / 2
    );
    var cuerpo = new THREE.Mesh(geoCuerpo, matBlanco);
    cuerpo.position.set(0, 6, 0);
    cuerpo.rotation.set(Math.PI, 0, 0);
    cuerpo.scale.set(1, 1.2, 1);
    cuerpo.castShadow = true;
    cuerpo.receiveShadow = true;
    //grupo.add(cuerpo);

    // BORDE SUPERIOR DE LA TAZA
    var geoBorde = new THREE.TorusGeometry(5, 0.2, 16, 50);
    var borde = new THREE.Mesh(geoBorde, matBlanco);
    borde.position.set(0, 6, 0);
    borde.rotation.set(Math.PI / 2, 0, 0);
    borde.scale.set(1, 1, 1);
    borde.castShadow = true;
    borde.receiveShadow = true;
    //grupo.add(borde);

    // ASA DE LA TAZA
    var geoAsa = new THREE.TorusGeometry(1.8, 0.35, 20, 40);
    var asa = new THREE.Mesh(geoAsa, matBlanco);
    asa.position.set(4.8, 3.5, 0);
    asa.rotation.set(0, 0, 0);
    asa.scale.set(1, 1, 1);
    asa.castShadow = true;
    asa.receiveShadow = true;
    //grupo.add(asa);

    // CAFÉ
    var geoCafe = new THREE.CylinderGeometry(4.7, 4.7, 0.1, 40);
    var cafe = new THREE.Mesh(geoCafe, matNegro);
    cafe.position.set(0, 5.2, 0);
    cafe.rotation.set(0, 0, 0);
    cafe.scale.set(1, 1, 1);
    cafe.castShadow = true;
    cafe.receiveShadow = true;
    //grupo.add(cafe);


    const dulces = new THREE.Group();
    dulces.add(cuerpo, borde, asa, cafe);
    dulces.position.set(x, y, z);

    return dulces;
}