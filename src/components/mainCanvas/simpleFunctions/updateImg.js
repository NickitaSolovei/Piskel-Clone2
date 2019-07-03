

function updateImg(canvas) {
    const imageCopy = document.querySelector('.selected');
    // draw from canvas to <img>
    imageCopy.src = canvas.toDataURL();
}

export { updateImg };
