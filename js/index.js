const buttons = document.querySelectorAll('[data-button]')
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

    showOutput(button){
        if (this.currentOperand.innerText.includes(".") && button === ".") return;
        this.currentOperand.innerText += button;

        const operations = ["+", "-", "x", "÷"];
    
        for(const operation of operations){
            if(this.currentOperand.innerText.includes(operation)){
                this.previousOperand.innerText = `${this.currentOperand.innerText} `;
                this.currentOperand.innerText = "";       
            }
        }
    }

    calculate(){
        const _previousOperand = parseFloat(this.previousOperand.innerText);
        const _currentOperand = parseFloat(this.currentOperand.innerText);

        if(previousOperand.innerText.includes("+")){
            this.previousOperand.innerText = `${_previousOperand} + ${_currentOperand} =`;
            this.currentOperand.innerText = _previousOperand + _currentOperand;
        }

        if(previousOperand.innerText.includes("-")){
            this.previousOperand.innerText = `${_previousOperand} - ${_currentOperand} =`;
            this.currentOperand.innerText = _previousOperand - _currentOperand;
        }

        if(previousOperand.innerText.includes("x")){
            this.previousOperand.innerText = `${_previousOperand} x ${_currentOperand} =`;
            this.currentOperand.innerText = _previousOperand * _currentOperand;
        }

        if(previousOperand.innerText.includes("÷")){
            this.previousOperand.innerText = `${_previousOperand} ÷ ${_currentOperand} =`;
            this.currentOperand.innerText = _previousOperand / _currentOperand;
        }
    }
}

const calculator = new Calculator(previousOperand, currentOperand);

for(const button of buttons){
    button.addEventListener('click', () => {
        calculator.showOutput(button.innerText);
    })
}

// função que deleta o valor
btnAllClear.addEventListener('click', () => {
    calculator.clear();
})

btnEquals.addEventListener('click', () => {
    calculator.calculate();
})