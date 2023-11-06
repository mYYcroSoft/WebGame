import * as mesh from './ObjectRender.js'
import { objects } from './objectList.js'
import * as scene from './gameData/scenes/sceneRender.js'

scene.setScene('scene_1')

for(let object in objects){
    mesh.redner_object(object)
}

