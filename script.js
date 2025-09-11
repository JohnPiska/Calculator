let firstOperand = 0;
let secondOperand = 0;
let operator = '';
const text = document.querySelector('.text');

function operate(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch(operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
    }
};

function calculateIfReady() {
    if(firstOperand !== '' && secondOperand !== '' && operator) {
        firstOperand = operate(firstOperand, secondOperand, operator).toString();
        secondOperand = '';
        text.innerHTML = firstOperand;
    }
}

const buttons = document.getElementsByClassName('button');

for (let button of buttons) {
    button.addEventListener("click", (event) => {
        const id = event.target.id;

        if (id >= '0' && id <= '9') {
            if(!operator){
                firstOperand += id;
                text.innerHTML = firstOperand;
                if (firstOperand.length > 0 && firstOperand[0] === '0'){
                    firstOperand = firstOperand.slice(1);
                }

            }
            else {
                secondOperand += id;
                text.innerHTML = secondOperand;
                if (secondOperand.length > 0 && secondOperand[0] === '0'){
                    secondOperand = secondOperand.slice(1);
                }
            }
        }
        else if(['+', '-', '*', '/'].includes(id)) {
            calculateIfReady();
            operator = id;
        }
        else if(id === "="){
            calculateIfReady();
            operator = id;
        }
        else if (id === 'clear') {
            firstOperand = '';
            secondOperand = '';
            operator = '';
            text.innerHTML = '0';
        }
    });
}   

