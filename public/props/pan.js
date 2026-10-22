import * as THREE from "../js/three.module.js";

export default function GD1 ({x, y, z}) {
    const panMuertoGrupo03 = new THREE.Group();

    // Materiales 
    var materialMasa03 = new THREE.MeshLambertMaterial({ color: 0xc47f38, side: THREE.DoubleSide });
    var materialAzucar03 = new THREE.MeshLambertMaterial({ color: 0xfffcf0, side: THREE.DoubleSide });

    // Masa principal (Media esfera)
    var meshMasa03 = new THREE.Mesh(
        new THREE.SphereGeometry(10, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2),
        materialMasa03
    );
    meshMasa03.position.set(0, 0, 0);
    //panMuertoGrupo03.add(meshMasa03);

    // Huesitos (Esferas)
    var geometryEsferita03 = new THREE.SphereGeometry(1.8, 16, 16);

    // Tira Derecha
    var m01 = new THREE.Mesh(geometryEsferita03, materialAzucar03); m01.position.set(4, 9, 0);
    var m02 = new THREE.Mesh(geometryEsferita03, materialAzucar03); m02.position.set(8, 6, 0);
    //panMuertoGrupo03.add(m01, m02);

    // Tira Izquierda
    var m03 = new THREE.Mesh(geometryEsferita03, materialAzucar03); m03.position.set(-4, 9, 0);
    var m04 = new THREE.Mesh(geometryEsferita03, materialAzucar03); m04.position.set(-8, 6, 0);
    //panMuertoGrupo03.add(m03, m04);

    // Tira Frente
    var m05 = new THREE.Mesh(geometryEsferita03, materialAzucar03); m05.position.set(0, 9, 4);
    var m06 = new THREE.Mesh(geometryEsferita03, materialAzucar03); m06.position.set(0, 6, 8);
    //panMuertoGrupo03.add(m05, m06);

    // Tira Atrás
    var m07 = new THREE.Mesh(geometryEsferita03, materialAzucar03); m07.position.set(0, 9, -4);
    var m08 = new THREE.Mesh(geometryEsferita03, materialAzucar03); m08.position.set(0, 6, -8);
    //panMuertoGrupo03.add(m07, m08);

    // Centro / Bolita superior
    var meshCentro03 = new THREE.Mesh(
        new THREE.SphereGeometry(2.5, 16, 16),
        materialAzucar03
    );
    meshCentro03.position.set(0, 10.2, 0);
    //panMuertoGrupo03.add(meshCentro03);


    const dulces = new THREE.Group();
    dulces.add(
        meshMasa03, 
        m01, m02, m03, m04, m05, m06, m07, m08, 
        meshCentro03
    );
    dulces.position.set(x, y, z);

    return dulces;
}