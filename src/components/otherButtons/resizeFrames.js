/* eslint-disable no-plusplus */


function resizeFrames(objData) {
    function resizeAllImgs(oldWidthFrame) {
        // create a new canvas
        const newCanvas = document.createElement('canvas');
        const newContext = newCanvas.getContext('2d');

        // set dimensions
        newCanvas.width = objData.canvasMain.width;
        newCanvas.height = objData.canvasMain.height;

        const x = objData.realWidthCanvas * (oldWidthFrame / objData.widthFrame);
        const imagesLeft = document.querySelectorAll('.img-frame-left');

        for (let i = 0; i < imagesLeft.length; i++) {
            if (imagesLeft[i].classList.contains('selected')) {
                const ctx = objData.canvasMain.getContext('2d');
                ctx.clearRect(0, 0, objData.canvasMain.width, objData.canvasMain.height);
                ctx.drawImage(imagesLeft[i], 0, 0, x, x);
            }
            newContext.drawImage(imagesLeft[i], 0, 0, x, x);
            imagesLeft[i].src = newCanvas.toDataURL();

            newContext.clearRect(0, 0, newCanvas.width, newCanvas.height);
        }
    }
    document.querySelector('#resize32').onclick = () => {
        const oldWidthFrame = objData.widthFrame;
        objData.widthFrame = 32;
        resizeAllImgs(oldWidthFrame);
    };
    document.querySelector('#resize64').onclick = () => {
        const oldWidthFrame = objData.widthFrame;
        objData.widthFrame = 64;
        resizeAllImgs(oldWidthFrame);
    };
    document.querySelector('#resize128').onclick = () => {
        const oldWidthFrame = objData.widthFrame;
        objData.widthFrame = 128;
        resizeAllImgs(oldWidthFrame);
    };
}

export { resizeFrames };
