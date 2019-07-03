import { drawFromCanvas } from './drawFromCanvas';


// line fps
function changeFPS(objData, arrFrames) {
    const lineFPS = document.getElementById('lineFPS').value;
    const displayFPS = document.getElementById('displayFPS');
    displayFPS.innerHTML = `${lineFPS} FPS`;

    objData.numFPS = lineFPS;

    clearInterval(objData.interval);
    objData.interval = setInterval(() => {
        const frame = arrFrames[objData.countFrames % arrFrames.length];

        drawFromCanvas(frame);
        objData.countFrames += 1;
    }, 1000 / objData.numFPS);
}

export {changeFPS};
