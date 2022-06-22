const operator = prompt("Enter operator (+, -, *, /, %): ");

const number1 =parseFloat(prompt("Enter No1: "));
const number2 =parseFloat(prompt("Enter No2: "));

let result;

if  (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else if (operator == '/') {
    result = number / number2;
}
else {
    result = number1 % number2
}

// console.log(prompt('${number1} ${operator} ${number2} = ${result}'));
window.alert("Result is "+ result)
