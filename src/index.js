/* eslint-disable no-plusplus */

import { ObjTools } from './components/tools/objTools';
import { arrKeys } from './components/tools/arrKeys';
import { createModalWindow } from './components/tools/createModalWindow';
import { createMainCanvasEventListener } from './components/mainCanvas/createMainCanvasEventListener';
import { eventListenerFrames } from './components/frames/eventListenerFrames';
import { createToolsListener } from './components/tools/createToolsListener';
import { resizeFrames } from './components/otherButtons/resizeFrames';
import { createInterval } from './components/animations/createInterval';
import { addFullscreenEvent } from './utils/addFullscreenEvent';
import { addChangeFPSevent } from './components/animations/addChangeFPSevent';

// localStorage.clear();
const retObj = JSON.parse(localStorage.getItem('object'));
console.log(retObj);

const objData = {};
objData.numFPS = 1;
objData.countFrames = 0;
objData.selectedTool = ObjTools.pen;

objData.realWidthCanvas = 320;
objData.widthFrame = 32;
objData.arrFrames = [];
objData.prevPoint = {};
objData.canvasMain = document.getElementById('canvasMain');
objData.coords = objData.canvasMain.getBoundingClientRect();
objData.context = objData.canvasMain.getContext('2d');
objData.pointClick = {};
objData.arrKeys = arrKeys;


addChangeFPSevent(objData);

addFullscreenEvent();

createModalWindow(objData);

document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

createMainCanvasEventListener(objData);

createInterval(objData);

eventListenerFrames(objData);

createToolsListener(objData);

resizeFrames(objData);


setInterval(() => {
    const sObj = JSON.stringify(objData);
    localStorage.setItem('object', sObj);
}, 5000);
