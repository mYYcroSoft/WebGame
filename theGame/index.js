const scene = document.getElementById('screen')


let materials = {
    'dirt': './materials/dirt.jpg', 
}
let objects = {
    player: {
        pos: [15, 15],
        data: {},
        type: 'controller',
        canColide: false,
        pos: {x: 25, y: 25},
        visual: {
            width: 25,
            height: 25,
            text_color: '#000',
            color: '#fff',
            material: 'dirt',
        }
    },
 
};


function redner_object(object){
    const obj = objects[object]
    let visualData = obj.visual
    $('#screen').append(
        `
        <canvas id="${object}" width="${visualData.width}" height="${visualData.height}"></canvas>
        `
    )
    let renObj = document.getElementById(object)
    for (let property in visualData) {
        if(property == 'color'){
            renObj.style.backgroundColor = visualData[property];
        } else if (property == 'material') {
            let materialUrl = materials[property]
       /* renObj.style.backgroundImage = url('./materials/dirt.jpg');*/
           
        } else {
            renObj.style[property] = visualData[property];
        }
     
    }

}

redner_object('player')

document.addEventListener('keydown', function(event) {
    if(event.key == 'd'){
        player_pos[0] += 10
        update_player_pos()
    }
    if(event.key == 'a'){
        player_pos[0] -= 10
        update_player_pos()
    }
    if(event.key == 'w'){
        player_pos[1] -= 10
        update_player_pos()
    }
    if(event.key == 's'){
        player_pos[1] += 10
        update_player_pos()
    }

    
     })
    
    function update_player_pos(){
        console.log(player_pos); 
        document.getElementById("player").style.left = `${player_pos[0]}px`
        document.getElementById("player").style.top = `${player_pos[1]}px`
    }


    function checkCollides(){

    }