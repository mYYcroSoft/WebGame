import * as mesh from './ObjectRender.js'
import { objects } from './objectList.js'

for (let object in objects) {
    mesh.redner_object(object)
}

