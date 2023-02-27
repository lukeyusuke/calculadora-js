const buttons = document.querySelectorAll('[data-button]');
const btnDelete = document.querySelector('[data-delete]')
const btnAllClear = document.querySelector('[data-all-clear]');
const btnEquals = document.querySelector('[data-equals]');

const previousOperand = document.querySelector('[data-previous-operand]'); 
const currentOperand = document.querySelector('[data-current-operand]');

class Calculator {
    constructor(previousOperand, currentOperand){
        this.previousOperand = previousOperand;
        this.currentOperand = currentOperand;
    }

    clear(){
        this.previousOperand.innerText = "";
        this.currentOperand.innerText = "";
    }

    showOutput(button){
        this.currentOperand.innerText += button;
    }
}

const calculator = new Calculator(previousOperand, currentOperand);

for(const button of buttons){
    button.addEventListener('click', () => {
        calculator.showOutput(button.innerText);
    })
}