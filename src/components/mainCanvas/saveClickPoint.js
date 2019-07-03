
function saveClickPoint(pointClick, objData) {
    const numJ = Math.floor((event.pageX - objData.coords.left)
        / (objData.realWidthCanvas / objData.widthFrame));
    const numI = Math.floor((event.pageY - objData.coords.top)
        / (objData.realWidthCanvas / objData.widthFrame));

    pointClick.x = numJ;
    pointClick.y = numI;
}

export {saveClickPoint};
