
let input = document.getElementById("screen");
let numberOne = 0;
let selectedAmal = "";
let selectedAmalOriginal = "";

function addNumber(number) {
    console.log(number);

    if (input.value.indexOf('.') !== -1 && number === '.'){

    } else {
        if (input.value === "0" && number != "." || selectedAmal.length > 0){
            input.value = number;
            selectedAmal = "";
        } else {
            input.value += number;
        }
    }
}

function action(amal){
    console.log(amal);
    selectedAmal = amal;
    selectedAmalOriginal = amal;
    numberOne = input.value;
}

function equal() {
    let numberTwo = input.value;
    let result = "";
    if (selectedAmalOriginal === "add"){
        result = parseFloat(numberOne) + parseFloat(numberTwo);
    } else if (selectedAmalOriginal === "minus"){
        result = numberOne - numberTwo;
    } else if (selectedAmalOriginal === "multiplay"){
        result = numberOne * numberTwo;
    } else if (selectedAmalOriginal === "divide"){
        result = numberOne / numberTwo;
    } else if (selectedAmalOriginal === "root"){
        result = Math.sqrt(numberOne);
    } else if (selectedAmalOriginal === "degree"){
        result = Math.pow(numberOne, numberTwo);
    } else if (selectedAmalOriginal === "delete"){
        result = input.value.slice(0,-2);
    }
    input.value = result;
}

function clearScreen() {
    selectedAmal = "";
    selectedAmalOriginal = "";
    numberOne = 0;
    input.value = 0;
}


document.addEventListener("keydown", function (event){
    if (event.keyCode === 45){
        addNumber(0);
    } else if (event.keyCode === 35){
        addNumber(1);
    } else if (event.keyCode === 40){
        addNumber(2);
    } else if (event.keyCode === 34){
        addNumber(3);
    } else if (event.keyCode === 37){
        addNumber(4);
    } else if (event.keyCode === 12){
        addNumber(5);
    } else if (event.keyCode === 39){
        addNumber(6);
    } else if (event.keyCode === 36){
        addNumber(7)
    } else if (event.keyCode === 38){
        addNumber(8);
    } else if (event.keyCode === 33){
        addNumber(9);
    } else if (event.keyCode === 107){
        addNumber('add');
    } else if (event.keyCode === 109){
        addNumber('minus');
    } else if (event.keyCode === 106){
        addNumber('multiplay');
    } else if (event.keyCode === 111){
        addNumber('divide');
    } else if (event.keyCode === 13){
        equal();
    } else if (event.keyCode === 32){
        clearScreen();
    }
})