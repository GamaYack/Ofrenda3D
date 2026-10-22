import * as THREE from "../js/three.module.js";

export default function GD1 ({x, y, z}) {
    const platanoGrupo03 = new THREE.Group();

    // Materiales (Cambiados a MeshLambertMaterial)
    var materialCuerpoPlatano03 = new THREE.MeshLambertMaterial({ color: 0xffd000, side: THREE.DoubleSide });
    var materialTalloPlatano03 = new THREE.MeshLambertMaterial({ color: 0x3d2314, side: THREE.DoubleSide });

    // Cuerpo
    var meshCuerpo03 = new THREE.Mesh(
        new THREE.TorusGeometry(5.5, 2.1, 16, 32, Math.PI),
        materialCuerpoPlatano03
    );
    //platanoGrupo03.add(meshCuerpo03);

    // Tapa Inf
    var meshTapaInf03 = new THREE.Mesh(
        new THREE.SphereGeometry(2.1, 16, 16),
        materialCuerpoPlatano03
    );
    meshTapaInf03.position.set(-5.5, 0, 0);
    //platanoGrupo03.add(meshTapaInf03);

    // Tapa Sup
    var meshTapaSup03 = new THREE.Mesh(
        new THREE.SphereGeometry(2.1, 16, 16),
        materialCuerpoPlatano03
    );
    meshTapaSup03.position.set(5.5, 0, 0);
    //platanoGrupo03.add(meshTapaSup03);

    // Tallo
    var meshTalloPlatano = new THREE.Mesh(
        new THREE.CylinderGeometry(0.5, 0.9, 2.5, 16),
        materialTalloPlatano03
    );
    meshTalloPlatano.rotation.z = Math.PI / 6;
    meshTalloPlatano.position.set(6.5, -2, 0);
    //platanoGrupo03.add(meshTalloPlatano);

    // Peca
    var meshPeca = new THREE.Mesh(
        new THREE.SphereGeometry(0.3, 8, 8),
        materialTalloPlatano03
    );
    meshPeca.scale.set(1, 1, 0.2);
    meshPeca.position.set(0, 5.8, 2.0);
    //platanoGrupo03.add(meshPeca);

    platanoGrupo03.rotation.z = Math.PI / 2.2;
    platanoGrupo03.position.set(-20, 6.5, 0);


    const dulces = new THREE.Group();
    dulces.add(
        meshCuerpo03, meshTapaInf03, meshTapaSup03, meshTalloPlatano, meshPeca
    );
    dulces.position.set(x, y, z);
    dulces.rotation.copy(platanoGrupo03.rotation);
    dulces.position.add(platanoGrupo03.position);

    return dulces;
}