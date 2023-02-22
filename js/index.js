// pega os elementos que vamos mexer
function calculadora(){
    const inputCalculo = document.querySelector('.calc');
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            inputCalculo.value += button.value;

            deletaNumero(button);
        })
    })

    const deletaNumero = (btn) => {
        if(btn.value === 'C') inputCalculo.value = "";
    }
}

calculadora();

// Ter o evento de clique em cada um dos botões através do forEach
// Descobrir se o botão é uma operação ou não
