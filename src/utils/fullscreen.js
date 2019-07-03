// fullscreen mode

document.cancelFullScreen = document.cancelFullScreen || document.webkitCancelFullScreen;
function enterFullscreen(id) {
    const el = document.getElementById(id);

    if (el.webkitRequestFullScreen) {
        el.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    } else {
        el.mozRequestFullScreen();
    }

    document.querySelector('#button-fullScreen').onclick = () => {
        exitFullscreen(id);
    };
}

function exitFullscreen(id) {
    document.cancelFullScreen();

    // let el = document.getElementById(id);

    document.querySelector('#button-fullScreen').onclick = () => {
        enterFullscreen(id);
    };
}


export {enterFullscreen, exitFullscreen};
// module.exports = {enterFullscreen, exitFullscreen};
