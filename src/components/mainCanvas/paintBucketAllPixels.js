/* eslint-disable no-plusplus */
import { matchStartColor } from './matchStartColor';
import { colorPixel } from './colorPixel';

function paintBucketAllPixels(objData, event) {
    const ctx = objData.canvasMain.getContext('2d');
    const colorClick = ctx.getImageData(event.pageX - objData.coords.left, event.pageY
        - objData.coords.top, 1, 1).data;

    for (let i = 0; i < objData.widthFrame; i++) {
        for (let j = 0; j < objData.widthFrame; j++) {
            if (matchStartColor(j, i, colorClick, objData)) {
                colorPixel(j, i, objData);
            }
        }
    }
}

export {paintBucketAllPixels};
