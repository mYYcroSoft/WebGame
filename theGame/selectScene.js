import {scenesDataList} from './gameData/scenes/sceneRegister.js'
import * as sceneLoader from './gameData/scenes/sceneRender.js'
import * as mesh from './ObjectRender.js'
import { objects } from './objectList.js'
const sceneBoxes = document.getElementsByClassName('sceneBox');

for (const box of sceneBoxes) {
  box.addEventListener('click', function(e) {
    var target = e.target
    var sceneId = target.getAttribute('data-scene')
    sceneLoader.setScene(sceneId)
    document.getElementById('container').style.display = 'none'


        for(let object in objects){
            mesh.redner_object(object)
        }
  });
}