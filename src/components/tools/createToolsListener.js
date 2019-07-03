import { selectThisTool } from './selectThisTool';
import { getTooltipText } from './getTooltipText';
import { colorPicker } from './colorPicker';

function createToolsListener(objData) {
    colorPicker(objData);

    document.querySelector('.tools-block').addEventListener('click', (event) => {
        if (event.target.classList.contains('tool-icon')) {
            const toolIcon = event.target;
            selectThisTool(toolIcon, objData);
        }
        if (event.target.parentNode.classList.contains('tool-icon')) {
            const toolIcon = event.target.parentNode;
            selectThisTool(toolIcon, objData);
        }
    });

    document.querySelector('.tools-block').addEventListener('mouseover', (event) => {
        let toolEl;
        if (event.target.parentNode.classList.contains('tool-icon')) {
            toolEl = event.target.parentNode;
        } else if (event.target.classList.contains('tool-icon')) {
            toolEl = event.target;
        }
        if (toolEl) {
            const toolTip = document.createElement('div');
            toolTip.id = 'toolTip';
            toolTip.innerHTML = getTooltipText(toolEl.querySelector('p').innerHTML);
            toolTip.classList.add('tooltip-class');
            toolEl.appendChild(toolTip);
        }
    });

    document.querySelector('.tools-block').addEventListener('mouseout', (event) => {
        let toolEl;
        if (event.target.parentNode.classList.contains('tool-icon')) {
            toolEl = event.target.parentNode;
        } else if (event.target.classList.contains('tool-icon')) {
            toolEl = event.target;
        }
        if (toolEl) {
            const toolTipEl = document.getElementById('toolTip');
            toolTipEl.remove();
        }
    });
}

export { createToolsListener };
