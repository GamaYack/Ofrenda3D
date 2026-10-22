import * as THREE from "../js/three.module.js";

export default function GD1 ({x, y, z}) {
    const vasoAguaGrupo03 = new THREE.Group();

    // Materiales 
    var materialVasoFinal = new THREE.MeshLambertMaterial({ color: 0xaaddee, side: THREE.DoubleSide });
    var materialAgua = new THREE.MeshLambertMaterial({ color: 0x0088ff, side: THREE.DoubleSide });
    var materialAguaArriba = new THREE.MeshLambertMaterial({ color: 0x3399ff, side: THREE.DoubleSide });

    // Cuerpo del vaso
    var meshVasoFinal = new THREE.Mesh(
        new THREE.CylinderGeometry(5, 4, 12, 32, 1, true),
        materialVasoFinal
    );
    meshVasoFinal.position.set(0, 6, 0);
    //vasoAguaGrupo03.add(meshVasoFinal);

    // Base del vaso
    var meshBaseFinal = new THREE.Mesh(
        new THREE.CircleGeometry(4, 32),
        materialVasoFinal
    );
    meshBaseFinal.rotation.x = Math.PI / 2;
    meshBaseFinal.position.set(0, 0, 0);
    //vasoAguaGrupo03.add(meshBaseFinal);

    // Agua (Cuerpo)
    var meshAgua = new THREE.Mesh(
        new THREE.CylinderGeometry(4.5, 3.8, 8, 32),
        materialAgua
    );
    meshAgua.position.set(0, 4, 0);
    //vasoAguaGrupo03.add(meshAgua);

    // Superficie del agua
    var meshAguaArriba = new THREE.Mesh(
        new THREE.CircleGeometry(4.5, 32),
        materialAguaArriba
    );
    meshAguaArriba.rotation.x = Math.PI / 2;
    meshAguaArriba.position.set(0, 8, 0);
    //vasoAguaGrupo03.add(meshAguaArriba);


    const AGUA = new THREE.Group();
    AGUA.add(meshVasoFinal, meshBaseFinal, meshAgua, meshAguaArriba);
    AGUA.position.set(x, y, z);

    return AGUA;
}