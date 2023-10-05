
//set up variables
let playerPos = [/*x , y*/ 0,0]
let currentGravity = 0
let onGround = false
let movementSpeed = 0

//modifiers
let maxGravity = 10
let gravityIntensity = 0.2
let jumpForce = 20
let groundFriction = 1
let airFriction = 0.05
let baseGround = 400
let movementIntensity = 1.8
let maxMovementSpeed = 8

let keys = {
    a: false,
    d: false,
    w: false
};

addEventListener("keydown", (event) => {
    if (event.key === "a" || event.key === "A") {
        keys.a = true
    }
    if (event.key === "d" || event.key === "D") {
        keys.d = true
    }
    if (event.key === "w" || event.key === "W") {
        keys.w = true
    }
});

addEventListener("keyup", (event) => {
    if (event.key === "a" || event.key === "A") {
        keys.a = false
    }
    if (event.key === "d" || event.key === "D") {
        keys.d = false
    }
    if (event.key === "w" || event.key === "W") {
        keys.w = false
    }
});

function apply_gravity() {
    if (playerPos[1] < baseGround || currentGravity < 0) {
        onGround = false

        playerPos[1] = Math.min(baseGround, playerPos[1] + currentGravity)
        
        if (currentGravity < maxGravity) {
            currentGravity = Math.min(maxGravity, currentGravity + gravityIntensity)
        }
        update_playerPos()
    } else {
        onGround = true
        currentGravity = maxGravity
    }  
}

function apply_movement() {
    console.log(currentGravity);
    if (keys.a && onGround && movementSpeed > -maxMovementSpeed + 1) {
        movementSpeed -= movementIntensity
    }
    if (keys.d && onGround && movementSpeed < maxMovementSpeed - 1) {
        movementSpeed += movementIntensity
    }
    if (keys.w && onGround) {
        currentGravity -= jumpForce + Math.abs(movementSpeed / 10)
        onGround = false
    }
    playerPos[0] += movementSpeed
    update_playerPos()
}

function apply_friction() {
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

function update_playerPos(){
    document.getElementById("player").style.left = `${playerPos[0]}px`
    document.getElementById("player").style.top = `${playerPos[1]}px`
}

setInterval(apply_gravity, 1000/60)
setInterval(apply_movement, 1000/60)
setInterval(apply_friction, 1000/60)
