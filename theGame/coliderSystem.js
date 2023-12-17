import { objects } from './objectList.js';
import { baseGround } from './movementSystem.js';
var coliders = []
let closestColiderInFront = undefined
let closestColiderBehind = undefined
let closestColiderAbove = undefined
let closestColiderBellow = undefined

for (let object in objects) {
    console.log("SDS");
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

function getSmallestInArrayByX(arr) {
    let returnValue = arr[0]
    for (let i in arr) {
        if (arr[i].pos.x < returnValue.pos.x) {
            returnValue = arr[i]
        }
    }
    return returnValue
}

function getBigestInArrayByX(arr) {
    let returnValue = arr[0]
    for (let i in arr) {
        if (arr[i].pos.x > returnValue.pos.x) {
            returnValue = arr[i]
        }
    }
    return returnValue
}

function getSmallestInArrayByY(arr) {
    let returnValue = ""
    if (typeof arr[0] === 'undefined') {
        returnValue = coliders["boundBottom"]
    } else {
        returnValue = arr[0]
    } 
    for (let i in arr) {
        if (!(typeof arr[i] === 'undefined')) {
            if (arr[i].pos.y < returnValue.pos.y) {
                returnValue = arr[i]
            }
        }
    }
    return returnValue
}

function getBigestInArrayByY(arr) {
    let returnValue = ""
    if (typeof arr[0] === 'undefined') {
        returnValue = coliders["boundTop"]
    } else {
        returnValue = arr[0]
    } 
    for (let i in arr) {
        if (!(typeof arr[i] === 'undefined')) {
            if (arr[i].pos.y > returnValue.pos.y) {
                returnValue = arr[i]
            }
        }
    }
    return returnValue
}

function checkPointInFrontOfPlayer(x, y) {
    for (let colider in coliders) {
        let coliderX = coliders[colider].pos.x
        let coliderY = coliders[colider].pos.y
        let coliderHeight = coliders[colider].visual.height
        let playerWidth = objects['player'].visual.width
        if((coliderY <= y && coliderY + coliderHeight >= y) && x + playerWidth < coliderX) {
            if(closestColiderInFront == undefined) {
                closestColiderInFront = coliders[colider]
            } else {
                if (coliderX < closestColiderInFront.pos.x) {
                    closestColiderInFront = coliders[colider]
                }
            }
        }
    }
    let returner = closestColiderInFront
    closestColiderInFront = undefined
    return returner
}

export function getClosestColiderInFrontOfPlayer(x, y) {
    let playerHeight = objects['player'].visual.height
    let colidersInRange = []
    for (let i = 0; i < playerHeight; i++) {
        if (!colidersInRange.includes(checkPointInFrontOfPlayer(x, y + i))) {
            colidersInRange.push(checkPointInFrontOfPlayer(x, y + i))
        }
    }
    return getSmallestInArrayByX(colidersInRange)
}

function checkPointBehindPlayer(x, y) {
    for (let colider in coliders) {
        let coliderX = coliders[colider].pos.x
        let coliderY = coliders[colider].pos.y
        let coliderHeight = coliders[colider].visual.height
        if((coliderY <= y && coliderY + coliderHeight >= y) && x > coliderX) {
            if(closestColiderBehind == undefined) {
                closestColiderBehind = coliders[colider]
            } else {
                if (coliderX > closestColiderBehind.pos.x) {
                    closestColiderBehind = coliders[colider]
                }
            }
        }
    }
    let returner = closestColiderBellow
    closestColiderBellow = undefined
    return returner
}

export function getClosestColiderBehindPlayer(x, y) {
    let playerHeight = objects['player'].visual.height
    let colidersInRange = []
    for (let i = 0; i < playerHeight; i++) {
        if (!colidersInRange.includes(checkPointBehindPlayer(x, y + i))) {
            colidersInRange.push(checkPointBehindPlayer(x, y + i))
        }
    }
    return getBigestInArrayByX(colidersInRange)
}

function checkPointAbovePlayer(x, y) {
    for (let colider in coliders) {
        let coliderX = coliders[colider].pos.x
        let coliderY = coliders[colider].pos.y
        let coliderWidth = coliders[colider].visual.width
        if((coliderX <= x && coliderX + coliderWidth >= x) && y >= coliderY) {
            if(closestColiderAbove == undefined) {
                closestColiderAbove = coliders["boundTop"]
            } else {
                if (coliderY > closestColiderAbove.pos.y) {
                    closestColiderAbove = coliders[colider]
                }
            }
        }
    }
    let returner = closestColiderAbove
    closestColiderAbove = undefined
    return returner
}

export function getClosestColiderAbovePlayer(x, y) {
    let playerWidth = objects['player'].visual.width
    let colidersInRange = [checkPointAbovePlayer(x, y)]
    for (let i = 0; i < playerWidth; i++) {
        if (!colidersInRange.includes(checkPointAbovePlayer(x + i, y))) {
            colidersInRange.push(checkPointAbovePlayer(x + i, y))
        }
    }
    return getBigestInArrayByY(colidersInRange)
}

function checkPointBellowPlayer(x, y) {
    for (let colider in coliders) {
        let coliderX = coliders[colider].pos.x
        let coliderY = coliders[colider].pos.y
        let coliderWidth = coliders[colider].visual.width
        let playerHeight = objects['player'].visual.height
        if((coliderX <= x && coliderX + coliderWidth >= x) && y + playerHeight <= coliderY) {
            if(closestColiderBellow == undefined) {
                closestColiderBellow = coliders["boundBottom"]
            } else {
                if (coliderY < closestColiderBellow.pos.y) {
                    closestColiderBellow = coliders[colider]
                }
            }
        } 
    }
    let returner = closestColiderBellow
    closestColiderBellow = undefined
    return returner
}

export function getClosestColiderBellowPlayer(x, y) {
    let playerWidth = objects['player'].visual.width
    let colidersInRange = [checkPointBellowPlayer(x, y)]
    for (let i = 0; i < playerWidth; i++) {
        if (!colidersInRange.includes(checkPointBellowPlayer(x + i, y))) {
            colidersInRange.push(checkPointBellowPlayer(x + i, y))
        }
    }
    return getSmallestInArrayByY(colidersInRange)
}




//console.log(getClosestColiderInFrontOfPlayer(425, 375));
//console.log(getClosestColiderBehindPlayer(825, 375))
//console.log(getClosestColiderAbovePlayer(625, 475))
//console.log(getClosestColiderBellowPlayer(625, 75))