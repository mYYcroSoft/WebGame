import {objects, materials} from './objectList.js'
const scene = document.getElementById('screen')

console.log(objects)
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
            renObj.style[property] = `50px`;
        } else {
           /* console.log(property + ' ' + visualData[property]);*/
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

export function getObjectSize(object){
    return [objects[object].visual.width, objects[object].visual.height]
}


export function getObjectsList(){
    return objects
}


export function updatePosition(object, x, y, render){
    let obj = getObject(object)
    obj.pos.x = x
    obj.pos.y = y
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


 export function updateCSS(object) {
    const renObj = document.getElementById(object);
    const dataObject = objects['player'];
    var visualData = dataObject.visual;
    console.log(visualData)
    for (let property in visualData) {
        /*console.log(property);*/
        if (property === 'color') {
            console.log(property);  
            if (renObj.style.backgroundColor != visualData[property]) {
                renObj.style.backgroundColor = visualData[property];
            }
        } else if(property === 'material'){ 
            const meshMaterial = materials[visualData[property]]
            if(renObj.style.backgroundImage != `url('${meshMaterial}')`){
                renObj.style.backgroundImage =  `url('${meshMaterial}')`;
                renObj.style.backgroundSize =  `100%`;
            } 
        } else {
            if(renObj.style[property] != visualData[property]){
                renObj.style[property] = visualData[property]
            }
        }
    }
}