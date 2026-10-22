import * as THREE from "../js/three.module.js";

export default function GD1 ({x, y, z}) {
    const calaveraGrupo03 = new THREE.Group();

    // Materiales 
    var materialBlanco = new THREE.MeshLambertMaterial({ color: 0xffffff, side: THREE.DoubleSide });
    var materialNegro = new THREE.MeshLambertMaterial({ color: 0x111111, side: THREE.DoubleSide });
    var materialRosa = new THREE.MeshLambertMaterial({ color: 0xff007f, side: THREE.DoubleSide });
    var materialAzul = new THREE.MeshLambertMaterial({ color: 0x00d4ff, side: THREE.DoubleSide });
    var materialAmarillo = new THREE.MeshLambertMaterial({ color: 0xffd700, side: THREE.DoubleSide });

    // Cabeza y Mandíbula
    var meshCabeza03 = new THREE.Mesh(new THREE.SphereGeometry(6, 32, 16), materialBlanco);
    meshCabeza03.position.set(0, 6, 0);
    //calaveraGrupo03.add(meshCabeza03);

    var meshMandibula03 = new THREE.Mesh(new THREE.BoxGeometry(6.5, 4.5, 5), materialBlanco);
    meshMandibula03.position.set(0, 1.2, 3.5);
    //calaveraGrupo03.add(meshMandibula03);

    // Ojos e Iris
    var geometryOjoBase = new THREE.SphereGeometry(1.5, 32, 16);
    var geometryIrisBase = new THREE.SphereGeometry(0.7, 32, 16);

    // Ojo Izquierdo
    var meshOjoIzq03 = new THREE.Mesh(geometryOjoBase, materialNegro);
    meshOjoIzq03.scale.set(1, 1, 0.15);
    meshOjoIzq03.position.set(-1.8, 6.5, 5.7);
    //calaveraGrupo03.add(meshOjoIzq03);

    var meshIrisIzq = new THREE.Mesh(geometryIrisBase, materialAzul);
    meshIrisIzq.scale.set(1, 1, 0.2);
    meshIrisIzq.position.set(-1.8, 6.5, 5.85);
    //calaveraGrupo03.add(meshIrisIzq);

    // Ojo Derecho
    var meshOjoDer03 = new THREE.Mesh(geometryOjoBase, materialNegro);
    meshOjoDer03.scale.set(1, 1, 0.15);
    meshOjoDer03.position.set(1.8, 6.5, 5.7);
    //calaveraGrupo03.add(meshOjoDer03);

    var meshIrisDer = new THREE.Mesh(geometryIrisBase, materialAzul);
    meshIrisDer.scale.set(1, 1, 0.2);
    meshIrisDer.position.set(1.8, 6.5, 5.85);
    //calaveraGrupo03.add(meshIrisDer);

    // Nariz
    var meshNariz03 = new THREE.Mesh(new THREE.ConeGeometry(0.8, 1.5, 3), materialNegro);
    meshNariz03.position.set(0, 4.3, 6);
    meshNariz03.rotation.z = Math.PI;
    //calaveraGrupo03.add(meshNariz03);

    // Boca y Dientes
    var meshBoca03 = new THREE.Mesh(new THREE.BoxGeometry(4.5, 0.3, 0.2), materialNegro);
    meshBoca03.position.set(0, 1.8, 6.1);
    //calaveraGrupo03.add(meshBoca03);

    var geometryDienteVert = new THREE.BoxGeometry(0.25, 1.6, 0.2);
    var d1 = new THREE.Mesh(geometryDienteVert, materialNegro); d1.position.set(-1.5, 1.8, 6.2);
    var d2 = new THREE.Mesh(geometryDienteVert, materialNegro); d2.position.set(-0.5, 1.8, 6.2);
    var d3 = new THREE.Mesh(geometryDienteVert, materialNegro); d3.position.set(0.5, 1.8, 6.2);
    var d4 = new THREE.Mesh(geometryDienteVert, materialNegro); d4.position.set(1.5, 1.8, 6.2);
    //calaveraGrupo03.add(d1, d2, d3, d4);

    // Decoración (Flores y Placa)
    var geometryFlor = new THREE.TorusGeometry(0.8, 0.3, 16, 30);

    var meshFlorCenter = new THREE.Mesh(geometryFlor, materialRosa);
    meshFlorCenter.position.set(0, 9.8, 4.8);
    //calaveraGrupo03.add(meshFlorCenter);

    var meshFlorIzq = new THREE.Mesh(geometryFlor, materialAmarillo);
    meshFlorIzq.rotation.y = -Math.PI / 8;
    meshFlorIzq.position.set(-2.2, 9.3, 4.6);
    //calaveraGrupo03.add(meshFlorIzq);

    var meshFlorDer = new THREE.Mesh(geometryFlor, materialAmarillo);
    meshFlorDer.rotation.y = Math.PI / 8;
    meshFlorDer.position.set(2.2, 9.3, 4.6);
    //calaveraGrupo03.add(meshFlorDer);

    var meshPlaca = new THREE.Mesh(new THREE.PlaneGeometry(4.5, 1.2), materialRosa);
    meshPlaca.position.set(0, 11.2, 2.5);
    meshPlaca.rotation.x = -Math.PI / 4;
    //calaveraGrupo03.add(meshPlaca);


    const CALAVERA = new THREE.Group();
    CALAVERA.add(
        meshCabeza03, meshMandibula03, 
        meshOjoIzq03, meshIrisIzq, meshOjoDer03, meshIrisDer, 
        meshNariz03, meshBoca03, d1, d2, d3, d4, 
        meshFlorCenter, meshFlorIzq, meshFlorDer, meshPlaca
    );
    CALAVERA.position.set(x, y, z);

    return CALAVERA;
}