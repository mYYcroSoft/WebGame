import {objects} from './objectList.js'
import {materials} from './objectList.js'
import * as mesh from './ObjectRender.js'


addEventListener("keydown", (event) => {

    if(event.key === "g") {
        const object = objects['player']; 
        var visualData = object.visual;
        visualData.borderRadius = '50px';
        mesh.updateCSS('player'); 
    }
});
