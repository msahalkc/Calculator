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
    
    if (darkMode === true) {
        root.style.setProperty('--color-text', '#000')
        root.style.setProperty('--color-num', '#ffffff')
        root.style.setProperty('--color-ops', '#f9f9f9')
        root.style.setProperty('--color-equal', '#0067c0')
        root.style.setProperty('--color-output', '#f3f3f3')
        root.style.setProperty('--color-bg', '#f3f3f3')
        icon = 'uil uil-moon';
        document.querySelector('.uil.uil-sun').className = icon
    }

    if(darkMode === false){
        root.style.setProperty('--color-text', '#fff')
        root.style.setProperty('--color-num', '#616161')
        root.style.setProperty('--color-ops', '#323232')
        root.style.setProperty('--color-equal', '#4cc2ff')
        root.style.setProperty('--color-output', '#202020')
        root.style.setProperty('--color-bg', '#202020')
        icon = 'uil uil-sun';
        document.querySelector('.uil.uil-moon').className = icon
    }
}

function flipMode() {
    darkMode = !darkMode;
    console.log(darkMode);
}