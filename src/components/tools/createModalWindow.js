import { selectThisTool } from './selectThisTool';


function createModalWindow(objData) {
    const modal = document.getElementById('myModal');
    const btn = document.getElementById('myBtn');
    const span = document.getElementsByClassName('close')[0];
    btn.onclick = () => {
        modal.style.display = 'block';
    };
    span.onclick = () => {
        modal.style.display = 'none';
    };
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
    const keyboardShortcuts = document.getElementsByClassName('key-icon');

    Array.from(keyboardShortcuts).forEach((item) => {
        item.addEventListener('click', (event) => {
            if (event.target.classList.contains('key-icon')) {
                event.target.classList.add('selected-key');
            }
        });
    });
    document.addEventListener('keydown', (e) => {
        const modalEl = document.getElementById('myModal');

        if (modalEl.style.display === 'block') {
            const el = modalEl.querySelector('.selected-key');
            if (el) {
                if (objData.arrKeys[e.keyCode]) {
                    alert('this key is already reserved');
                    el.classList.remove('selected-key');
                    return;
                }
                const tool = objData.arrKeys[el.querySelector('span').innerHTML.charCodeAt(0)];
                objData.arrKeys[el.querySelector('span').innerHTML.charCodeAt(0)] = null;
                objData.arrKeys[e.keyCode] = tool;
                el.querySelector('span').innerHTML = String.fromCharCode(e.keyCode);
                el.classList.remove('selected-key');
            }
            return;
        }
        if (objData.arrKeys[e.keyCode]) {
            selectThisTool(objData.arrKeys[e.keyCode], objData);
        }
    });
}


export { createModalWindow };
