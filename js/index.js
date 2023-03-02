'use strict'

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

    chooseOperation(){    
        let operation = "";
    
        if(previousOperand.innerText.includes("+")){
            operation = '+';
        } else if (previousOperand.innerText.includes("-")){
            operation = '-';
        } else if (previousOperand.innerText.includes("x")){
            operation = 'x';
        } else {
            operation = '÷';
        }

        this.calculate(operation);
    }

    calculate(operation){
        const _previousOperand = parseFloat(this.previousOperand.innerText);
        const _currentOperand = parseFloat(this.currentOperand.innerText);

        switch(operation){
            case '+':
                this.previousOperand.innerText = `${_previousOperand} + ${_currentOperand} =`;
                this.currentOperand.innerText = _previousOperand + _currentOperand;
            break;
            case '-':
                this.previousOperand.innerText = `${_previousOperand} - ${_currentOperand} =`;
                this.currentOperand.innerText = _previousOperand - _currentOperand;
            break;
            case 'x':
                this.previousOperand.innerText = `${_previousOperand} x ${_currentOperand} =`;
                this.currentOperand.innerText = _previousOperand * _currentOperand;
            break;
            case '÷':
                this.previousOperand.innerText = `${_previousOperand} ÷ ${_currentOperand} =`;
                this.currentOperand.innerText = _previousOperand / _currentOperand;
            break;
        }
    }

    delete(){
        this.currentOperand.innerText = this.currentOperand.innerText.toString().slice(0, -1);
    }
}

const calculator = new Calculator(previousOperand, currentOperand);

for(const button of buttons){
    button.addEventListener('click', () => {
        calculator.showOutput(button.innerText);
    })
}

btnAllClear.addEventListener('click', () => {
    calculator.clear();
})

btnEquals.addEventListener('click', () => {
    calculator.chooseOperation();
})

btnDelete.addEventListener('click', () => {
    calculator.delete();
})