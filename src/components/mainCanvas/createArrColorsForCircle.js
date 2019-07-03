/* eslint-disable no-plusplus */
import { rgb2hex } from './simpleFunctions/rgb2hex';

function createArrColorsForCircle(canvasCopy, objData) {
    const arrColors = [];
    for (let i = 0; i < objData.widthFrame; i++) {
        arrColors[i] = [];
        for (let j = 0; j < objData.widthFrame; j++) {
            const ctxCopy = canvasCopy.getContext('2d');
            const colorCell = ctxCopy.getImageData(j, i, 1, 1).data;

            arrColors[i][j] = rgb2hex(...colorCell);
        }
    }
    return arrColors;
}

export {createArrColorsForCircle};
