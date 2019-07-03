import { selectThisTool } from './selectThisTool';

function keyDownFunction(e) {
    const modal = document.getElementById('myModal');

    if (modal.style.display === 'block') {
        const el = modal.querySelector('.selected-key');
        if (el) {
            if (this.arrKeys[e.keyCode]) {
                alert('this key is already reserved');
                el.classList.remove('selected-key');
                return;
            }

            const tool = this.arrKeys[el.querySelector('span').innerHTML.charCodeAt(0)];
            this.arrKeys[el.querySelector('span').innerHTML.charCodeAt(0)] = null;
            this.arrKeys[e.keyCode] = tool;

            el.querySelector('span').innerHTML = String.fromCharCode(e.keyCode);

            el.classList.remove('selected-key');
        }
        return;
    }

    if (this.arrKeys[e.keyCode]) {
        selectThisTool(this.arrKeys[e.keyCode], this);
    }
}

export { keyDownFunction };
