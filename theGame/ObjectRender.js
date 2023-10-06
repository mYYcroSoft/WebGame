import {objects, materials} from './objectList.js'

const scene = document.getElementById('screen')


export function redner_object(object){
    const obj = objects[object]
    let visualData = obj.visual
    $('#screen').append(
        `
        <canvas id="${object}"></canvas>
        `
    );
    let renObj = document.getElementById(object)
    renObj.style.top = `${obj.pos.y}${obj.pos.cal}`
    renObj.style.left = `${obj.pos.x}${obj.pos.cal}`
    for (let property in visualData) {
        if(property == 'color'){
            renObj.style.backgroundColor = visualData[property];
        } else if (property == 'material') {
            const meshMaterialName = visualData[property]
            const meshMaterial = materials[meshMaterialName]
            renObj.style.backgroundImage =  `url('${meshMaterial}')`;
            renObj.style.backgroundSize =  `100%`;
        } else if (property == 'width'){
            renObj.style[property] = `${visualData[property]}${obj.cal}`;
        } else if (property == 'height'){
            renObj.style[property] = `${visualData[property]}${obj.cal}`;
        } else {
            console.log(property + ' ' + visualData[property]);
            renObj.style[property] = visualData[property];
        } 
     
    }
}

export function getObject(object){
    return objects[object]
}

export function getOjbectPosition(object){
    return objects[object].pos
}

export function getObjectsList(){
    return objects
}

export function updatePosition(object, x, y, render){
    let obj = getObject(object)
    obj.pos.x += x
    obj.pos.y += y
    if(render == true ){      
        const renObj = document.getElementById(object)
        if(obj.pos.x + obj.pos.cal != renObj.style.left){
            renObj.style.left = obj.pos.x + obj.pos.cal
        }
        if(renObj.style.y != obj.pos.y + obj.pos.cal){
            renObj.style.top = obj.pos.y + obj.pos.cal
        }
    }
 }

