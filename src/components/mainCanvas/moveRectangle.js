/* eslint-disable no-plusplus */


function moveRectangle(objData, event) {
    const numJ = Math.floor((event.pageX - objData.coords.left)
        / (objData.realWidthCanvas / objData.widthFrame));
    const numI = Math.floor((event.pageY - objData.coords.top)
        / (objData.realWidthCanvas / objData.widthFrame));

    const xDel = numJ - objData.pointClick.x;
    const yDel = numI - objData.pointClick.y;

    if ((objData.pointClick.xPrev !== xDel) || (objData.pointClick.yPrev !== yDel)) {
        objData.pointClick.xPrev = xDel;
        objData.pointClick.yPrev = yDel;

        const ctx = objData.canvasMain.getContext('2d');
        ctx.clearRect(0, 0, objData.canvasMain.width, objData.canvasMain.height);

        ctx.drawImage(objData.MainCanvasCopyImg, 0, 0, objData.realWidthCanvas,
            objData.realWidthCanvas);

        let xStart;
        let xEnd;
        let yStart;
        let yEnd;
        if (numJ > objData.pointClick.x) {
            xStart = objData.pointClick.x;
            xEnd = numJ;
        } else {
            xStart = numJ;
            xEnd = objData.pointClick.x;
        }

        if (numI > objData.pointClick.y) {
            yStart = objData.pointClick.y;
            yEnd = numI;
        } else {
            yStart = numI;
            yEnd = objData.pointClick.y;
        }

        for (let i = yStart; i <= yEnd; i++) {
            ctx.fillRect((xStart) * (objData.realWidthCanvas / objData.widthFrame), (i)
                * (objData.realWidthCanvas / objData.widthFrame), objData.realWidthCanvas
                / objData.widthFrame, objData.realWidthCanvas / objData.widthFrame);
            ctx.fillRect((xEnd) * (objData.realWidthCanvas / objData.widthFrame), (i)
                * (objData.realWidthCanvas / objData.widthFrame), objData.realWidthCanvas
                / objData.widthFrame, objData.realWidthCanvas / objData.widthFrame);
        }
        for (let j = xStart; j <= xEnd; j++) {
            ctx.fillRect((j) * (objData.realWidthCanvas / objData.widthFrame), (yStart)
                * (objData.realWidthCanvas / objData.widthFrame), objData.realWidthCanvas
                / objData.widthFrame, objData.realWidthCanvas / objData.widthFrame);

            ctx.fillRect((j) * (objData.realWidthCanvas / objData.widthFrame), (yEnd)
                * (objData.realWidthCanvas / objData.widthFrame), objData.realWidthCanvas
                / objData.widthFrame, objData.realWidthCanvas / objData.widthFrame);
        }
    }
}

export {moveRectangle};
