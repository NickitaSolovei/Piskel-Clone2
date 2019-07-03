

function movePen(objData, event) {
    const numJ = Math.floor((event.pageX - objData.coords.left)
        / (objData.realWidthCanvas / objData.widthFrame));
    const numI = Math.floor((event.pageY - objData.coords.top)
        / (objData.realWidthCanvas / objData.widthFrame));
    objData.context.fillRect(numJ * (objData.realWidthCanvas / objData.widthFrame), numI
        * (objData.realWidthCanvas / objData.widthFrame), objData.realWidthCanvas
        / objData.widthFrame, objData.realWidthCanvas / objData.widthFrame);

    if (objData.prevPoint.x) {
        const xDel = numJ - objData.prevPoint.x;
        const yDel = numI - objData.prevPoint.y;
        let max;
        let min;
        if (Math.abs(xDel) > Math.abs(yDel) && Math.abs(xDel) > 1) {
            max = xDel;
            min = yDel;

            for (let j = max / Math.abs(max); Math.abs(j)
                < Math.abs(max); j += max / Math.abs(max)) {
                const i = Math.round(min * (Math.abs(j) / Math.abs(max)));
                objData.context.fillRect((objData.prevPoint.x + j) * (objData.realWidthCanvas
                    / objData.widthFrame), (objData.prevPoint.y + i) * (objData.realWidthCanvas
                    / objData.widthFrame), objData.realWidthCanvas
                    / objData.widthFrame, objData.realWidthCanvas / objData.widthFrame);
            }
        } else if (Math.abs(yDel) > 1) {
            max = yDel;
            min = xDel;

            for (let i = max / Math.abs(max); Math.abs(i)
                < Math.abs(max); i += max / Math.abs(max)) {
                const j = Math.round(min * (Math.abs(i) / Math.abs(max)));
                objData.context.fillRect((objData.prevPoint.x + j) * (objData.realWidthCanvas
                    / objData.widthFrame), (objData.prevPoint.y + i) * (objData.realWidthCanvas
                    / objData.widthFrame), objData.realWidthCanvas
                    / objData.widthFrame, objData.realWidthCanvas / objData.widthFrame);
            }
        }
    }
    objData.prevPoint.x = numJ;
    objData.prevPoint.y = numI;
}

export { movePen };
