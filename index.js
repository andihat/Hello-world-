
const interestRate = 0.3;

let one = 1;

let isTrue;

isTrue = false;

let person = {
    name: 'Andi',
    age: 20
};

person.name = "NotAndi"

console.log(person.name);

if (typeof isTrue == "boolean") {

    console.log(interestRate + one);

}else if (typeof isTrue != "boolean"){
    console.log("isTrue isn't a boolean")
}

let selectedColors = ["blue", "red"];
selectedColors[2] = 1;
console.log(selectedColors.length);


let firstName = "Andi";
console.log(firstName);

greet("john");

function greet(name){
    console.log("123 " + name)
}

let firstNum;
let secondNum;



document.getElementById("divide").onclick = function(){

    firstNum = document.getElementById("firstNum").value;
    secondNum = document.getElementById("secondNum").value;

    if (isNaN(firstNum) | isNaN(secondNum) ) {
        window.alert("please enter some numbers");
    }
    else if (isNaN(firstNum) == false | isNaN(secondNum) == false ) {
        firstNumber = parseFloat(document.getElementById("firstNum").value);
        secondNumber = parseFloat(document.getElementById("secondNum").value);

        document.getElementById("result").innerHTML = "Result = " + firstNumber/secondNum;
    }

    

}

document.getElementById("add").onclick = function(){

    firstNum = parseFloat(document.getElementById("firstNum").value);
    secondNum = parseFloat(document.getElementById("secondNum").value);

    if (isNaN(firstNum) | isNaN(secondNum) ) {
        window.alert("please enter some numbers");
    }
    else if (isNaN(firstNum) == false | isNaN(secondNum) == false ) {
        firstNumber = parseFloat(document.getElementById("firstNum").value);
        secondNumber = parseFloat(document.getElementById("secondNum").value);

        document.getElementById("result").innerHTML = "Result = " + (firstNumber+secondNum);
    }

}

document.getElementById("multiply").onclick = function(){

    firstNum = parseFloat(document.getElementById("firstNum").value);
    secondNum = parseFloat(document.getElementById("secondNum").value);

    if (isNaN(firstNum) | isNaN(secondNum) ) {
        window.alert("please enter some numbers");
    }
    else if (isNaN(firstNum) == false | isNaN(secondNum) == false ) {
        firstNumber = parseFloat(document.getElementById("firstNum").value);
        secondNumber = parseFloat(document.getElementById("secondNum").value);

        document.getElementById("result").innerHTML = "Result = " + firstNumber*secondNum;
    }

}

document.getElementById("subtract").onclick = function(){

    firstNum = parseFloat(document.getElementById("firstNum").value);
    secondNum = parseFloat(document.getElementById("secondNum").value);

    if (isNaN(firstNum) | isNaN(secondNum) ) {
        window.alert("please enter some numbers");
    }
    else if (isNaN(firstNum) == false | isNaN(secondNum) == false ) {
        firstNumber = parseFloat(document.getElementById("firstNum").value);
        secondNumber = parseFloat(document.getElementById("secondNum").value);

        document.getElementById("result").innerHTML = "Result = " + (firstNumber-secondNum);
    }

}



