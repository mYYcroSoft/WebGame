export let registeredKeys = {}

addEventListener("keydown", (event) => {
    for (let key in registeredKeys) {
        if (event.key === key || event.key === String.prototype.toUpperCase(key)) {
            registeredKeys[key] = true
        }
    }
});

addEventListener("keyup", (event) => {
    for (let key in registeredKeys) {
        if (event.key === key || event.key === String.prototype.toUpperCase(key)) {
            registeredKeys[key] = false
        }
    }
});

function addKey(key) {
    registeredKeys[key] = false
}

addKey("a")
addKey("d")
addKey("w")