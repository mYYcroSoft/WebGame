import * as mesh from './ObjectRender.js'
import { objects } from './objectList.js'
import * as scene from './gameData/scenes/sceneRender.js'
import {scenesDataList} from './gameData/scenes/sceneRegister.js'




for(let scene in scenesDataList){   
    console.log(scenesDataList[scene])

    $('#sceneList').append(
        `
        <div class="sceneBox" data-scene="${scene}">
            <h2>${scenesDataList[scene].title}</h2>
            <span>Id: ${scenesDataList[scene].id}</span>
        </div> <br>
        `
    );
}
