import { updatePosition } from "./ObjectRender.js"
import { getColidersToRightByY, getColidersToLeftByY, getColidersAboveByX, getColidersBellowByX } from "./coliderSystem.js"
import { registeredKeys } from "./keyRegister.js"

//set up variables
export let playerPos = [/*x , y*/ 0, 0]
let currentGravity = 0
let movementSpeed = 0

export const baseGround = 600
let onGround = false
let lastColiderBellow = []

//modifiers
let jumpForce = 20
let groundFriction = 1
let airFriction = 0.05
let movementIntensity = 1.8
let maxMovementSpeed = 8

let maxGravity = 10
let gravityIntensity = 0.2


export function update_playerPos(){
    updatePosition('player', playerPos[0], playerPos[1], true);
}

export function apply_friction() {
    if (movementSpeed > 0) {
        if (onGround) {
            movementSpeed = Math.max(0, movementSpeed - groundFriction)
        } else {
            movementSpeed = Math.max(0, movementSpeed - airFriction)
        }
    }
    if (movementSpeed < 0) {
        if (onGround) {
            movementSpeed = Math.min(0, movementSpeed + groundFriction)
        } else {
            movementSpeed = Math.min(0, movementSpeed + airFriction)
        }
    }
}

export function apply_movement() {
    let ColiderToLeft = getColidersToRightByY(playerPos[0], playerPos[1]);
    let ColiderToRight = getColidersToLeftByY(playerPos[0], playerPos[1]);
    if (registeredKeys.a && onGround && movementSpeed > -maxMovementSpeed + 1) {
        movementSpeed -= movementIntensity
    }
    if (registeredKeys.d && onGround && movementSpeed < maxMovementSpeed - 1) {
        movementSpeed += movementIntensity
    }
    if (registeredKeys.w && onGround) {
        currentGravity -= jumpForce + Math.abs(movementSpeed / 10)
        onGround = false
    }
    if (playerPos[0] + movementSpeed > ColiderToLeft[0]) {
        playerPos[0] = ColiderToLeft[0]
        movementSpeed = 0
        console.warn("hit " + ColiderToLeft[1] + " from left")
    } else if (playerPos[0] + movementSpeed < ColiderToRight[0]) {
        playerPos[0] = ColiderToRight[0]
        movementSpeed = 0
        console.warn("hit " + ColiderToRight[1] + " from right")
    }
    playerPos[0] += movementSpeed
    update_playerPos()
}

export function apply_gravity() {
    let ColiderAbove = getColidersAboveByX(playerPos[0], playerPos[1])
    let ColiderBellow = getColidersBellowByX(playerPos[0], playerPos[1])
    if (playerPos[1] < ColiderBellow[0] || currentGravity <= 0) {
        if (ColiderAbove[0] > playerPos[1] + currentGravity) {
            console.warn("hit " + ColiderAbove[1] + " from above")
            currentGravity = 0
        } else {
            lastColiderBellow = ColiderBellow
            playerPos[1] = Math.min(ColiderBellow[0], playerPos[1] + currentGravity)
            if (currentGravity < maxGravity) {
                currentGravity = Math.min(maxGravity, currentGravity + gravityIntensity)
            }
        }
        onGround = false
        update_playerPos()
    } else {
        console.warn("hit " + lastColiderBellow[1] + " from bellow")
        onGround = true
        currentGravity = maxGravity
    } 
}

setInterval(apply_gravity, 1000/60)
setInterval(apply_movement, 1000/60)
setInterval(apply_friction, 1000/60)