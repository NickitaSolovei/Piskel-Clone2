import { toggleSelected } from './toggleSelected';
import { drawFromCanvas } from '../animations/drawFromCanvas';
import { dragonfly } from '../../utils/dragonfly';

function createNewFrame(objData, existingFrame) {
    let newImg;
    const ctx = objData.canvasMain.getContext('2d');
    ctx.clearRect(0, 0, objData.canvasMain.width, objData.canvasMain.height);
    // create new img
    if (existingFrame === undefined) {
        newImg = document.createElement('img');
        newImg.className = 'img-frame-left';
    } else {
        const frameElClone = existingFrame.querySelector('.img-frame-left');
        const imgFrameElClone = frameElClone.cloneNode(true);

        newImg = imgFrameElClone;
        newImg.classList.remove('selected');
    }

    const framesImgs = document.querySelector('.frames-imgs');

    // create wrap for img
    const frameWrap = document.createElement('div');
    frameWrap.className = 'img-wrap';
    frameWrap.innerHTML = 'move';

    // create button to delete frame
    const buttonDeleteFrame = document.createElement('button');
    buttonDeleteFrame.innerHTML = 'del';
    buttonDeleteFrame.className = 'delete-frame';
    buttonDeleteFrame.addEventListener('click', () => {
        // if delete last frame - create error
        if (objData.arrFrames.length === 1) {
            alert('can not delete last frame');
            return;
        }

        // if delete selected frame - go to the first
        if (newImg.classList.contains('selected')) {
            const firstImg = document.querySelector('.img-frame-left');
            toggleSelected(firstImg, objData.realWidthCanvas)();
        }
        frameWrap.parentNode.removeChild(frameWrap);

        // and delete from array
        // look for index in array
        const index = objData.arrFrames.indexOf(frameWrap);
        objData.arrFrames.splice(index, 1);
    });

    // create button to copy frame
    const buttonCopyFrame = document.createElement('button');
    buttonCopyFrame.innerHTML = 'copy';
    buttonCopyFrame.className = 'copy-frame';
    buttonCopyFrame.addEventListener('click', () => {
        // if delete selected frame - go to the first
        createNewFrame(objData, frameWrap);
    });

    const buttonImgsWrapper = document.createElement('div');
    buttonImgsWrapper.className = 'but-img-wrap';
    buttonImgsWrapper.appendChild(buttonDeleteFrame);
    buttonImgsWrapper.appendChild(buttonCopyFrame);

    frameWrap.appendChild(newImg);
    frameWrap.appendChild(buttonImgsWrapper);
    framesImgs.appendChild(frameWrap);

    toggleSelected(newImg, objData.realWidthCanvas)();
    newImg.addEventListener('click', toggleSelected(newImg, objData.realWidthCanvas));
    objData.arrFrames.push(frameWrap);

    clearInterval(objData.interval);
    objData.interval = setInterval(() => {
        const frame = objData.arrFrames[objData.countFrames % objData.arrFrames.length];
        drawFromCanvas(frame);
        objData.countFrames += 1;
    }, 1000 / objData.numFPS);


    dragonfly('.frames-imgs', objData.arrFrames);
}

export {createNewFrame};
