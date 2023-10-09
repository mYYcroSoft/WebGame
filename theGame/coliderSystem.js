import { objects } from './objectList.js';
import { baseGround } from './movementSystem.js';
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
            return [coliderY - playerHeight, colider]
        }
    }
}

export function getColidersBellowByX(x, y) {
    let Point1 = getColiderBellowByX(x, y) ?? [baseGround, 'void']
    let Point2 = getColiderBellowByX(x + objects['player'].visual.width, y) ?? [baseGround, 'void']

    if (Point1[0] > Point2[0]) {
        return Point2
    } else {
        return Point1
    }
}

export function getColiderAboveByX(x, y) {
    for (let colider in coliders) {
        let coliderX = coliders[colider].pos.x
        let coliderY = coliders[colider].pos.y
        let coliderWidth = coliders[colider].visual.width
        let coliderHeight = coliders[colider].visual.height
        if ((x > coliderX && x < coliderX + coliderWidth) && (y >= coliderY)) {
            return [coliderY + coliderHeight, colider]
        }
    }
}

export function getColidersAboveByX(x, y) {
    let Point1 = getColiderAboveByX(x, y) ?? [0, 'void']
    let Point2 = getColiderAboveByX(x + objects['player'].visual.width, y) ?? [0, 'void']

    if (Point1[0] < Point2[0]) {
        return Point2
    } else {
        return Point1
    }
}

export function getColiderToRightByY(x, y) {
    for (let colider in coliders) {
        let coliderX = coliders[colider].pos.x
        let coliderY = coliders[colider].pos.y
        let coliderHeight = coliders[colider].visual.height
        let playerWidth = objects['player'].visual.width
        if ((y >= coliderY && y <= coliderY + coliderHeight) && (x + playerWidth <= coliderX)) {
            return [coliderX - playerWidth, colider]
        }
    }
}

export function getColidersToRightByY(x, y) {
    let Point1 = getColiderToRightByY(x, y) ?? [900, 'void']
    let Point2 = getColiderToRightByY(x, y + objects['player'].visual.height) ?? [900, 'void']

    if (Point1[0] > Point2[0]) {
        return Point2
    } else {
        return Point1
    }
}

export function getColiderToLeftByY(x, y) {
    for (let colider in coliders) {
        let coliderX = coliders[colider].pos.x
        let coliderY = coliders[colider].pos.y
        let coliderHeight = coliders[colider].visual.height
        let coliderWidth = coliders[colider].visual.width
        if ((y >= coliderY && y <= coliderY + coliderHeight) && (x >= coliderX + coliderWidth)) {
            return [coliderX + coliderWidth, colider]
        }
    }
}

export function getColidersToLeftByY(x, y) {
    let Point1 = getColiderToLeftByY(x, y) ?? [0, 'void']
    let Point2 = getColiderToLeftByY(x, y + objects['player'].visual.height) ?? [0, 'void']

    if (Point1[0] < Point2[0]) {
        return Point2
    } else {
        return Point1
    }
}