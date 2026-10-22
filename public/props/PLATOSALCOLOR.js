import * as THREE from "../js/three.module.js";

export default function GD1 ({x, y, z}) {
    const grupo = new THREE.Group();

    // PLATO
    var geoPlato = new THREE.CylinderGeometry(7, 5, 2, 40);
    var matPlato = new THREE.MeshLambertMaterial({
        color: 0xffa500,
        side: THREE.DoubleSide
    });
    var plato = new THREE.Mesh(geoPlato, matPlato);
    plato.position.set(0, 1, 0);
    plato.rotation.set(0, 0, 0);
    plato.scale.set(1, 1, 1);
    plato.castShadow = true;
    plato.receiveShadow = true;
    //grupo.add(plato);

    // CONO DE SAL
    var geoConoSal = new THREE.ConeGeometry(6, 4.5, 40);
    var matConoSal = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide
    });
    var conoSal = new THREE.Mesh(geoConoSal, matConoSal);
    conoSal.position.set(0, 4.25, 0);
    conoSal.rotation.set(0, 0, 0);
    conoSal.scale.set(1, 1, 1);
    conoSal.castShadow = true;
    conoSal.receiveShadow = true;
    //grupo.add(conoSal);

    // GRANITO 1
    var geoG1 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    var matG1 = new THREE.MeshLambertMaterial({ color: 0xa0a0a0, side: THREE.DoubleSide });
    var g1 = new THREE.Mesh(geoG1, matG1);
    g1.position.set(0, 6.5, 0);
    g1.rotation.set(0, 0, 0);
    g1.scale.set(1, 1, 1);
    //grupo.add(g1);

    // GRANITO 2
    var geoG2 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    var matG2 = new THREE.MeshLambertMaterial({ color: 0xa0a0a0, side: THREE.DoubleSide });
    var g2 = new THREE.Mesh(geoG2, matG2);
    g2.position.set(1.5, 5, 1.5);
    g2.rotation.set(0, 0, 0);
    g2.scale.set(1, 1, 1);
    //grupo.add(g2);

    // GRANITO 3
    var geoG3 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    var matG3 = new THREE.MeshLambertMaterial({ color: 0xa0a0a0, side: THREE.DoubleSide });
    var g3 = new THREE.Mesh(geoG3, matG3);
    g3.position.set(-1.5, 5, -1.5);
    g3.rotation.set(0, 0, 0);
    g3.scale.set(1, 1, 1);
    //grupo.add(g3);

    // GRANITO 4
    var geoG4 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    var matG4 = new THREE.MeshLambertMaterial({ color: 0xa0a0a0, side: THREE.DoubleSide });
    var g4 = new THREE.Mesh(geoG4, matG4);
    g4.position.set(1.5, 5, -1.5);
    g4.rotation.set(0, 0, 0);
    g4.scale.set(1, 1, 1);
    //grupo.add(g4);

    // GRANITO 5
    var geoG5 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    var matG5 = new THREE.MeshLambertMaterial({ color: 0xa0a0a0, side: THREE.DoubleSide });
    var g5 = new THREE.Mesh(geoG5, matG5);
    g5.position.set(-1.5, 5, 1.5);
    g5.rotation.set(0, 0, 0);
    g5.scale.set(1, 1, 1);
    //grupo.add(g5);

    // GRANITO 6
    var geoG6 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    var matG6 = new THREE.MeshLambertMaterial({ color: 0xa0a0a0, side: THREE.DoubleSide });
    var g6 = new THREE.Mesh(geoG6, matG6);
    g6.position.set(3, 3.5, 0);
    g6.rotation.set(0, 0, 0);
    g6.scale.set(1, 1, 1);
    //grupo.add(g6);

    // GRANITO 7
    var geoG7 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    var matG7 = new THREE.MeshLambertMaterial({ color: 0xa0a0a0, side: THREE.DoubleSide });
    var g7 = new THREE.Mesh(geoG7, matG7);
    g7.position.set(-3, 3.5, 0);
    g7.rotation.set(0, 0, 0);
    g7.scale.set(1, 1, 1);
    //grupo.add(g7);

    // GRANITO 8
    var geoG8 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    var matG8 = new THREE.MeshLambertMaterial({ color: 0xa0a0a0, side: THREE.DoubleSide });
    var g8 = new THREE.Mesh(geoG8, matG8);
    g8.position.set(0, 3.5, 3);
    g8.rotation.set(0, 0, 0);
    g8.scale.set(1, 1, 1);
    //grupo.add(g8);

    // GRANITO 9
    var geoG9 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    var matG9 = new THREE.MeshLambertMaterial({ color: 0xa0a0a0, side: THREE.DoubleSide });
    var g9 = new THREE.Mesh(geoG9, matG9);
    g9.position.set(0, 3.5, -3);
    g9.rotation.set(0, 0, 0);
    g9.scale.set(1, 1, 1);
    //grupo.add(g9);

    // GRANITO 10
    var geoG10 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    var matG10 = new THREE.MeshLambertMaterial({ color: 0xa0a0a0, side: THREE.DoubleSide });
    var g10 = new THREE.Mesh(geoG10, matG10);
    g10.position.set(2.5, 3.5, 2.5);
    g10.rotation.set(0, 0, 0);
    g10.scale.set(1, 1, 1);
    //grupo.add(g10);

    // GRANITO 11
    var geoG11 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    var matG11 = new THREE.MeshLambertMaterial({ color: 0xa0a0a0, side: THREE.DoubleSide });
    var g11 = new THREE.Mesh(geoG11, matG11);
    g11.position.set(-2.5, 3.5, -2.5);
    g11.rotation.set(0, 0, 0);
    g11.scale.set(1, 1, 1);
    //grupo.add(g11);

    // GRANITO 12
    var geoG12 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    var matG12 = new THREE.MeshLambertMaterial({ color: 0xa0a0a0, side: THREE.DoubleSide });
    var g12 = new THREE.Mesh(geoG12, matG12);
    g12.position.set(4, 2.5, 0);
    g12.rotation.set(0, 0, 0);
    g12.scale.set(1, 1, 1);
    //grupo.add(g12);

    // GRANITO 13
    var geoG13 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    var matG13 = new THREE.MeshLambertMaterial({ color: 0xa0a0a0, side: THREE.DoubleSide });
    var g13 = new THREE.Mesh(geoG13, matG13);
    g13.position.set(-4, 2.5, 0);
    g13.rotation.set(0, 0, 0);
    g13.scale.set(1, 1, 1);
    //grupo.add(g13);

    // GRANITO 14
    var geoG14 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    var matG14 = new THREE.MeshLambertMaterial({ color: 0xa0a0a0, side: THREE.DoubleSide });
    var g14 = new THREE.Mesh(geoG14, matG14);
    g14.position.set(0, 2.5, 4);
    g14.rotation.set(0, 0, 0);
    g14.scale.set(1, 1, 1);
    //grupo.add(g14);

    // GRANITO 15
    var geoG15 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    var matG15 = new THREE.MeshLambertMaterial({ color: 0xa0a0a0, side: THREE.DoubleSide });
    var g15 = new THREE.Mesh(geoG15, matG15);
    g15.position.set(0, 2.5, -4);
    g15.rotation.set(0, 0, 0);
    g15.scale.set(1, 1, 1);
    //grupo.add(g15);


    const dulces = new THREE.Group();
    dulces.add(
        plato, conoSal, 
        g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15
    );
    dulces.position.set(x, y, z);

    return dulces;
}