
function colorPixel(x, y, objData) {
    objData.context.fillRect(x * (objData.realWidthCanvas / objData.widthFrame),
        y * (objData.realWidthCanvas / objData.widthFrame),
        objData.realWidthCanvas / objData.widthFrame, objData.realWidthCanvas / objData.widthFrame);
}

export { colorPixel };
