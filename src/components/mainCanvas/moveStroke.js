

function moveStroke(objData, event) {
    // FROM SAVED IMG GO TO THE CANVAS
    // clear canvas
    const ctx = objData.canvasMain.getContext('2d');
    ctx.clearRect(0, 0, objData.canvasMain.width, objData.canvasMain.height);

    ctx.drawImage(objData.MainCanvasCopyImg, 0, 0, objData.realWidthCanvas,
        objData.realWidthCanvas);
    const numJ = Math.floor((event.pageX - objData.coords.left)
        / (objData.realWidthCanvas / objData.widthFrame));
    const numI = Math.floor((event.pageY - objData.coords.top)
        / (objData.realWidthCanvas / objData.widthFrame));

    objData.context.fillRect(numJ * (objData.realWidthCanvas / objData.widthFrame), numI
        * (objData.realWidthCanvas / objData.widthFrame), objData.realWidthCanvas
        / objData.widthFrame, objData.realWidthCanvas / objData.widthFrame);

    const xDel = numJ - objData.pointClick.x;
    const yDel = numI - objData.pointClick.y;
    let max;
    let min;

    if (Math.abs(xDel) > Math.abs(yDel)) {
        max = xDel;
        min = yDel;

        for (let j = max / Math.abs(max); Math.abs(j) < Math.abs(max); j += max / Math.abs(max)) {
            const i = Math.round(min * (Math.abs(j) / Math.abs(max)));

            objData.context.fillRect((objData.pointClick.x + j) * (objData.realWidthCanvas
                / objData.widthFrame), (objData.pointClick.y + i) * (objData.realWidthCanvas
                / objData.widthFrame), objData.realWidthCanvas
                / objData.widthFrame, objData.realWidthCanvas / objData.widthFrame);
        }
    } else {
        max = yDel;
        min = xDel;
        for (let i = max / Math.abs(max); Math.abs(i) < Math.abs(max); i += max / Math.abs(max)) {
            const j = Math.round(min * (Math.abs(i) / Math.abs(max)));
            objData.context.fillRect((objData.pointClick.x + j) * (objData.realWidthCanvas
                / objData.widthFrame), (objData.pointClick.y + i) * (objData.realWidthCanvas
                / objData.widthFrame), objData.realWidthCanvas
                / objData.widthFrame, objData.realWidthCanvas / objData.widthFrame);
        }
    }
}

export { moveStroke };
