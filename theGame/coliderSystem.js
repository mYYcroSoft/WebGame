import * as mesh from './ObjectRender.js'
import { objects } from './objectList.js';
var coliders = {}

console.log(objects)
objects.forEach(object => {
    console.log("COLIDER")
    console.log(object.colider );
});