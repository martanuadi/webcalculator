let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

//--01----------CALC SCREEN & UPDATE-------------------
const calcScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
    calcScreen.value = number;
}


//--02----------OPERATORS EVENTS-------------------
const operators = document.querySelectorAll(".operator");

operators.forEach( (operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    });
    
});

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    };
    
    calculationOperator = operator;
    currentNumber = '0';
}

//--03----------NUMBER EVENTS-------------------
const numbers = document.querySelectorAll(".number");

numbers.forEach(number => {
    number.addEventListener('click', (event) => {
        inputNumber(event.target.value); 
        updateScreen(currentNumber); 
    }); 
});

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number 
    }
}

//--04----------CALCULATION-------------------
const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
});

const calculate = () => {
    let result ='';
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break
        default:
            return
    }
    currentNumber = result;
    calculationOperator = '';

}

//--05----------All Clear BUTTON-------------------
const clearBtn = document.querySelector(".all-clear");

const clear = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '';
}

clearBtn.addEventListener('click', () => {
    clear();
    updateScreen(currentNumber);
});

//--06----------DECIMALS-------------------
const decimal = document.querySelector(".decimal");

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
});

inputDecimal = (dot) => {
    if(currentNumber.includes(".")) {
        return
    } 
    currentNumber += dot
}

//--07----------PERCENTAGE-------------------
const percent = document.querySelector(".percentage");

clearBtn.addEventListener('click', () => {
    currentNumber = '';
    updateScreen(currentNumber);
});

/* by marta */
