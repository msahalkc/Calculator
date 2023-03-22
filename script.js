const resultField = document.getElementById('output')
var root = document.querySelector(':root');
let darkMode = true;

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

function switchMode() {
    //light mode
    if (darkMode === true) {
        root.style.setProperty('--color-text', '#000')
        root.style.setProperty('--color-num', '#E0E0E0')
        root.style.setProperty('--color-ops', '#D0D0D0')
        root.style.setProperty('--color-equal', '#FFB900')
        root.style.setProperty('--color-output', '#F7F7F7')
        root.style.setProperty('--color-bg', '#F7F7F7')
        root.style.setProperty('--color-equal-active', '#F5A623')
        icon = 'uil uil-moon';
        document.querySelector('.uil.uil-sun').className = icon
    }

    if(darkMode === false){
        root.style.setProperty('--color-text', '#fff')
        root.style.setProperty('--color-num', '#323232')
        root.style.setProperty('--color-ops', '#262626')
        root.style.setProperty('--color-equal', '#FFB900')
        root.style.setProperty('--color-output', '#202020')
        root.style.setProperty('--color-bg', '#1E1E1E')
        root.style.setProperty('--color-equal-active', '#F5A623')
        icon = 'uil uil-sun';
        document.querySelector('.uil.uil-moon').className = icon
    }
}

function flipMode() {
    darkMode = !darkMode; //flip dark mode
}