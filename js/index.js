const btnNumber = document.querySelectorAll('[data-number]');
const btnOperator = document.querySelectorAll('[data-operator]');
const btnDelete = document.querySelector('[data-delete]')
const btnAllClear = document.querySelector('[data-all-clear]');
const btnEquals = document.querySelector('[data-equals]');

const previousOperand = document.querySelector('[data-previous-operand]'); 
const currentOperand = document.querySelector('[data-current-operand]');

class Calculator {
    constructor(previousOperand, currentOperand){
        this.previousOperand = previousOperand;
        this.currentOperand = currentOperand;
        this.clear();
    }

    clear(){
        this.previousOperand.innerText = "";
        this.currentOperand.innerText = "";
    }

    showOutput(number){
        if (this.currentOperand.innerText.includes(".") && number === ".") return;
        this.currentOperand.innerText += number;
        // identificar quando clicamos no +, - , x, dividir
    }
}

const calculator = new Calculator(previousOperand, currentOperand);

// identificar o botão que estamos clicando

for(const number of btnNumber){
    number.addEventListener('click', () => {
        calculator.showOutput(number.innerText);
    })
}

// função que deleta o valor
btnAllClear.addEventListener('click', () => {
    calculator.clear();
})