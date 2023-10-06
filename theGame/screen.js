function adjustDivSize() {
    const centeredDiv = document.getElementById("screen");
    /*const text = document.getElementById("text");*/
    const aspectRatio = 16 / 9; // Desired aspect ratio (4:3)

    // Calculate the maximum width based on the viewport width, height, and aspect ratio
    const maxWidth = Math.min(window.innerWidth, window.innerHeight * aspectRatio);

    // Set the div's width and height
    centeredDiv.style.width = `${maxWidth}px`;
    centeredDiv.style.height = `${maxWidth / aspectRatio}px`;
    text.style.fontSize = `${maxWidth / aspectRatio / 34}px`;

    inputField.style.width = `${maxWidth-8}px`;
    inputField.style.height = `${maxWidth / aspectRatio-6}px`;

}

// Call the adjustDivSize function initially and on window resize


window.addEventListener("resize", adjustDivSize);
adjustDivSize();