import * as THREE from "../js/three.module.js";

export default function GD1 ({x, y, z}) {
    const platoCacahuatesGrupo03 = new THREE.Group();

    // Materiales 
    var materialPlato03 = new THREE.MeshLambertMaterial({ color: 0x3e2723, side: THREE.DoubleSide });
    var materialCacahuate03 = new THREE.MeshLambertMaterial({ color: 0xd7a15c, side: THREE.DoubleSide });
    var materialBordePlato = new THREE.MeshLambertMaterial({ color: 0x5d4037, side: THREE.DoubleSide });

    // Tazón
    var meshPlato03 = new THREE.Mesh(
        new THREE.CylinderGeometry(3.8, 2.5, 1.5, 32, 1, true),
        materialPlato03
    );
    //platoCacahuatesGrupo03.add(meshPlato03);

    // Borde
    var meshBordePlatoMesh = new THREE.Mesh(
        new THREE.TorusGeometry(3.8, 0.2, 16, 32),
        materialBordePlato
    );
    meshBordePlatoMesh.rotation.x = Math.PI / 2;
    meshBordePlatoMesh.position.set(0, 0.75, 0);
    //platoCacahuatesGrupo03.add(meshBordePlatoMesh);

    // Fondo
    var meshFondo03 = new THREE.Mesh(
        new THREE.CylinderGeometry(2.5, 2.5, 0.2, 32),
        materialPlato03
    );
    meshFondo03.position.set(0, -0.75, 0);
    //platoCacahuatesGrupo03.add(meshFondo03);

    // Función creadora de cacahuates
    function crearCacahuate03(x, y, z, rx, ry, rz) {
        var cacahuate = new THREE.Group();
        var e1 = new THREE.Mesh(new THREE.SphereGeometry(0.6, 8, 8), materialCacahuate03);
        e1.position.set(-0.5, 0, 0);
        var e2 = new THREE.Mesh(new THREE.SphereGeometry(0.55, 8, 8), materialCacahuate03);
        e2.position.set(0.5, 0, 0);
        var centro = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 0.8, 8), materialCacahuate03);
        centro.rotation.z = Math.PI / 2;
        
        cacahuate.add(e1, e2, centro);
        cacahuate.position.set(x, y, z);
        cacahuate.rotation.set(rx, ry, rz);
        return cacahuate;
    }

    // Cacahuates dentro del plato
    var c1 = crearCacahuate03(-0.8, -0.1, 0, 0, 0.4, 0.1);
    var c2 = crearCacahuate03(0.7, -0.1, 0.6, 0.2, -0.5, 0);
    var c3 = crearCacahuate03(0, -0.1, -0.8, -0.3, 0.8, 0.2);
    var c4 = crearCacahuate03(0.9, -0.1, -0.5, 0.1, 0, -0.3);
    var c5 = crearCacahuate03(-1.1, -0.1, -0.6, 0.2, 1.1, -0.2);
    var c6 = crearCacahuate03(-0.2, 0.4, 0.1, 0.4, 0.2, 0.5);
    var c7 = crearCacahuate03(0.4, 0.4, -0.2, -0.2, 0.6, 0.3);

    platoCacahuatesGrupo03.add(
        meshPlato03, meshBordePlatoMesh, meshFondo03,
        c1, c2, c3, c4, c5, c6, c7
    );

    platoCacahuatesGrupo03.position.set(20, 0.85, 0);


    const CACAHUATE = new THREE.Group();
    CACAHUATE.add(platoCacahuatesGrupo03);
    CACAHUATE.position.set(x, y, z);
    CACAHUATE.position.add(platoCacahuatesGrupo03.position);

    return CACAHUATE;
}