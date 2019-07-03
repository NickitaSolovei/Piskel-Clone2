

function drawEllipse(ctx, coords, sizes) {
    ctx.beginPath();
    ctx.save(); // save context
    ctx.translate(coords[0], coords[1]);

    ctx.scale(1, sizes[1] / sizes[0]);
    ctx.arc(0, 0, sizes[0], 0, Math.PI * 2);
    ctx.restore();
    ctx.strokeStyle = '#ff0000';
    ctx.stroke();
    ctx.closePath();
}

export {drawEllipse};
