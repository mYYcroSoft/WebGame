let player_pos = [/*x , y*/ 0,0]
let platformY = document.getElementById('platform').style.tops

let  Objects = [
    'player' =  {

    }
]

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