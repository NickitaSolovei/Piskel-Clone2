
function getTooltipText(value) {
    const objTips = {
        pen: 'pen tool',
        'vertical mirror pen': 'CTRL - horizontal axis; SHIFT - horizontal and vertical axiz',
        'paint bucket': 'paint bucket',
        'paint all pixels of the same color': 'paint all pixels of the same color',
        eraser: 'eraser',
        stroke: 'stroke',
        move: 'move',
        rectangle: 'rectangle',
        circle: 'circle',
        lighten: 'CTRL - darken',
        dithering: 'dithering',
        'color picker': 'color picker',
    };
    return objTips[value];
}

export { getTooltipText };
