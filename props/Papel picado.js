import * as THREE from "../js/three.module.js";

export default function GD1 ({x, y, z}) {
    const grupo = new THREE.Group();

    // PAPEL PICADO

    // PAPEL PRINCIPAL
    var geometry01 = new THREE.BoxGeometry(16, 9, 0.3);
    var material01 = new THREE.MeshLambertMaterial({color: 0xFF1493});
    var mesh01 = new THREE.Mesh(geometry01, material01);
    mesh01.position.set(0, 8, 0);
    //mesh01.castShadow = true;
    //grupo.add(mesh01);


    // FLOR DEL CENTRO

    // Pétalos
    var geometry02 = new THREE.CircleGeometry(1.4, 20);
    var material02 = new THREE.MeshLambertMaterial({color: 0xFFD700, side: THREE.DoubleSide});
    
    // Pétalo de arriba
    var petalo1 = new THREE.Mesh(geometry02, material02);
    petalo1.position.set(0, 10, 0.3);
    //grupo.add(petalo1);

    // Pétalo de abajo
    var petalo2 = new THREE.Mesh(geometry02, material02);
    petalo2.position.set(0, 6, 0.3);
    //grupo.add(petalo2);

    // Pétalo izquierdo
    var petalo3 = new THREE.Mesh(geometry02, material02);
    petalo3.position.set(-2, 8, 0.3);
    //grupo.add(petalo3);

    // Pétalo derecho
    var petalo4 = new THREE.Mesh(geometry02, material02);
    petalo4.position.set(2, 8, 0.3);
    //grupo.add(petalo4);

    // CENTRO DE LA FLOR
    var geometry03 = new THREE.CircleGeometry(1, 20);
    var material03 = new THREE.MeshLambertMaterial({color: 0x9C27B0, side: THREE.DoubleSide});
    var centro = new THREE.Mesh(geometry03, material03);
    centro.position.set(0, 8, 0.4);
    //grupo.add(centro);

    // Círculos pequeños
    var geometry04 = new THREE.CircleGeometry(0.7, 20);
    var material04 = new THREE.MeshLambertMaterial({
        color: 0xFFD700,
        side: THREE.DoubleSide
    });

    // Izquierda arriba
    var circulo1 = new THREE.Mesh(geometry04, material04);
    circulo1.position.set(-5, 10.5, 0.3);
    //grupo.add(circulo1);

    // Derecha arriba
    var circulo2 = new THREE.Mesh(geometry04, material04);
    circulo2.position.set(5, 10.5, 0.3);
    //grupo.add(circulo2);

    // Izquierda abajo
    var circulo3 = new THREE.Mesh(geometry04, material04);
    circulo3.position.set(-5, 5.5, 0.3);
    //grupo.add(circulo3);

    // Derecha abajo
    var circulo4 = new THREE.Mesh(geometry04, material04);
    circulo4.position.set(5, 5.5, 0.3);
    //grupo.add(circulo4);

    // PARTE INFERIOR RECORTADA
    var geometry08 = new THREE.ConeGeometry(0.7, 1.2, 3);
    var material08 = new THREE.MeshLambertMaterial({color: 0xFF1493});

    // Fleco 1
    var fleco1 = new THREE.Mesh(geometry08, material08);
    fleco1.position.set(-7, 3.3, 0);
    //grupo.add(fleco1);

    // Fleco 2
    var fleco2 = new THREE.Mesh(geometry08, material08);
    fleco2.position.set(-5, 3.3, 0);
    //grupo.add(fleco2);

    // Fleco 3
    var fleco3 = new THREE.Mesh(geometry08, material08);
    fleco3.position.set(-3, 3.3, 0);
    //grupo.add(fleco3);

    // Fleco 4
    var fleco4 = new THREE.Mesh(geometry08, material08);
    fleco4.position.set(-1, 3.3, 0);
    //grupo.add(fleco4);

    // Fleco 5
    var fleco5 = new THREE.Mesh(geometry08, material08);
    fleco5.position.set(1, 3.3, 0);
    //grupo.add(fleco5);

    // Fleco 6
    var fleco6 = new THREE.Mesh(geometry08, material08);
    fleco6.position.set(3, 3.3, 0);
    //grupo.add(fleco6);

    // Fleco 7
    var fleco7 = new THREE.Mesh(geometry08, material08);
    fleco7.position.set(5, 3.3, 0);
    //grupo.add(fleco7);

    // Fleco 8
    var fleco8 = new THREE.Mesh(geometry08, material08);
    fleco8.position.set(7, 3.3, 0);
    //grupo.add(fleco8);

    // DECORACIÓN DE LAS ESQUINAS
    var geometry09 = new THREE.TorusGeometry(0.8, 0.2, 10, 20);
    var material09 = new THREE.MeshLambertMaterial({color: 0xFFD700});

    // Esquina superior izquierda
    var deco1 = new THREE.Mesh(geometry09, material09);
    deco1.position.set(-6, 11, 0.4);
    //grupo.add(deco1);

    // Esquina superior derecha
    var deco2 = new THREE.Mesh(geometry09, material09);
    deco2.position.set(6, 11, 0.4);
    //grupo.add(deco2);

    // Esquina inferior izquierda
    var deco3 = new THREE.Mesh(geometry09, material09);
    deco3.position.set(-6, 5, 0.4);
    //grupo.add(deco3);

    // Esquina inferior derecha
    var deco4 = new THREE.Mesh(geometry09, material09);
    deco4.position.set(6, 5, 0.4);
    //grupo.add(deco4);


    const dulces = new THREE.Group();
    dulces.add(
        mesh01, petalo1, petalo2, petalo3, petalo4, centro, 
        circulo1, circulo2, circulo3, circulo4, 
        fleco1, fleco2, fleco3, fleco4, fleco5, fleco6, fleco7, fleco8, 
        deco1, deco2, deco3, deco4
    );
    dulces.position.set(x, y, z);

    return dulces;
}