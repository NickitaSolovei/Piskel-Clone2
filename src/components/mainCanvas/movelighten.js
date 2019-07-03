import { rgb2hex } from './simpleFunctions/rgb2hex';

function movelighten(objData, event) {
    const context = objData.canvasMain.getContext('2d');
    const numJ = Math.floor((event.pageX - objData.coords.left)
        / (objData.realWidthCanvas / objData.widthFrame));
    const numI = Math.floor((event.pageY - objData.coords.top)
        / (objData.realWidthCanvas / objData.widthFrame));

    const colorCell = context.getImageData(event.pageX - objData.coords.left,
        event.pageY - objData.coords.top, 1, 1).data;

    const colorCellArray = Array.from(colorCell);
    colorCellArray.pop();


    if (event.ctrlKey) {
        const max = Math.max(...colorCellArray);
        if (max === 0) {
            return;
        }
        const del = max;

        const colorNew = colorCellArray.map((item) => {
            const color = item - Math.ceil(10 * (item) / del);
            if (color < 0) {
                return 0;
            }
            return color;
        });

        const colorCellHex = rgb2hex(...colorNew);
        context.fillStyle = colorCellHex;
    } else {
        const min = Math.min(...colorCellArray);
        if (min === 255) {
            return;
        }
        const del = 255 - min;

        const colorNew = colorCellArray.map((item) => {
            const color = item + Math.ceil(10 * (255 - item) / del);
            if (color > 255) {
                return 255;
            }
            return color;
        });

        const colorCellHex = rgb2hex(...colorNew);
        context.fillStyle = colorCellHex;
    }

    context.fillRect(numJ * (objData.realWidthCanvas / objData.widthFrame),
        numI * (objData.realWidthCanvas / objData.widthFrame),
        objData.realWidthCanvas / objData.widthFrame, objData.realWidthCanvas / objData.widthFrame);
}

export {movelighten};
