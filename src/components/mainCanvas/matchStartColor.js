

function matchStartColor(x, y, colorClick, objData) {
    const ctx = objData.canvasMain.getContext('2d');
    const colorCell = ctx.getImageData(x * (objData.realWidthCanvas / objData.widthFrame),
        y * (objData.realWidthCanvas / objData.widthFrame), 1, 1).data;

    const r = colorCell[0];
    const g = colorCell[1];
    const b = colorCell[2];

    return (r === colorClick[0] && g === colorClick[1] && b === colorClick[2]);
}

export { matchStartColor };
