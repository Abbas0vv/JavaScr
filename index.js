while (true) {
    let number1 = prompt("Add your first number")
    let operator = prompt("Add your operator")
    let number2 = prompt("Add your second number")
    let total = 0;
    
    if(isValidOperator(operator)) {
        switch (operator) {
            case '+':
                console.log(addNumbers(number1, number2));
                break;
            case '-':
                console.log(minusNumbers(number1, number2));
                break;
            case '*':
                console.log(multipleNumbers(number1, number2));
                break;
            case '/':
                console.log(devideNumbers(number1, number2));
            default:
                break;
        }
    }
    else {
        console.log("Write valid operator!")
    }

    let question = prompt("Do you wanna calculate another numbers?")
    if(question === "no")
    break;
}

function isValidOperator(operator) {
    if(operator === '+' || operator === '-' || operator === '*' || operator === '/') {
        return 1;
    }

    return 0;
}

function addNumbers(number1, number2) {
    total = number1 + number2;
    return total;
}

function minusNumbers(number1, number2) {
    total = number1 - number2;
    return total;
}

function multipleNumbers(number1, number2) {
    total = number1 * number2;
    return total;
}

function devideNumbers(number1, number2) {
    total = number1 / number2;
    return total;
}