import * as THREE from "../js/three.module.js";

export default function GD1 ({x, y, z}) {
    const vasoLecheGrupo03 = new THREE.Group();

    // Materiales 
    var materialVidrio03 = new THREE.MeshLambertMaterial({
        color: 0xe0f7fa,
        transparent: true,
        opacity: 0.35,
        side: THREE.DoubleSide
    });
    var materialLecheBlanca03 = new THREE.MeshLambertMaterial({ color: 0xffffff, side: THREE.DoubleSide });
    var materialBorde03 = new THREE.MeshLambertMaterial({
        color: 0xb2ebf2,
        transparent: true,
        opacity: 0.6,
        side: THREE.DoubleSide
    });

    // Vaso de cristal cónico
    var meshVaso03 = new THREE.Mesh(
        new THREE.CylinderGeometry(3.5, 2.5, 8, 32, 1, true),
        materialVidrio03
    );
    //vasoLecheGrupo03.add(meshVaso03);

    // Borde
    var meshBordeVaso = new THREE.Mesh(
        new THREE.TorusGeometry(3.5, 0.15, 16, 32),
        materialBorde03
    );
    meshBordeVaso.rotation.x = Math.PI / 2;
    meshBordeVaso.position.set(0, 4, 0);
    //vasoLecheGrupo03.add(meshBordeVaso);

    // Base
    var meshBaseVaso = new THREE.Mesh(
        new THREE.CylinderGeometry(2.5, 2.5, 0.8, 32),
        materialVidrio03
    );
    meshBaseVaso.position.set(0, -3.6, 0);
    //vasoLecheGrupo03.add(meshBaseVaso);

    // Leche
    var meshLiquido03 = new THREE.Mesh(
        new THREE.CylinderGeometry(3.2, 2.4, 6.5, 32),
        materialLecheBlanca03
    );
    meshLiquido03.position.set(0, -0.4, 0);
    //vasoLecheGrupo03.add(meshLiquido03);

    // Tapa / Espuma
    var meshEspuma03 = new THREE.Mesh(
        new THREE.RingGeometry(0, 3.2, 32),
        materialLecheBlanca03
    );
    meshEspuma03.rotation.x = -Math.PI / 2;
    meshEspuma03.position.set(0, 2.85, 0);
    //vasoLecheGrupo03.add(meshEspuma03);

    vasoLecheGrupo03.position.set(0, 4, 0);


    const dulces = new THREE.Group();
    
    var subGrupoVaso = new THREE.Group();
    subGrupoVaso.add(
        meshVaso03, meshBordeVaso, meshBaseVaso, 
        meshLiquido03, meshEspuma03
    );
    subGrupoVaso.position.copy(vasoLecheGrupo03.position);

    dulces.add(subGrupoVaso);
    dulces.position.set(x, y, z);

    return dulces;
}