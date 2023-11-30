export let materials = {
    'dirt': './materials/dirt.jpg', 
}
export const objects = {

};

for (x in objects){
    console.log(x);
}

export function addRenderobject(obj,sceneObject){
    objects[obj] = sceneObject
    
}

