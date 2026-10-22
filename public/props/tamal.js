import * as THREE from "../js/three.module.js";

export default function GD1 ({x, y, z}) {
    const tamalGrupo03 = new THREE.Group();

    // Materiales 
    var materialHojaTamal03 = new THREE.MeshLambertMaterial({ color: 0xded09e, side: THREE.DoubleSide }); // Hoja maíz tostado
    var materialPliegue03 = new THREE.MeshLambertMaterial({ color: 0xba9f61, side: THREE.DoubleSide }); // Sombras de pliegues
    var materialAmarra03 = new THREE.MeshLambertMaterial({ color: 0x8c723a, side: THREE.DoubleSide });

    // Cuerpo
    var meshCuerpoTamal = new THREE.Mesh(
        new THREE.CylinderGeometry(1.8, 1.8, 7, 32),
        materialHojaTamal03
    );
    meshCuerpoTamal.scale.set(1.4, 1, 0.7);
    //tamalGrupo03.add(meshCuerpoTamal);

    // Punta superior
    var meshPuntaSup03 = new THREE.Mesh(
        new THREE.SphereGeometry(1.8, 16, 16),
        materialHojaTamal03
    );
    meshPuntaSup03.scale.set(1.4, 0.6, 0.7);
    meshPuntaSup03.position.set(0, 3.5, 0);
    //tamalGrupo03.add(meshPuntaSup03);

    // Punta inferior
    var meshPuntaInf03 = new THREE.Mesh(
        new THREE.SphereGeometry(1.8, 16, 16),
        materialHojaTamal03
    );
    meshPuntaInf03.scale.set(1.4, 0.6, 0.7);
    meshPuntaInf03.position.set(0, -3.5, 0);
    //tamalGrupo03.add(meshPuntaInf03);

    // Pliegues
    function crearPliegue(px, pz, rY) {
        var pliegue = new THREE.Mesh(
            new THREE.CylinderGeometry(0.08, 0.08, 6.8, 8),
            materialPliegue03
        );
        pliegue.position.set(px, 0, pz);
        pliegue.rotation.y = rY;
        return pliegue;
    }

    var pliegue1 = crearPliegue(0.8, 1.2, 0.1);
    var pliegue2 = crearPliegue(-0.8, 1.2, -0.1);
    var pliegue3 = crearPliegue(1.6, 0.3, 0.3);
    var pliegue4 = crearPliegue(-1.6, 0.3, -0.3);

    // Cuerda
    var meshAmarra03 = new THREE.Mesh(
        new THREE.TorusGeometry(1.8, 0.18, 16, 32),
        materialAmarra03
    );
    meshAmarra03.scale.set(1.45, 1, 0.75);
    meshAmarra03.rotation.x = Math.PI / 2;
    //tamalGrupo03.add(meshAmarra03);

    // Rotación y posición originales del objeto interno
    tamalGrupo03.rotation.z = Math.PI / 6;
    tamalGrupo03.position.set(40, 2.5, 0);


    // Contenedor principal que se exporta y retorna
    const dulces = new THREE.Group();
    
    var subGrupoTamal = new THREE.Group();
    subGrupoTamal.add(
        meshCuerpoTamal, meshPuntaSup03, meshPuntaInf03, 
        pliegue1, pliegue2, pliegue3, pliegue4, 
        meshAmarra03
    );
    subGrupoTamal.rotation.copy(tamalGrupo03.rotation);
    subGrupoTamal.position.copy(tamalGrupo03.position);

    dulces.add(subGrupoTamal);
    dulces.position.set(x, y, z);

    return dulces;
}