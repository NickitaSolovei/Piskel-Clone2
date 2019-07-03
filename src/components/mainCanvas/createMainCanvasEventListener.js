import { movePen } from './movePen';
import { penOutOfCanvas } from './penOutOfCanvas';
import { mouseupOutOfCanvas } from './mouseupOutOfCanvas';
import { ObjTools } from '../tools/objTools';
import { moveMirrorPen } from './moveMirrorPen';
import { moveStroke } from './moveStroke';
import { paintBucket } from './paintBucket';
import { saveClickPoint } from './saveClickPoint';
import { paintBucketAllPixels } from './paintBucketAllPixels';
import { createArrColors } from './createArrColors';
import { moveToolMove } from './moveToolMove';
import { moveRectangle } from './moveRectangle';
import { moveCircle } from './moveCircle';
import { moveDithering } from './moveDithering';
import { movelighten } from './movelighten';
import { rgb2hex } from './simpleFunctions/rgb2hex';
import { updateImg } from './simpleFunctions/updateImg';


function createMainCanvasEventListener(objData) {
    objData.canvasMain.addEventListener('mousedown', (event) => {
        const context = objData.canvasMain.getContext('2d');
        const bodyTag = document.querySelector('body');

        if (objData.selectedTool === ObjTools.pen) {
            if (event.which === 1) {
                context.fillStyle = objData.primaryColor;
            } else {
                context.fillStyle = objData.secondaryColor;
            }
            movePen(objData, event);

            let movePenFun;
            let penOutOfCanvasFun;
            let mouseupOutOfCanvasFun;
            objData.canvasMain.addEventListener('mousemove', movePenFun = (e) => { movePen(objData, e); });
            objData.canvasMain.addEventListener('mouseout', penOutOfCanvasFun = () => { penOutOfCanvas(objData); });
            bodyTag.addEventListener('mouseup', mouseupOutOfCanvasFun = () => { mouseupOutOfCanvas(objData, movePenFun, penOutOfCanvasFun, mouseupOutOfCanvasFun); });
        }

        if (objData.selectedTool === ObjTools.eraser) {
            if (event.which === 1) {
                context.fillStyle = '#000000';
            } else {
                context.fillStyle = '#000000';
            }
            movePen(objData, event);

            let movePenFun;
            let penOutOfCanvasFun;
            let mouseupOutOfCanvasFun;
            objData.canvasMain.addEventListener('mousemove', movePenFun = (e) => { movePen(objData, e); });
            objData.canvasMain.addEventListener('mouseout', penOutOfCanvasFun = () => { penOutOfCanvas(objData); });
            bodyTag.addEventListener('mouseup', mouseupOutOfCanvasFun = () => { mouseupOutOfCanvas(objData, movePenFun, penOutOfCanvasFun, mouseupOutOfCanvasFun); });
        }


        if (objData.selectedTool === ObjTools.mirrorPen) {
            if (event.which === 1) {
                context.fillStyle = objData.primaryColor;
            } else {
                context.fillStyle = objData.secondaryColor;
            }
            moveMirrorPen(objData, event);

            let moveMirrorPenFun;
            let penOutOfCanvasFun;
            let mouseupOutOfCanvasFun;
            objData.canvasMain.addEventListener('mousemove', moveMirrorPenFun = (e) => { moveMirrorPen(objData, e); });
            objData.canvasMain.addEventListener('mouseout', penOutOfCanvasFun = () => { penOutOfCanvas(objData); });
            bodyTag.addEventListener('mouseup', mouseupOutOfCanvasFun = () => { mouseupOutOfCanvas(objData, moveMirrorPenFun, penOutOfCanvasFun, mouseupOutOfCanvasFun); });
        }


        if (objData.selectedTool === ObjTools.stroke) {
            if (event.which === 1) {
                context.fillStyle = objData.primaryColor;
            } else {
                context.fillStyle = objData.secondaryColor;
            }

            saveClickPoint(objData.pointClick, objData);
            context.fillRect(objData.pointClick.x * (objData.realWidthCanvas / objData.widthFrame),
                objData.pointClick.y * (objData.realWidthCanvas / objData.widthFrame),
                objData.realWidthCanvas / objData.widthFrame,
                objData.realWidthCanvas / objData.widthFrame);

            objData.MainCanvasCopyImg = document.createElement('img');
            objData.MainCanvasCopyImg.src = objData.canvasMain.toDataURL();

            let moveStrokeFun;
            let penOutOfCanvasFun;
            let mouseupOutOfCanvasFun;
            objData.canvasMain.addEventListener('mousemove', moveStrokeFun = (e) => { moveStroke(objData, e); });
            objData.canvasMain.addEventListener('mouseout', penOutOfCanvasFun = () => { penOutOfCanvas(objData); });
            bodyTag.addEventListener('mouseup', mouseupOutOfCanvasFun = () => { mouseupOutOfCanvas(objData, moveStrokeFun, penOutOfCanvasFun, mouseupOutOfCanvasFun); });
        }


        if (objData.selectedTool === ObjTools.paintBucket) {
            if (event.which === 1) {
                context.fillStyle = objData.primaryColor;
            } else {
                context.fillStyle = objData.secondaryColor;
            }
            paintBucket(objData, event);
        }

        if (objData.selectedTool === ObjTools.paintAllPixels) {
            if (event.which === 1) {
                context.fillStyle = objData.primaryColor;
            } else {
                context.fillStyle = objData.secondaryColor;
            }
            paintBucketAllPixels(objData, event);
        }

        if (objData.selectedTool === ObjTools.move) {
            saveClickPoint(objData.pointClick, objData);
            objData.arrColors = createArrColors(objData.canvasMain, objData);

            let moveToolMoveFun;
            let penOutOfCanvasFun;
            let mouseupOutOfCanvasFun;
            objData.canvasMain.addEventListener('mousemove', moveToolMoveFun = (e) => { moveToolMove(objData, e); });
            objData.canvasMain.addEventListener('mouseout', penOutOfCanvasFun = () => { penOutOfCanvas(objData); });
            bodyTag.addEventListener('mouseup', mouseupOutOfCanvasFun = () => { mouseupOutOfCanvas(objData, moveToolMoveFun, penOutOfCanvasFun, mouseupOutOfCanvasFun); });
        }

        if (objData.selectedTool === ObjTools.rectangle) {
            if (event.which === 1) {
                context.fillStyle = objData.primaryColor;
            } else {
                context.fillStyle = objData.secondaryColor;
            }

            saveClickPoint(objData.pointClick, objData);
            context.fillRect(objData.pointClick.x * (objData.realWidthCanvas / objData.widthFrame),
                objData.pointClick.y * (objData.realWidthCanvas / objData.widthFrame),
                objData.realWidthCanvas / objData.widthFrame,
                objData.realWidthCanvas / objData.widthFrame);

            objData.MainCanvasCopyImg = document.createElement('img');
            objData.MainCanvasCopyImg.src = objData.canvasMain.toDataURL();

            let moveRectangleFun;
            let penOutOfCanvasFun;
            let mouseupOutOfCanvasFun;
            objData.canvasMain.addEventListener('mousemove', moveRectangleFun = (e) => { moveRectangle(objData, e); });
            objData.canvasMain.addEventListener('mouseout', penOutOfCanvasFun = () => { penOutOfCanvas(objData); });
            bodyTag.addEventListener('mouseup', mouseupOutOfCanvasFun = () => { mouseupOutOfCanvas(objData, moveRectangleFun, penOutOfCanvasFun, mouseupOutOfCanvasFun); });
        }

        if (objData.selectedTool === ObjTools.circle) {
            if (event.which === 1) {
                context.fillStyle = objData.primaryColor;
            } else {
                context.fillStyle = objData.secondaryColor;
            }
            saveClickPoint(objData.pointClick, objData);
            objData.MainCanvasCopyImg = document.createElement('img');
            objData.MainCanvasCopyImg.src = objData.canvasMain.toDataURL();

            let moveCircleFun;
            let penOutOfCanvasFun;
            let mouseupOutOfCanvasFun;
            objData.canvasMain.addEventListener('mousemove', moveCircleFun = (e) => { moveCircle(objData, e); });
            objData.canvasMain.addEventListener('mouseout', penOutOfCanvasFun = () => { penOutOfCanvas(objData); });
            bodyTag.addEventListener('mouseup', mouseupOutOfCanvasFun = () => { mouseupOutOfCanvas(objData, moveCircleFun, penOutOfCanvasFun, mouseupOutOfCanvasFun); });
        }

        if (objData.selectedTool === ObjTools.dithering) {
            moveDithering(objData, event);

            let moveDitheringFun;
            let penOutOfCanvasFun;
            let mouseupOutOfCanvasFun;
            objData.canvasMain.addEventListener('mousemove', moveDitheringFun = (e) => { moveDithering(objData, e); });
            objData.canvasMain.addEventListener('mouseout', penOutOfCanvasFun = () => { penOutOfCanvas(objData); });
            bodyTag.addEventListener('mouseup', mouseupOutOfCanvasFun = () => { mouseupOutOfCanvas(objData, moveDitheringFun, penOutOfCanvasFun, mouseupOutOfCanvasFun); });
        }

        if (objData.selectedTool === ObjTools.lighten) {
            movelighten(objData, event);

            let movelightenFun;
            let penOutOfCanvasFun;
            let mouseupOutOfCanvasFun;
            objData.canvasMain.addEventListener('mousemove', movelightenFun = (e) => { movelighten(objData, e); });
            objData.canvasMain.addEventListener('mouseout', penOutOfCanvasFun = () => { penOutOfCanvas(objData); });
            bodyTag.addEventListener('mouseup', mouseupOutOfCanvasFun = () => { mouseupOutOfCanvas(objData, movelightenFun, penOutOfCanvasFun, mouseupOutOfCanvasFun); });
        }

        if (objData.selectedTool === ObjTools.colorPicker) {
            const colorCell = context.getImageData(event.pageX - objData.coords.left,
                event.pageY - objData.coords.top, 1, 1).data;

            const colorCellHex = rgb2hex(...colorCell);
            context.fillStyle = colorCellHex;

            if (event.which === 1) {
                objData.primaryColor = colorCellHex;
                const el = document.querySelector('.color-picker-first');

                el.value = colorCellHex;
            } else if ((event.which === 3)) {
                objData.secondaryColor = colorCellHex;
                const el = document.querySelector('.color-picker-second');
                el.value = colorCellHex;
            }
        }
        updateImg(objData.canvasMain);
    });
}

export { createMainCanvasEventListener };
