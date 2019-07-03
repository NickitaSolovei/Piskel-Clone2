

function colorPicker(objData) {
    objData.primaryColor = '#00ff00';
    document.querySelector('.color-picker-first').value = objData.primaryColor;

    objData.secondaryColor = '#0000ff';
    document.querySelector('.color-picker-second').value = objData.secondaryColor;

    document.querySelector('.color-picker-first').oninput = () => {
        objData.primaryColor = document.querySelector('.color-picker-first').value;
    };

    document.querySelector('.color-picker-second').oninput = () => {
        objData.secondaryColor = document.querySelector('.color-picker-second').value;
    };
}

export {colorPicker};
