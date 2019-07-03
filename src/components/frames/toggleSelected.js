

function moveImgToMainCanvas(realWidthCanvas) {
    // clear canvas
    const canvasMain = document.getElementById('canvasMain');
    const ctx = canvasMain.getContext('2d');
    ctx.clearRect(0, 0, canvasMain.width, canvasMain.height);

    const selectedButton = document.querySelector('.selected');
    ctx.drawImage(selectedButton, 0, 0, realWidthCanvas, realWidthCanvas);
}

function toggleSelected(button, realWidthCanvas) {
    const selectedButton = button;
    return () => {
        if (!selectedButton.classList.contains('selected')) {
            const oldSelected = document.querySelector('.selected');
            oldSelected.classList.remove('selected');
            selectedButton.classList.add('selected');

            moveImgToMainCanvas(realWidthCanvas);
        }
    };
}

export { toggleSelected };
