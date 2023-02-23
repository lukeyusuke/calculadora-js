// Pega os elementos que vamos utilizar
const inputCalculo = document.querySelector('[data-input]')
const previousOperandText = document.querySelector('[data-previous-operand]');
const currentOperandText = document.querySelector('[data-current-operand]');

const numberBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');
const deleteBtn = document.querySelector('[data-delete]');
const clearBtn = document.querySelector('[data-clear]');
const equalsBtn = document.querySelector('[data-equals]');

class Calculator {
    constructor(previousOperandText, currentOperandText){
        this.previousOperandText = previousOperandText;
        this.previousOperandText = currentOperandText;
    }

    showValue(valor){
        inputCalculo.value += valor;
    }

    clear(){
        inputCalculo.value = ""; 
        this.previousOperandText = "";
        this.currentOperandText = "";
    }
}

for(const number of numberBtn){
    number.addEventListener('click', () => {
        calculator.showValue(number.innerText);
    })
}

clearBtn.addEventListener('click', () => {
    calculator.clear();
})

const calculator = new Calculator(previousOperandText, currentOperandText);