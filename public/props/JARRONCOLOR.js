import * as THREE from "../js/three.module.js";

export default function GD1 ({x, y, z}) {
    const grupo = new THREE.Group();

    // MATERIALES
    var matBarro = new THREE.MeshLambertMaterial({
        color: 0xb85d19
    });

    var matBarroOscuro = new THREE.MeshLambertMaterial({
        color: 0x5c2e0c,
        side: THREE.BackSide
    });

    var matRosa = new THREE.MeshLambertMaterial({
        color: 0xff69b4
    });

    var matCafe = new THREE.MeshLambertMaterial({
        color: 0x6b4226
    });

    var matVerde = new THREE.MeshLambertMaterial({
        color: 0x4caf50
    });

    // JARRON: PANZA
    var geoPanza = new THREE.SphereGeometry(5.5, 40, 40);
    var panza = new THREE.Mesh(geoPanza, matBarro);
    panza.position.set(0, 5.5, 0);
    panza.rotation.set(0, 0, 0);
    panza.scale.set(1, 1.1, 1);
    //grupo.add(panza);

    // PANZA INTERIOR
    var geoPanzaInt = new THREE.SphereGeometry(5.5, 40, 40);
    var panzaInt = new THREE.Mesh(geoPanzaInt, matBarroOscuro);
    panzaInt.position.set(0, 5.5, 0);
    panzaInt.rotation.set(0, 0, 0);
    panzaInt.scale.set(0.99, 1.09, 0.99);
    //grupo.add(panzaInt);

    // CUELLO
    var geoCuello = new THREE.CylinderGeometry(3, 4.5, 4, 40, 40, true);
    var cuello = new THREE.Mesh(geoCuello, matBarro);
    cuello.position.set(0, 10.5, 0);
    cuello.rotation.set(0, 0, 0);
    cuello.scale.set(1, 1, 1);
    //grupo.add(cuello);

    // CUELLO INTERIOR
    var geoCuelloInt = new THREE.CylinderGeometry(3, 4.5, 4, 40, 40, true);
    var cuelloInt = new THREE.Mesh(geoCuelloInt, matBarroOscuro);
    cuelloInt.position.set(0, 10.5, 0);
    cuelloInt.rotation.set(0, 0, 0);
    cuelloInt.scale.set(0.99, 1, 0.99);
    //grupo.add(cuelloInt);

    // BOCA DEL JARRON
    var geoBoca = new THREE.TorusGeometry(3.3, 0.7, 40, 40);
    var boca = new THREE.Mesh(geoBoca, matBarro);
    boca.position.set(0, 12.5, 0);
    boca.rotation.set(Math.PI/2, 0, 0);
    boca.scale.set(1, 1, 1);
    //grupo.add(boca);

    // LINEA 1 DEL JARRON
    var geoLinea1 = new THREE.TorusGeometry(3.2, 0.15, 40, 40);
    var linea1 = new THREE.Mesh(geoLinea1, matBarro);
    linea1.position.set(0, 9.8, 0);
    linea1.rotation.set(Math.PI/2, 0, 0);
    linea1.scale.set(1, 1, 1);
    //grupo.add(linea1);

    // LINEA 2 DEL JARRON
    var geoLinea2 = new THREE.TorusGeometry(3.2, 0.15, 40, 40);
    var linea2 = new THREE.Mesh(geoLinea2, matBarro);
    linea2.position.set(0, 10.5, 0);
    linea2.rotation.set(Math.PI/2, 0, 0);
    linea2.scale.set(1, 1, 1);
    //grupo.add(linea2);

    // FLOR: TALLO
    var geoTallo = new THREE.BoxGeometry(0.2, 4.5, 0.2);
    var tallo = new THREE.Mesh(geoTallo, matCafe);
    tallo.position.set(0, 4, 5.2);
    tallo.rotation.set(0, 0, 0);
    tallo.scale.set(1, 1, 1);
    //grupo.add(tallo);

    // HOJA 1
    var geoHoja1 = new THREE.SphereGeometry(0.5, 10, 10);
    var matHoja1 = new THREE.MeshLambertMaterial({color: 0x4caf50});
    var hoja1 = new THREE.Mesh(geoHoja1, matHoja1);
    hoja1.position.set(0.9, 3, 5.3);
    hoja1.rotation.set(0, 0, Math.PI/4);
    hoja1.scale.set(1.5, 0.5, 0.5);
    //grupo.add(hoja1);

    // HOJA 2
    var geoHoja2 = new THREE.SphereGeometry(0.5, 10, 10);
    var matHoja2 = new THREE.MeshLambertMaterial({color: 0x4caf50});
    var hoja2 = new THREE.Mesh(geoHoja2, matHoja2);
    hoja2.position.set(-0.9, 3, 5.3);
    hoja2.rotation.set(0, 0, -Math.PI/4);
    hoja2.scale.set(1.5, 0.5, 0.5);
    //grupo.add(hoja2);

    // CENTRO DE LA FLOR
    var geoCentro = new THREE.CylinderGeometry(0.8, 0.8, 0.2, 40);
    var matCentro = new THREE.MeshLambertMaterial({color: 0xff69b4});
    var centro = new THREE.Mesh(geoCentro, matCentro);
    centro.position.set(0, 6.5, 5.4);
    centro.rotation.set(Math.PI/2, 0, 0);
    centro.scale.set(1, 1, 1);
    //grupo.add(centro);

    // PETALO 1
    var geoPetalo1 = new THREE.SphereGeometry(0.6, 10, 10);
    var matPetalo1 = new THREE.MeshLambertMaterial({color: 0xff69b4});
    var petalo1 = new THREE.Mesh(geoPetalo1, matPetalo1);
    petalo1.position.set(0, 7.8, 5.3);
    petalo1.rotation.set(0, 0, 0);
    petalo1.scale.set(1, 1.5, 0.5);
    //grupo.add(petalo1);

    // PETALO 2
    var geoPetalo2 = new THREE.SphereGeometry(0.6, 10, 10);
    var matPetalo2 = new THREE.MeshLambertMaterial({color: 0xff69b4});
    var petalo2 = new THREE.Mesh(geoPetalo2, matPetalo2);
    petalo2.position.set(0, 5.2, 5.3);
    petalo2.rotation.set(0, 0, 0);
    petalo2.scale.set(1, 1.5, 0.5);
    //grupo.add(petalo2);

    // PETALO 3
    var geoPetalo3 = new THREE.SphereGeometry(0.6, 10, 10);
    var matPetalo3 = new THREE.MeshLambertMaterial({color: 0xff69b4});
    var petalo3 = new THREE.Mesh(geoPetalo3, matPetalo3);
    petalo3.position.set(1.2, 7.2, 5.3);
    petalo3.rotation.set(0, 0, -Math.PI/4);
    petalo3.scale.set(1, 1.5, 0.5);
    //grupo.add(petalo3);

    // PETALO 4
    var geoPetalo4 = new THREE.SphereGeometry(0.6, 10, 10);
    var matPetalo4 = new THREE.MeshLambertMaterial({color: 0xff69b4});
    var petalo4 = new THREE.Mesh(geoPetalo4, matPetalo4);
    petalo4.position.set(-1.2, 7.2, 5.3);
    petalo4.rotation.set(0, 0, Math.PI/4);
    petalo4.scale.set(1, 1.5, 0.5);
    //grupo.add(petalo4);

    // PETALO 5
    var geoPetalo5 = new THREE.SphereGeometry(0.6, 10, 10);
    var matPetalo5 = new THREE.MeshLambertMaterial({color: 0xff69b4});
    var petalo5 = new THREE.Mesh(geoPetalo5, matPetalo5);
    petalo5.position.set(1.2, 5.8, 5.3);
    petalo5.rotation.set(0, 0, Math.PI/4);
    petalo5.scale.set(1, 1.5, 0.5);
    //grupo.add(petalo5);

    // PETALO 6
    var geoPetalo6 = new THREE.SphereGeometry(0.6, 10, 10);
    var matPetalo6 = new THREE.MeshLambertMaterial({color: 0xff69b4});
    var petalo6 = new THREE.Mesh(geoPetalo6, matPetalo6);
    petalo6.position.set(-1.2, 5.8, 5.3);
    petalo6.rotation.set(0, 0, -Math.PI/4);
    petalo6.scale.set(1, 1.5, 0.5);
    //grupo.add(petalo6);


    const dulces = new THREE.Group();
    dulces.add(
        panza, panzaInt, cuello, cuelloInt, boca, linea1, linea2, 
        tallo, hoja1, hoja2, centro, petalo1, petalo2, petalo3, 
        petalo4, petalo5, petalo6
    );
    dulces.position.set(x, y, z);

    return dulces;
}