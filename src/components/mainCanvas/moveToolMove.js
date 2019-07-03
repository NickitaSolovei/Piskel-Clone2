/* eslint-disable no-plusplus */


function moveToolMove(objData) {
    const numJ = Math.floor((event.pageX - objData.coords.left)
        / (objData.realWidthCanvas / objData.widthFrame));
    const numI = Math.floor((event.pageY - objData.coords.top)
        / (objData.realWidthCanvas / objData.widthFrame));

    const xDel = numJ - objData.pointClick.x;
    const yDel = numI - objData.pointClick.y;


    if ((Math.abs(xDel) > 0 && objData.pointClick.xPrev !== xDel)
        || (Math.abs(yDel) > 0 && objData.pointClick.yPrev !== yDel)) {
        objData.pointClick.xPrev = xDel;
        objData.pointClick.yPrev = yDel;

        const ctx = objData.canvasMain.getContext('2d');
        ctx.clearRect(0, 0, objData.canvasMain.width, objData.canvasMain.height);

        for (let i = 0; i < objData.widthFrame; i++) {
            for (let j = 0; j < objData.widthFrame; j++) {
                ctx.fillStyle = objData.arrColors[i][j];

                objData.context.fillRect((xDel + j)
                    * (objData.realWidthCanvas / objData.widthFrame), (yDel + i)
                    * (objData.realWidthCanvas / objData.widthFrame), objData.realWidthCanvas
                    / objData.widthFrame, objData.realWidthCanvas / objData.widthFrame);
            }
        }
    }
}

export { moveToolMove };
