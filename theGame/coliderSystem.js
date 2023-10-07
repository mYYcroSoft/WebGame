import { objects } from './objectList.js';
import { baseGround } from './controler.js';
var coliders = []

for (let object in objects) {
    if (objects[object].colider) {
        coliders[object] = objects[object]
    }  
}

export function getColiderBellowByX(x, y) {
    for (let colider in coliders) {
        let coliderX = coliders[colider].pos.x
        let coliderY = coliders[colider].pos.y
        let coliderWidth = coliders[colider].visual.width
        let playerHeight = objects['player'].visual.height
        if ((x > coliderX && x < coliderX + coliderWidth) && (y + playerHeight <= coliderY)) {
            return coliders[colider].pos.y - playerHeight
        }
    }
}

export function getColidersBellowByX(x, y) {
    return Math.min(getColiderBellowByX(x, y) ?? baseGround, getColiderBellowByX(x + objects['player'].visual.width, y) ?? baseGround)
}

export function getColiderAboveByX(x, y) {
    for (let colider in coliders) {
        let coliderX = coliders[colider].pos.x
        let coliderY = coliders[colider].pos.y
        let coliderWidth = coliders[colider].visual.width
        let coliderHeight = coliders[colider].visual.height
        let playerHeight = objects['player'].visual.height
        if ((x > coliderX && x < coliderX + coliderWidth) && (y + playerHeight >= coliderY)) {
            return coliders[colider].pos.y + coliderHeight
        }
    }
}

export function getColidersAboveByX(x, y) {
    return Math.max(getColiderAboveByX(x, y) ?? 0, getColiderAboveByX(x + objects['player'].visual.width, y) ?? 0)
}