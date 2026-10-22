import * as THREE from "three.module.js";
 
export default function veladora({ x, y, z }) {




    // Vaso 
    var geometryVaso = new THREE.CylinderGeometry(5, 4, 12, 32, 1, true);
    var materialVaso = new THREE.MeshStandardMaterial({ 
        color: 0xdddddd, 
        roughness: 0.1, 
        metalness: 0.1, 
        side: THREE.DoubleSide 
    });
    var meshVaso = new THREE.Mesh(geometryVaso, materialVaso);
    meshVaso.position.set(0, 10, 0);
    // scene.add(meshVaso);




 
    // Cera
    var geometryCera = new THREE.CylinderGeometry(4.6, 3.8, 9, 32);
    var materialCera = new THREE.MeshStandardMaterial({ 
        color: 0xffffff, 
        roughness: 0.6 
    });
    var meshCera = new THREE.Mesh(geometryCera, materialCera);
    meshCera.position.set(0, 8.5, 0);
    // scene.add(meshCera);

    // Mecha
    var geometryMecha = new THREE.CylinderGeometry(0.2, 0.2, 2, 16);
    var materialMecha = new THREE.MeshStandardMaterial({ 
        color: 0x111111, 
        roughness: 0.9 
    });
    var meshMecha = new THREE.Mesh(geometryMecha, materialMecha);
    meshMecha.position.set(0, 14, 0);
    // scene.add(meshMecha);





    // Flama
    var geometryFlama = new THREE.ConeGeometry(1.2, 3, 32);
    var materialFlama = new THREE.MeshStandardMaterial({ 
        color: 0xffa500, 
        emissive: 0xff5500, 
        emissiveIntensity: 0.8 
    });
    var meshFlama = new THREE.Mesh(geometryFlama, materialFlama);
    meshFlama.position.set(0, 16.5, 0);
    // scene.add(meshFlama);

    

    // Creación del grupo
    const vela = new THREE.Group();
    vela.add(meshVaso, meshCera, meshMecha, meshFlama);
    vela.position.set(x, y, z);
    // scene.add(vela);

    return vela;
}