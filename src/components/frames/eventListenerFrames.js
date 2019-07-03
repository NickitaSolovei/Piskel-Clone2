import { toggleSelected } from './toggleSelected';
import { createNewFrame } from './createNewFrame';

function eventListenerFrames(objData) {
    objData.arrFrames.push(document.querySelector('.img-wrap'));

    document.getElementById('add-frame').addEventListener('click', () => {
        createNewFrame(objData);
    });

    // eventlistener to toggle frames
    const imgsSelected = document.querySelectorAll('.img-frame-left');

    for (let index = 0; index < imgsSelected.length; index += 1) {
        const button = imgsSelected[index];
        button.addEventListener('click', toggleSelected(button, objData.realWidthCanvas));
    }

    const frameWrap = document.querySelector('.img-wrap');
    const newImg = document.querySelector('.img-frame-left');

    const buttonDeleteFrame = document.querySelector('.delete-frame');
    buttonDeleteFrame.addEventListener('click', () => {
        // if delete last frame - get error
        if (objData.arrFrames.length === 1) {
            alert('can not delete last frame');
            return;
        }

        if (newImg.classList.contains('selected')) {
            const firstImg = document.querySelector('.img-frame-left');
            toggleSelected(firstImg, objData.realWidthCanvas)();
        }
        frameWrap.parentNode.removeChild(frameWrap);

        const index = objData.arrFrames.indexOf(frameWrap);
        objData.arrFrames.splice(index, 1);
    });

    const buttonCopyFrame = document.querySelector('.copy-frame');
    buttonCopyFrame.addEventListener('click', () => {
        createNewFrame(objData, frameWrap);
    });
}

export { eventListenerFrames };
