import * as THREE from "../js/three.module.js";

export default function GD1 ({x, y, z}) {
    const grupo = new THREE.Group();

    // rosario

    // Material de las cuentas
    var material01 = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
    
    // Geometría de las cuentas
    var geometry01 = new THREE.SphereGeometry(0.5, 16, 16);

    // Cuenta 1
    var cuenta1 = new THREE.Mesh(geometry01, material01);
    cuenta1.position.set(-6, 8, 0);
    //grupo.add(cuenta1);

    // Cuenta 2
    var cuenta2 = new THREE.Mesh(geometry01, material01);
    cuenta2.position.set(-5, 9, 0);
    //grupo.add(cuenta2);

    // Cuenta 3
    var cuenta3 = new THREE.Mesh(geometry01, material01);
    cuenta3.position.set(-3, 10, 0);
    //grupo.add(cuenta3);

    // Cuenta 4
    var cuenta4 = new THREE.Mesh(geometry01, material01);
    cuenta4.position.set(0, 10.5, 0);
    //grupo.add(cuenta4);

    // Cuenta 5
    var cuenta5 = new THREE.Mesh(geometry01, material01);
    cuenta5.position.set(3, 10, 0);
    //grupo.add(cuenta5);

    // Cuenta 6
    var cuenta6 = new THREE.Mesh(geometry01, material01);
    cuenta6.position.set(5, 9, 0);
    //grupo.add(cuenta6);

    // Cuenta 7
    var cuenta7 = new THREE.Mesh(geometry01, material01);
    cuenta7.position.set(6, 8, 0);
    //grupo.add(cuenta7);

    // PARTE INFERIOR
    // Cuenta 8
    var cuenta8 = new THREE.Mesh(geometry01, material01);
    cuenta8.position.set(5, 7, 0);
    //grupo.add(cuenta8);

    // Cuenta 9
    var cuenta9 = new THREE.Mesh(geometry01, material01);
    cuenta9.position.set(3, 6, 0);
    //grupo.add(cuenta9);

    // Cuenta 10
    var cuenta10 = new THREE.Mesh(geometry01, material01);
    cuenta10.position.set(0, 5.5, 0);
    //grupo.add(cuenta10);

    // Cuenta 11
    var cuenta11 = new THREE.Mesh(geometry01, material01);
    cuenta11.position.set(-3, 6, 0);
    //grupo.add(cuenta11);

    // Cuenta 12
    var cuenta12 = new THREE.Mesh(geometry01, material01);
    cuenta12.position.set(-5, 7, 0);
    //grupo.add(cuenta12);

    // ✝️ CRUZ

    // Material dorado brillante
    var materialCruz = new THREE.MeshLambertMaterial({ color: 0xFFD700});

    // Parte vertical de la cruz 
    var geometryCruzV = new THREE.BoxGeometry(0.6, 5, 0.4);
    var cruzVertical = new THREE.Mesh(geometryCruzV, materialCruz);
    cruzVertical.position.set(0, 1.7, 0);
    //grupo.add(cruzVertical);

    // Parte horizontal de la cruz 
    var geometryCruzH = new THREE.BoxGeometry(3.5, 0.5, 0.4);
    var cruzHorizontal = new THREE.Mesh(geometryCruzH, materialCruz);
    cruzHorizontal.position.set(0, 2.5, 0);
    //grupo.add(cruzHorizontal);


    const dulces = new THREE.Group();
    dulces.add(
        cuenta1, cuenta2, cuenta3, cuenta4, cuenta5, cuenta6, cuenta7,
        cuenta8, cuenta9, cuenta10, cuenta11, cuenta12,
        cruzVertical, cruzHorizontal
    );
    dulces.position.set(x, y, z);

    return dulces;
}