// Get Information - Step One
function getValues() {

    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;


    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {

        let fbValues = fizzBuzzA(fizzValue, buzzValue);

        displayValues(fbValues);

    } else {
        alert("You must enter integers!");
    }

}

// Business logic layer - Model
function fizzBuzzA(fizz, buzz) {

    // Create an array
    let fbValues = [];

    for (let i = 1; i <= 100; i++) {

        if (i % fizz == 0 && i % buzz == 0) {
            fbValues.push('FizzBuzz');
        } else if (i % fizz == 0) {
            fbValues.push('Fizz');
        } else if (i % buzz == 0) {
            fbValues.push('Buzz');
        } else {
            fbValues.push(i);
        }
    }

    return fbValues;
}

function displayValues(fbValues) {

    let element = document.getElementById("results");

    element.innerHTML = "";

    for (let index = 0; index < fbValues.length; index++) {

        let item = document.createElement("div");
        item.classList.add("col");

        item.innerHTML = fbValues[index];

        if (fbValues[index] == 'Fizz') {
            item.classList.add('fizz');

        } else if (fbValues[index] == 'Buzz') {
            item.classList.add('buzz');
            
        } else if (fbValues[index] == 'FizzBuzz') {
            item.classList.add('fizzBuzz');
        }

        element.appendChild(item);

    }

}