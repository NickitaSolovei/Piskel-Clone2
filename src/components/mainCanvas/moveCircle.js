/* eslint-disable no-plusplus */
import { drawEllipse } from './drawEllipse';
import { createArrColorsForCircle } from './createArrColorsForCircle';

function moveCircle(objData, event) {
    const numJ = Math.floor((event.pageX - objData.coords.left)
        / (objData.realWidthCanvas / objData.widthFrame));
    const numI = Math.floor((event.pageY - objData.coords.top)
        / (objData.realWidthCanvas / objData.widthFrame));

    const xDel = numJ - objData.pointClick.x;
    const yDel = numI - objData.pointClick.y;


    if ((Math.abs(xDel) > 2 && objData.pointClick.xPrev !== xDel)
        || (Math.abs(yDel) > 2 && objData.pointClick.yPrev !== yDel)) {
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
        // create new canvas, and than get information from this
        const canvasCircle = document.createElement('canvas');
        canvasCircle.width = objData.widthFrame;
        canvasCircle.height = objData.widthFrame;

        canvasCircle.style.width = `${objData.widthFrame}px`;
        canvasCircle.style.height = `${objData.widthFrame}px`;

        const ctxCircle = canvasCircle.getContext('2d');

        ctxCircle.lineWidth = 1;
        drawEllipse(ctxCircle, [xStart + (xEnd - xStart) / 2, yStart + (yEnd - yStart) / 2],
            [(xEnd - xStart) / 2, (yEnd - yStart) / 2], 0, 1000);

        objData.arrColors = createArrColorsForCircle(canvasCircle, objData);

        for (let i = 0; i < objData.widthFrame; i++) {
            for (let j = 0; j < objData.widthFrame; j++) {
                // заполнить maincanvas выбранным кадром-img
                if (objData.arrColors[i][j] === '#ff0000') {
                    objData.context.fillRect((j) * (objData.realWidthCanvas / objData.widthFrame),
                        (i) * (objData.realWidthCanvas / objData.widthFrame),
                        objData.realWidthCanvas / objData.widthFrame, objData.realWidthCanvas
                        / objData.widthFrame);
                }
            }
        }
    }
}

export {moveCircle};
