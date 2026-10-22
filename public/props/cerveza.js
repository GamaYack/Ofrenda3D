import * as THREE from "../js/three.module.js";

export default function GD1 ({x, y, z}) {
    const cervezaGrupo03 = new THREE.Group();

    // Materiales
    var materialVidrioFinal = new THREE.MeshLambertMaterial({ color: 0x8b4513, side: THREE.DoubleSide });
    var materialEtiqueta = new THREE.MeshLambertMaterial({ color: 0xf5f5dc, side: THREE.DoubleSide });
    var materialTapa = new THREE.MeshLambertMaterial({ color: 0xffd700, side: THREE.DoubleSide });

    // Cuerpo
    var meshCuerpoFinal = new THREE.Mesh(
        new THREE.CylinderGeometry(4, 4, 12, 32),
        materialVidrioFinal
    );
    meshCuerpoFinal.position.set(0, 6, 0);
    //cervezaGrupo03.add(meshCuerpoFinal);

    // Curva / Hombros
    var meshCurvaFinal = new THREE.Mesh(
        new THREE.SphereGeometry(4, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2),
        materialVidrioFinal
    );
    meshCurvaFinal.position.set(0, 10, 0);
    //cervezaGrupo03.add(meshCurvaFinal);

    // Cuello
    var meshCuelloFinal = new THREE.Mesh(
        new THREE.CylinderGeometry(1.5, 1.5, 8, 32),
        materialVidrioFinal
    );
    meshCuelloFinal.position.set(0, 14, 0);
    //cervezaGrupo03.add(meshCuelloFinal);

    // Etiqueta
    var meshEtiqueta = new THREE.Mesh(
        new THREE.CylinderGeometry(4.05, 4.05, 5, 32),
        materialEtiqueta
    );
    meshEtiqueta.position.set(0, 6, 0);
    //cervezaGrupo03.add(meshEtiqueta);

    // Corcholata / Tapa
    var meshTapa = new THREE.Mesh(
        new THREE.CylinderGeometry(1.7, 1.7, 0.8, 32),
        materialTapa
    );
    meshTapa.position.set(0, 18.4, 0);
    //cervezaGrupo03.add(meshTapa);


    const dulces = new THREE.Group();
    dulces.add(
        meshCuerpoFinal, meshCurvaFinal, meshCuelloFinal, meshEtiqueta, meshTapa
    );
    dulces.position.set(x, y, z);

    return dulces;
}