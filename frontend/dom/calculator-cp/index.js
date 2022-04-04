//handle when the number is pressed. It renders the number into #input element
function number(number) {
    // TODO: answer here
    let input = document.getElementById('input');
    input.value += number;
}

//handle when the Del button, AC button and other operators (+, /, -, x) are pressed. It renders the operator into #input element
function operator(operator) {
    // TODO: answer here
    let del = document.getElementById('del');
    let ac = document.getElementById('ac');
    let div = document.getElementById('div');
    let mult = document.getElementById('mult');
    let min = document.getElementById('min');
    let plus = document.getElementById('plus');
    let dot = document.getElementById('dot');
}

//handle when = button is pressed. It renders the result into #input element
function calculate() {
    // TODO: answer here
    let equal = document.getElementById('calc');
}