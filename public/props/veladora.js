import * as THREE from "./three.module.js";
 
export default function veladora({ x, y, z }) {
    // Vaso 
    var geometryVasoFinal = new THREE.CylinderGeometry(5, 4, 12, 32, 1, true);
    var materialVasoFinal = new THREE.MeshBasicMaterial({ color: 0xdddddd, side: THREE.DoubleSide });
    var meshVasoFinal = new THREE.Mesh(geometryVasoFinal, materialVasoFinal);
    meshVasoFinal.position.set(0, 10, 0);
 
    // Cera
    var geometryCeraFinal = new THREE.CylinderGeometry(4.6, 3.8, 9, 32);
    var materialCeraFinal = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
    var meshCeraFinal = new THREE.Mesh(geometryCeraFinal, materialCeraFinal);
    meshCeraFinal.position.set(0, 8.5, 0);
 
    // Mecha
    var geometryMecha = new THREE.CylinderGeometry(0.2, 0.2, 2, 16);
    var materialMecha = new THREE.MeshBasicMaterial({ color: 0x111111, side: THREE.DoubleSide });
    var meshMecha = new THREE.Mesh(geometryMecha, materialMecha);
    meshMecha.position.set(0, 14, 0);
 
    // Flama
    var geometryFlama = new THREE.ConeGeometry(1.2, 3, 32);
    var materialFlama = new THREE.MeshBasicMaterial({ color: 0xffa500, side: THREE.DoubleSide });
    var meshFlama = new THREE.Mesh(geometryFlama, materialFlama);
    meshFlama.position.set(0, 16.5, 0);
 
    // Creación del grupo
    const veladoraGrupo = new THREE.Group();
    veladoraGrupo.add(meshVasoFinal, meshCeraFinal, meshMecha, meshFlama);
    veladoraGrupo.position.set(x, y, z);
 
    return veladoraGrupo;
}