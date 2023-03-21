const resultField = document.getElementById('output')

function addToResult(value) {
    resultField.value += value;
}

function clearResult() {
    resultField.value = "";
}
  
function calculate() {
    const result = eval(resultField.value);
    resultField.value = result;
}

function clearLastEntry() {
    resultField.value = resultField.value.slice(0, resultField.value.length-1);
}