import * as THREE from "../js/three.module.js";

export default function GD1 ({x, y, z}) {
    const veladoraGrupo03 = new THREE.Group();

    // Materiales
    var materialVasoVeladora = new THREE.MeshLambertMaterial({ 
        color: 0xdddddd, 
        side: THREE.DoubleSide 
    });
    var materialCeraFinal = new THREE.MeshLambertMaterial({ 
        color: 0xffffff
    });
    var materialMecha = new THREE.MeshLambertMaterial({ 
        color: 0x111111
    });
    var materialFlama = new THREE.MeshLambertMaterial({ 
        color: 0xffa500, 
        emissive: 0xff5500, 
        emissiveIntensity: 0.8 
    });

    // Vaso
    var meshVasoVeladora = new THREE.Mesh(
        new THREE.CylinderGeometry(5, 4, 12, 32, 1, true),
        materialVasoVeladora
    );
    meshVasoVeladora.position.set(0, 6, 0);
    //veladoraGrupo03.add(meshVasoVeladora);

    // Cera
    var meshCeraFinal = new THREE.Mesh(
        new THREE.CylinderGeometry(4.6, 3.8, 9, 32),
        materialCeraFinal
    );
    meshCeraFinal.position.set(0, 4.5, 0);
    //veladoraGrupo03.add(meshCeraFinal);

    // Mecha
    var meshMecha = new THREE.Mesh(
        new THREE.CylinderGeometry(0.2, 0.2, 2, 16),
        materialMecha
    );
    meshMecha.position.set(0, 10, 0);
    //veladoraGrupo03.add(meshMecha);

    // Flama
    var meshFlama = new THREE.Mesh(
        new THREE.ConeGeometry(1.2, 3, 32),
        materialFlama
    );
    meshFlama.position.set(0, 12.5, 0);
    //veladoraGrupo03.add(meshFlama);


    const dulces = new THREE.Group();
    dulces.add(meshVasoVeladora, meshCeraFinal, meshMecha, meshFlama);
    dulces.position.set(x, y, z);

    return dulces;
}