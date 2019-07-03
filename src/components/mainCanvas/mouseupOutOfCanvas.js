import { ObjTools } from '../tools/objTools';
import { updateImg } from './simpleFunctions/updateImg';


function mouseupOutOfCanvas(objData, funFirst, funSecond, funThird) {
    const bodyTag = document.querySelector('body');
    // if selected PEN
    if (objData.selectedTool === ObjTools.pen || objData.selectedTool === ObjTools.eraser
        || objData.selectedTool === ObjTools.mirrorPen
        || objData.selectedTool === ObjTools.dithering) {
        // delete eventlistener on move
        objData.canvasMain.removeEventListener('mousemove', funFirst);
        objData.canvasMain.removeEventListener('mouseout', funSecond);
        bodyTag.removeEventListener('mouseup', funThird);

        objData.prevPoint.x = null;
        objData.prevPoint.y = null;
    }

    if (objData.selectedTool === ObjTools.stroke || objData.selectedTool === ObjTools.move
        || objData.selectedTool === ObjTools.rectangle || objData.selectedTool === ObjTools.circle
        || objData.selectedTool === ObjTools.lighten) {
        // delete eventlistener on move
        objData.canvasMain.removeEventListener('mousemove', funFirst);
        objData.canvasMain.removeEventListener('mouseout', funSecond);
        bodyTag.removeEventListener('mouseup', funThird);
    }


    // function update img left
    updateImg(objData.canvasMain);
}

export { mouseupOutOfCanvas };
