const scene = document.getElementById('screen')


let materials = {
    'dirt': './materials/dirt.jpg', 
}
let objects = {
    player: {
        data: {},
        type: 'controller',
        canColide: false,
        colider: false,
        pos: {x: 15, y: 35, cal: 'px'},
        cal: 'px',
        visual: {
            position: 'relative',
            width: 50,
            height: 50,
            color: '#fff',
            material: 'dirt',
            borderRadius: '10px',
        }
    },
    floor: {
        data: {},
        type: 'colider',
        canColide: false,
        colider: true,
        pos: {x: 0, y: 150, cal: 'px'},
        cal: '%',
        visual: {
            position: 'absolute',
            width: 100,
            height: 5,
            color: '#fff',
          /*  material: null,*/    
            borderRadius: '10px',
        }
    },

 
};
function redner_object(object){
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

function getObjArray(object){
    return objects[object]
}

function updatePosition(object, x, y, render){
    let obj = getObjArray(object)
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



document.addEventListener('keydown', function(event) {
    if(event.key == 'd'){
        updatePosition('player', 1, 0, true)
    }
    if(event.key == 'a'){
        updatePosition('player', -1, 0, true)
    }
    if(event.key == 'w'){
        updatePosition('player', 0, -1, true)
    }
    if(event.key == 's'){

        updatePosition('player', 0, +1, true)
    }    
     })
    


redner_object('player')
redner_object('floor')
