import data from "./data"
import * as THREE from "three"
const PATHS = data.economics[0].paths
let brainCurves = []

PATHS.forEach(path => {
    let points = [];
    for (let i = 0 ; i< path.length ; i+=3){
        points.push(new THREE.Vector3(path[i], path[i+1], path[i+2]))
    }
    let tempcurve = new THREE.CatmullRomCurve3(points)
    brainCurves.push(tempcurve)
}
)
export default brainCurves;