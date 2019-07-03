import { enterFullscreen } from './fullscreen';

function addFullscreenEvent() {
    // fullscreen mode
    document.getElementById('button-fullScreen').addEventListener('click', () => {
        enterFullscreen('canvas-animation');
    });
}

export {addFullscreenEvent};
