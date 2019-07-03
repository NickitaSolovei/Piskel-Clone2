import {drawFromCanvas} from './drawFromCanvas';

function createInterval(objData) {
    clearInterval(objData.interval);
    objData.interval = setInterval(() => {
        const frame = objData.arrFrames[objData.countFrames % objData.arrFrames.length];
        drawFromCanvas(frame);
        objData.countFrames += 1;
    }, 1000 / objData.numFPS);
}

export {createInterval};
