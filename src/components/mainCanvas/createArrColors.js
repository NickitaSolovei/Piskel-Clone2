import { rgb2hex } from './simpleFunctions/rgb2hex';

function createArrColors(canvasCopy, objData) {
    const arrColors = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < objData.widthFrame; i++) {
        arrColors[i] = [];
        // eslint-disable-next-line no-plusplus
        for (let j = 0; j < objData.widthFrame; j++) {
            const ctxCopy = canvasCopy.getContext('2d');
            const colorCell = ctxCopy.getImageData(j * (objData.realWidthCanvas
                / objData.widthFrame),
            i * (objData.realWidthCanvas / objData.widthFrame), 1, 1).data;

            arrColors[i][j] = rgb2hex(...colorCell);
        }
    }
    return arrColors;
}

export { createArrColors };
