import * as THREE from "../js/three.module.js";

export default function GD1 ({x, y, z}) {
// Dulce tipo gomita cuadrada
var geometryGomita = new RoundedBoxGeometry(3, 3, 3, 4, 0.5); // (ancho, alto, profundidad, segmentos, radio de redondeo)
var materialDulce = new THREE.MeshLambertMaterial({color: 0xff3366});
var gomita = new THREE.Mesh(geometryGomita, materialDulce);
//scene.add(gomita);
gomita.position.set(0, 5, 0);

// Caramelo redondo
var geometryCaramelo = new THREE.SphereGeometry(2, 32, 32);
var materialCaramelo = new THREE.MeshLambertMaterial({color: 0xffcc00});
var caramelo = new THREE.Mesh(geometryCaramelo, materialCaramelo);
caramelo.position.set(-8, 5, 0);
//scene.add(caramelo);

var geometryPalito = new THREE.CylinderGeometry(0.15, 0.15, 5, 16);
var materialPalito = new THREE.MeshLambertMaterial({color: 0xffffff});
var palito = new THREE.Mesh(geometryPalito, materialPalito);
palito.position.set(-8, 2, 0);
//scene.add(palito);


    const dulces = new THREE.Group();
    dulces.add(gomita,palito,caramelo);
    dulces.position.set(x, y, z);

    return dulces;
}