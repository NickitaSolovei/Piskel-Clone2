function drawFromCanvas(frame) {
    const canvas = document.getElementById('canvas-animation');

    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const frameImg = frame.querySelector('.img-frame-left');
        ctx.drawImage(frameImg, 0, 0, 160, 160);
    }
}

export {drawFromCanvas};
