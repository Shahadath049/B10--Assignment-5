function getInputFieldValueById(id) { 
    const inputElement = document.getElementById(id).value;
    const inputFieldData = parseFloat(inputElement);
    return inputFieldData;
}
function getInputFieldTextById(id) { 
    const inputElement = document.getElementById(id).innerText;
    const inputFieldData = parseFloat(inputElement);
    return inputFieldData;
}
