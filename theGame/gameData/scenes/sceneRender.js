import {sceneObjectRegister} from './sceneObjectRegister.js';
import {scenesDataList} from './sceneRegister.js';
import {objects} from '../../objectList.js';
import * as objectRenderList from '../../objectList.js';

var sceneId = 'scene_1'

export function setScene(scene){
   sceneId = scene
   importSceneDataToRenderer()
}


/* Object Import to object render */
function importSceneDataToRenderer(){
   for(let obj in scenesDataList[sceneId].objects){
      var sceneObject = sceneObjectRegister[obj]
      sceneObject.pos = scenesDataList[sceneId].objects[obj]
      objects[obj] = sceneObject
      objectRenderList.addRenderobject(obj, sceneObject)
   
   
   }
   
}


