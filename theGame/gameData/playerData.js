

export var playerGlobalData = {
    selectedScene: '',
}

export function changePlayerScene(scene){
    playerGlobalData.selectedScene = scene
    return true
}