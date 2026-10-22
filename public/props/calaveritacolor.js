import * as THREE from "../js/three.module.js";

export default function GD1 ({x, y, z}) {
    const calavera = new THREE.Group();

    // CRÁNEO PRINCIPAL
    var craneoGeo = new THREE.SphereGeometry(5, 32, 32);
    var craneoMat = new THREE.MeshLambertMaterial({color: 0x4b2415});
    var craneo = new THREE.Mesh(craneoGeo, craneoMat);
    craneo.position.set(0, 2, 0);
    craneo.scale.set(1, 1.1, 0.7);
    craneo.castShadow = true;
    //calavera.add(craneo);

    // MEJILLA IZQUIERDA
    var mejillaIzqGeo = new THREE.SphereGeometry(1.6, 24, 24);
    var mejillaIzqMat = new THREE.MeshLambertMaterial({color: 0x5c2d1e});
    var mejillaIzq = new THREE.Mesh(mejillaIzqGeo, mejillaIzqMat);
    mejillaIzq.position.set(-2.7, -1, 0.8);
    mejillaIzq.scale.set(0.8, 0.9, 0.6);
    mejillaIzq.castShadow = true;
    //calavera.add(mejillaIzq);

    // MEJILLA DERECHA
    var mejillaDerGeo = new THREE.SphereGeometry(1.6, 24, 24);
    var mejillaDerMat = new THREE.MeshLambertMaterial({color: 0x5c2d1e});
    var mejillaDer = new THREE.Mesh(mejillaDerGeo, mejillaDerMat);
    mejillaDer.position.set(2.7, -1, 0.8);
    mejillaDer.scale.set(0.8, 0.9, 0.6);
    mejillaDer.castShadow = true;
    //calavera.add(mejillaDer);

    // MANDÍBULA
    var mandibulaGeo = new THREE.BoxGeometry(4.8, 1.3, 1.5);
    var mandibulaMat = new THREE.MeshLambertMaterial({color: 0x4b2415});
    var mandibula = new THREE.Mesh(mandibulaGeo, mandibulaMat);
    mandibula.position.set(0, -2.8, 1.1);
    mandibula.castShadow = true;
    //calavera.add(mandibula);

    // OJO IZQUIERDO
    var ojoIzqGeo = new THREE.SphereGeometry(1.25, 24, 24);
    var ojoIzqMat = new THREE.MeshLambertMaterial({color: 0x1b0b08});
    var ojoIzq = new THREE.Mesh(ojoIzqGeo, ojoIzqMat);
    ojoIzq.position.set(-2, 2.5, 3);
    ojoIzq.scale.set(1, 1.1, 0.4);
    //calavera.add(ojoIzq);

    // OJO DERECHO
    var ojoDerGeo = new THREE.SphereGeometry(1.25, 24, 24);
    var ojoDerMat = new THREE.MeshLambertMaterial({color: 0x1b0b08});
    var ojoDer = new THREE.Mesh(ojoDerGeo, ojoDerMat);
    ojoDer.position.set(2, 2.5, 3);
    ojoDer.scale.set(1, 1.1, 0.4);
    //calavera.add(ojoDer);

    // BRILLO AMARILLO IZQUIERDO
    var brilloIzqGeo = new THREE.SphereGeometry(0.3, 16, 16);
    var brilloIzqMat = new THREE.MeshLambertMaterial({color: 0xffd700});
    var brilloIzq = new THREE.Mesh(brilloIzqGeo, brilloIzqMat);
    brilloIzq.position.set(-2, 2.5, 3.5);
    //calavera.add(brilloIzq);

    // BRILLO AMARILLO DERECHO
    var brilloDerGeo = new THREE.SphereGeometry(0.3, 16, 16);
    var brilloDerMat = new THREE.MeshLambertMaterial({color: 0xffd700});
    var brilloDer = new THREE.Mesh(brilloDerGeo, brilloDerMat);
    brilloDer.position.set(2, 2.5, 3.5);
    //calavera.add(brilloDer);

    // NARIZ
    var narizGeo = new THREE.ConeGeometry(0.6, 1, 3);
    var narizMat = new THREE.MeshLambertMaterial({color: 0x1b0b08});
    var nariz = new THREE.Mesh(narizGeo, narizMat);
    nariz.position.set(0, 0.5, 3.1);
    nariz.rotation.set(Math.PI, 0, 0);
    //calavera.add(nariz);

    // BOCA
    var bocaGeo = new THREE.BoxGeometry(3.5, 0.6, 0.5);
    var bocaMat = new THREE.MeshLambertMaterial({color: 0x1b0b08});
    var boca = new THREE.Mesh(bocaGeo, bocaMat);
    boca.position.set(0, -2.1, 2.2);
    //calavera.add(boca);

    // DIENTE 1
    var diente1Geo = new THREE.BoxGeometry(0.45, 0.8, 0.5);
    var diente1Mat = new THREE.MeshLambertMaterial({color: 0xfff0d5});
    var diente1 = new THREE.Mesh(diente1Geo, diente1Mat);
    diente1.position.set(-1.35, -2.1, 2.5);
    //calavera.add(diente1);

    // DIENTE 2
    var diente2Geo = new THREE.BoxGeometry(0.45, 0.8, 0.5);
    var diente2Mat = new THREE.MeshLambertMaterial({color: 0xfff0d5});
    var diente2 = new THREE.Mesh(diente2Geo, diente2Mat);
    diente2.position.set(-0.9, -2.1, 2.5);
    //calavera.add(diente2);

    // DIENTE 3
    var diente3Geo = new THREE.BoxGeometry(0.45, 0.8, 0.5);
    var diente3Mat = new THREE.MeshLambertMaterial({color: 0xfff0d5});
    var diente3 = new THREE.Mesh(diente3Geo, diente3Mat);
    diente3.position.set(-0.45, -2.1, 2.5);
    //calavera.add(diente3);

    // DIENTE 4
    var diente4Geo = new THREE.BoxGeometry(0.45, 0.8, 0.5);
    var diente4Mat = new THREE.MeshLambertMaterial({color: 0xfff0d5});
    var diente4 = new THREE.Mesh(diente4Geo, diente4Mat);
    diente4.position.set(0, -2.1, 2.5);
    //calavera.add(diente4);

    // DIENTE 5
    var diente5Geo = new THREE.BoxGeometry(0.45, 0.8, 0.5);
    var diente5Mat = new THREE.MeshLambertMaterial({color: 0xfff0d5});
    var diente5 = new THREE.Mesh(diente5Geo, diente5Mat);
    diente5.position.set(0.45, -2.1, 2.5);
    //calavera.add(diente5);

    // DIENTE 6
    var diente6Geo = new THREE.BoxGeometry(0.45, 0.8, 0.5);
    var diente6Mat = new THREE.MeshLambertMaterial({color: 0xfff0d5});
    var diente6 = new THREE.Mesh(diente6Geo, diente6Mat);
    diente6.position.set(0.9, -2.1, 2.5);
    //calavera.add(diente6);

    // DIENTE 7
    var diente7Geo = new THREE.BoxGeometry(0.45, 0.8, 0.5);
    var diente7Mat = new THREE.MeshLambertMaterial({color: 0xfff0d5});
    var diente7 = new THREE.Mesh(diente7Geo, diente7Mat);
    diente7.position.set(1.35, -2.1, 2.5);
    //calavera.add(diente7);

    // FLOR IZQUIERDA
    var florIzqGeo = new THREE.TorusGeometry(1.65, 0.18, 8, 32);
    var florIzqMat = new THREE.MeshLambertMaterial({color: 0xff69b4});
    var florIzq = new THREE.Mesh(florIzqGeo, florIzqMat);
    florIzq.position.set(-2, 2.5, 3.2);
    //calavera.add(florIzq);

    // CENTRO DE FLOR IZQUIERDA
    var centroIzqGeo = new THREE.SphereGeometry(0.35, 16, 16);
    var centroIzqMat = new THREE.MeshLambertMaterial({color: 0xffd700});
    var centroIzq = new THREE.Mesh(centroIzqGeo, centroIzqMat);
    centroIzq.position.set(-2, 2.5, 3.5);
    //calavera.add(centroIzq);

    // FLOR DERECHA
    var florDerGeo = new THREE.TorusGeometry(1.65, 0.18, 8, 32);
    var florDerMat = new THREE.MeshLambertMaterial({color: 0x87cefa});
    var florDer = new THREE.Mesh(florDerGeo, florDerMat);
    florDer.position.set(2, 2.5, 3.2);
    //calavera.add(florDer);

    // CENTRO DE FLOR DERECHA
    var centroDerGeo = new THREE.SphereGeometry(0.35, 16, 16);
    var centroDerMat = new THREE.MeshLambertMaterial({color: 0xffd700});
    var centroDer = new THREE.Mesh(centroDerGeo, centroDerMat);
    centroDer.position.set(2, 2.5, 3.5);
    //calavera.add(centroDer);

    // ADORNO DE LA FRENTE
    var adornoFrenteGeo = new THREE.SphereGeometry(0.45, 16, 16);
    var adornoFrenteMat = new THREE.MeshLambertMaterial({color: 0xff69b4});
    var adornoFrente = new THREE.Mesh(adornoFrenteGeo, adornoFrenteMat);
    adornoFrente.position.set(0, 4.7, 2.1);
    //calavera.add(adornoFrente);

    // PUNTO DECORATIVO IZQUIERDO 1
    var puntoIzq1Geo = new THREE.SphereGeometry(0.18, 12, 12);
    var puntoIzq1Mat = new THREE.MeshLambertMaterial({color: 0xffff00});
    var puntoIzq1 = new THREE.Mesh(puntoIzq1Geo, puntoIzq1Mat);
    puntoIzq1.position.set(-3.3, 0.5, 2.3);
    //calavera.add(puntoIzq1);

    // PUNTO DECORATIVO IZQUIERDO 2
    var puntoIzq2Geo = new THREE.SphereGeometry(0.18, 12, 12);
    var puntoIzq2Mat = new THREE.MeshLambertMaterial({color: 0x87cefa});
    var puntoIzq2 = new THREE.Mesh(puntoIzq2Geo, puntoIzq2Mat);
    puntoIzq2.position.set(-3.5, 0, 2.1);
    //calavera.add(puntoIzq2);

    // PUNTO DECORATIVO DERECHO 1
    var puntoDer1Geo = new THREE.SphereGeometry(0.18, 12, 12);
    var puntoDer1Mat = new THREE.MeshLambertMaterial({color: 0xffff00});
    var puntoDer1 = new THREE.Mesh(puntoDer1Geo, puntoDer1Mat);
    puntoDer1.position.set(3.3, 0.5, 2.3);
    //calavera.add(puntoDer1);

    // PUNTO DECORATIVO DERECHO 2
    var puntoDer2Geo = new THREE.SphereGeometry(0.18, 12, 12);
    var puntoDer2Mat = new THREE.MeshLambertMaterial({color: 0x87cefa});
    var puntoDer2 = new THREE.Mesh(puntoDer2Geo, puntoDer2Mat);
    puntoDer2.position.set(3.5, 0, 2.1);
    //calavera.add(puntoDer2);


    const dulces = new THREE.Group();
    dulces.add(
        craneo, mejillaIzq, mejillaDer, mandibula, 
        ojoIzq, ojoDer, brilloIzq, brilloDer, nariz, boca, 
        diente1, diente2, diente3, diente4, diente5, diente6, diente7, 
        florIzq, centroIzq, florDer, centroDer, adornoFrente, 
        puntoIzq1, puntoIzq2, puntoDer1, puntoDer2
    );
    dulces.position.set(x, y, z);

    return dulces;
}