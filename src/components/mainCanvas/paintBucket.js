import { matchStartColor } from './matchStartColor';
import { colorPixel } from './colorPixel';

function paintBucket(objData, event) {
    const numJ = Math.floor((event.pageX - objData.coords.left)
        / (objData.realWidthCanvas / objData.widthFrame));
    const numI = Math.floor((event.pageY - objData.coords.top)
        / (objData.realWidthCanvas / objData.widthFrame));

    const pixelStack = [[numJ, numI]];
    const ctx = objData.canvasMain.getContext('2d');
    const colorClick = ctx.getImageData(event.pageX - objData.coords.left, event.pageY
        - objData.coords.top, 1, 1).data;

    while (pixelStack.length) {
        let reachLeft;
        let reachRight;
        const newPos = pixelStack.pop();
        const x = newPos[0];
        let y = newPos[1];

        while (y >= 0 && matchStartColor(x, y, colorClick, objData)) {
            y -= 1;
        }
        y += 1;
        reachLeft = false;
        reachRight = false;
        while (y < objData.widthFrame && matchStartColor(x, y, colorClick, objData)) {
            colorPixel(x, y, objData);
            if (x > 0) {
                if (matchStartColor(x - 1, y, colorClick, objData)) {
                    if (!reachLeft) {
                        pixelStack.push([x - 1, y]);
                        reachLeft = true;
                    }
                } else if (reachLeft) {
                    reachLeft = false;
                }
            }
            if (x < objData.widthFrame - 1) {
                if (matchStartColor(x + 1, y, colorClick, objData)) {
                    if (!reachRight) {
                        pixelStack.push([x + 1, y]);
                        reachRight = true;
                    }
                } else if (reachRight) {
                    reachRight = false;
                }
            }
            y += 1;
        }
    }
}

export { paintBucket };
