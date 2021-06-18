let error = 'Error! Enter the numbers';

let addition = () => {
    let firstNumber = document.getElementById("firstnumber").value;
    let secondNumber = document.getElementById("secondnumber").value;
    let n1 = parseFloat(firstNumber);
    let n2 = parseFloat(secondNumber);
    if (Number.isNaN(n1) || Number.isNaN(n2)) {
        document.getElementById('result').value = error;
        return;
    }
    document.getElementById('result').value = Calculator.sum(n1, n2);
    document.getElementById('firstnumber').value = "";
    document.getElementById('secondnumber').value = "";
}

let subtraction = () => {
    let firstNumber = document.getElementById("firstnumber").value;
    let secondNumber = document.getElementById("secondnumber").value;
    let n1 = parseFloat(firstNumber);
    let n2 = parseFloat(secondNumber);
        if (Number.isNaN(n1) || Number.isNaN(n2)) {
            document.getElementById('result').value = error;
            return;
        }
    document.getElementById('result').value = Calculator.sub(n1, n2);
    document.getElementById('firstnumber').value = "";
    document.getElementById('secondnumber').value = "";
    }

let multiplication = () => {
    let firstNumber = document.getElementById("firstnumber").value;
    let secondNumber = document.getElementById("secondnumber").value;
    let n1 = parseFloat(firstNumber);
    let n2 = parseFloat(secondNumber);
        if (Number.isNaN(n1) || Number.isNaN(n2)) {
            document.getElementById('result').value = error;
            return;
        }
    document.getElementById('result').value = Calculator.mul(n1, n2);
    document.getElementById('firstnumber').value = "";
    document.getElementById('secondnumber').value = "";
    }

let division = () => {
    let firstNumber = document.getElementById("firstnumber").value;
    let secondNumber = document.getElementById("secondnumber").value;
    let n1 = parseFloat(firstNumber);
    let n2 = parseFloat(secondNumber);
        if (Number.isNaN(n1) || Number.isNaN(n2)) {
            document.getElementById('result').value = error;
            return;
        }
        if (n2 != 0) {
            document.getElementById('result').value = Calculator.div(n1, n2);
        }
        else {
            document.getElementById('result').value = "На ноль делить нельзя!";
        }
        document.getElementById('firstnumber').value = "";
        document.getElementById('secondnumber').value = "";
    }


    class Calculator {
        static sum(firstNumber, secondNumber) {
            return firstNumber + secondNumber;
        }

        static sub(firstNumber, secondNumber) {
            return firstNumber - secondNumber;
        }

        static mul(firstNumber, secondNumber) {
            return firstNumber * secondNumber;
        }

        static div(firstNumber, secondNumber) {
            return firstNumber / secondNumber;
        }

        }