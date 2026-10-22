import * as THREE from "../js/three.module.js";

export default function GD1 ({x, y, z}) {
    const grupo = new THREE.Group();

    // MARCO DE FOTOS VERTICAL 📷
    // MATERIAL DEL MARCO
    var materialMarco = new THREE.MeshLambertMaterial({color: 0x6B3E1E});

    // PARTE SUPERIOR
    var marco1 = new THREE.BoxGeometry(36, 4, 4);
    var meshMarco1 = new THREE.Mesh(marco1, materialMarco);
    meshMarco1.position.set(0, 32, 0);
    //grupo.add(meshMarco1);

    // PARTE INFERIOR
    var marco2 = new THREE.BoxGeometry(36, 4, 4);
    var meshMarco2 = new THREE.Mesh(marco2, materialMarco);
    meshMarco2.position.set(0, 2, 0);
    //grupo.add(meshMarco2);

    // PARTE IZQUIERDA
    var marco3 = new THREE.BoxGeometry(4, 30, 4);
    var meshMarco3 = new THREE.Mesh(marco3, materialMarco);
    meshMarco3.position.set(-16, 17, 0);
    //grupo.add(meshMarco3);

    // PARTE DERECHA
    var marco4 = new THREE.BoxGeometry(4, 30, 4);
    var meshMarco4 = new THREE.Mesh(marco4, materialMarco);
    meshMarco4.position.set(16, 17, 0);
    //grupo.add(meshMarco4);

    // CUADRO BLANCO AJUSTADO PARA LA FOTO 
    var materialFoto = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
    var geomFoto = new THREE.BoxGeometry(28, 26, 1); // Ancho y alto exactos para el hueco
    var meshFoto = new THREE.Mesh(geomFoto, materialFoto);
    meshFoto.position.set(0, 17, -0.5); // Centrado perfectamente en el marco
    //grupo.add(meshFoto);

    // SILUETA SENCILLA CENTRADA EN EL RETRATO 
    var materialSilueta = new THREE.MeshLambertMaterial({color: 0x222222});

    // Cabeza
    var geomCabeza = new THREE.CylinderGeometry(2.5, 2.5, 0.5, 16);
    var meshCabeza = new THREE.Mesh(geomCabeza, materialSilueta);
    meshCabeza.rotation.set(Math.PI/2, 0, 0);
    meshCabeza.position.set(0, 24, 0); // Ubicada en la parte alta del cuadro blanco
    //grupo.add(meshCabeza);

    // Cuerpo / Torso
    var geomCuerpo = new THREE.BoxGeometry(8, 10, 0.5);
    var meshCuerpo = new THREE.Mesh(geomCuerpo, materialSilueta);
    meshCuerpo.position.set(0, 15, 0); 
    //grupo.add(meshCuerpo);

    // Pierna izquierda
    var geomPierna1 = new THREE.BoxGeometry(2.2, 8, 0.5);
    var meshPierna1 = new THREE.Mesh(geomPierna1, materialSilueta);
    meshPierna1.position.set(-2, 8, 0); // Lado izquierdo de la base
    //grupo.add(meshPierna1);

    // Pierna derecha
    var geomPierna2 = new THREE.BoxGeometry(2.2, 8, 0.5);
    var meshPierna2 = new THREE.Mesh(geomPierna2, materialSilueta);
    meshPierna2.position.set(2, 8, 0); // Lado derecho de la base
    //grupo.add(meshPierna2);


    const dulces = new THREE.Group();
    dulces.add(
        meshMarco1, meshMarco2, meshMarco3, meshMarco4, 
        meshFoto, meshCabeza, meshCuerpo, meshPierna1, meshPierna2
    );
    dulces.position.set(x, y, z);

    return dulces;
}