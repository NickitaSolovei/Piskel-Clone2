import { changeFPS } from './changeFPS';

function addChangeFPSevent(objData) {
    //  html event lineFPS
    document.getElementById('lineFPS').addEventListener('click', () => {
        changeFPS(objData, objData.arrFrames);
    });
}

export { addChangeFPSevent };
