import * as THREE from "../js/three.module.js";

export default function GD1 ({x, y, z}) {
    const naranjaGrupo03 = new THREE.Group();

    // Materiales
    var materialPiel03 = new THREE.MeshLambertMaterial({ color: 0xff8c00, side: THREE.DoubleSide });
    var materialOmbligo03 = new THREE.MeshLambertMaterial({ color: 0xe67e22, side: THREE.DoubleSide });
    var materialTalloNaranja03 = new THREE.MeshLambertMaterial({ color: 0x4a2e13, side: THREE.DoubleSide });
    var materialHoja03 = new THREE.MeshLambertMaterial({ color: 0x228b22, side: THREE.DoubleSide });

    // Cuerpo de la naranja 
    var meshFruta03 = new THREE.Mesh(new THREE.SphereGeometry(8, 32, 16), materialPiel03);
    meshFruta03.scale.set(1, 0.95, 1);
    meshFruta03.position.set(0, 7.6, 0);
    //naranjaGrupo03.add(meshFruta03);

    // Ombligo
    var meshOmbligo = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.2, 16, 30), materialOmbligo03);
    meshOmbligo.rotation.x = Math.PI / 2;
    meshOmbligo.position.set(0, 15, 0);
    //naranjaGrupo03.add(meshOmbligo);

    // Tallo
    var meshTalloNaranja = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.4, 2.5, 16), materialTalloNaranja03);
    meshTalloNaranja.rotation.z = -0.1;
    meshTalloNaranja.position.set(0, 15.8, 0);
    //naranjaGrupo03.add(meshTalloNaranja);

    // Hoja verde
    var meshHoja03 = new THREE.Mesh(new THREE.SphereGeometry(2.2, 16, 16), materialHoja03);
    meshHoja03.scale.set(1.6, 0.15, 0.7);
    meshHoja03.rotation.z = -Math.PI / 5;
    meshHoja03.position.set(2.2, 16.0, 0);
    //naranjaGrupo03.add(meshHoja03);

    naranjaGrupo03.position.set(-40, 0, 0);


    const dulces = new THREE.Group();
    
    var subGrupoNaranja = new THREE.Group();
    subGrupoNaranja.add(
        meshFruta03, meshOmbligo, meshTalloNaranja, meshHoja03
    );
    subGrupoNaranja.position.copy(naranjaGrupo03.position);

    dulces.add(subGrupoNaranja);
    dulces.position.set(x, y, z);

    return dulces;
}