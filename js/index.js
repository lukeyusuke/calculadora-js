const btnNumber = document.querySelectorAll('[data-number]');
const btnOperation = document.querySelectorAll('[data-operation]');
const btnDelete = document.querySelector('[data-delete]')
const btnAllClear = document.querySelector('[data-all-clear]');
const btnEquals = document.querySelector('[data-equals]');

const previousOperand = document.querySelector('[data-previous-operand]'); 
const currentOperand = document.querySelector('[data-current-operand]');

class calculator {
    constructor(previousOperandText, currentOperandText){
        this.previousOperandText = previousOperandText;
        this.currentOperandText = currentOperandText;
    }
}

const calc = calculator(previousOperand, currentOperand);

