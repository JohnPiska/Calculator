function add(a, b) {
    console.log(a + b);
};

function substract(a, b) {
    console.log(a - b);
};

function multiply(a, b) {
    console.log(a * b);
};

function divide(a, b) {
    console.log(a / b);
};

function operate() {
    let userPromt = prompt("Введите пример!");
    let problem = userPromt.split('');
    let a = parseInt(problem[0]);
    let b = parseInt(problem[2]);
    let operator = problem[1];

    switch(operator) {
        case '+':
            add(a,b);
            break;
        case '-':
            substract(a, b);
            break;
        case '*':
            multiply(a, b);
            break;
        case '/':
            divide(a, b);
            break;
        default:
            console.log("Wrong operator!")
    }
};

operate();
