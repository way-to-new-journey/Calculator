const display = document.getElementById("display");
const buttons = document.querySelectorAll(".dev");

const operators = document.querySelectorAll(".operator");
const clearbutton = document.getElementById("clear");
const delbutton = document.getElementById("delete");
const equalbutton = document.getElementById("equal");

let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button =>{
    button.addEventListener("click",function(){
        currentInput += button.innerText;
        display.value = currentInput;
 
    });
});

operators.forEach(op =>{
    op.addEventListener("click",function(){
        if(currentInput === '')return;
        operator = op.innerText;
        display.value = operator;
        previousInput = currentInput;
        currentInput = '';

    });

});

equalbutton.addEventListener("click",function(){
    if(previousInput === '' && currentInput === '')return;
    let result;
    let num1 = parseFloat(previousInput);
    let num2 = parseFloat(currentInput);

    switch(operator){
        case '+':
            result = num1+num2;
            break;
        case '-':
            result = num1-num2;
            break;
        case '*':
            result = num1*num2;
            break;
        case '/':
            result = num1/num2;
            break;
        case '%':
            result = num1%num2;
            break;
        default:
            return;
        
    }
    display.value = result;
    currentInput = result.toString();
    previousInput = '';

});
clearbutton.addEventListener("click",function(){
    currentInput = '';
    previousInput = '';
    operator = '';
    display.value = '';

});
delbutton.addEventListener("click",function(){
    currentInput = currentInput.slice(0,-1);
    display.value = currentInput;

});


