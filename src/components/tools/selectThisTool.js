
function selectThisTool(el, objData) {
    if (!el.classList.contains('selectedTool')) {
        const oldSelected = document.querySelector('.selectedTool');
        oldSelected.classList.remove('selectedTool');
        el.classList.add('selectedTool');
        objData.selectedTool = el;
    }
}

export { selectThisTool };
