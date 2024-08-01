const body = document.querySelector("body");
const colorValue = document.querySelector("#bg-hex-code");
const btn = document.querySelector("#btn");

const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
];

function getRandomIndex() {
    return Math.floor(Math.random() * darkColorsArr.length);
}

function formatNumberToTwoDigits(num) {
    return num.toString().padStart(2,'0');
}

function generateTwoDigitsRandomNumber() {
    return formatNumberToTwoDigits(Math.floor(Math.random() * 100));
}

// version 1 
function getRandomDarkColorsArr () {
    return darkColorsArr[getRandomIndex()];
}

// version 2 fully random colors
function getRandomColor () {
    const red = generateTwoDigitsRandomNumber();
    const green = generateTwoDigitsRandomNumber();
    const blue = generateTwoDigitsRandomNumber();

    return `#${red}${green}${blue}`
}

function changeBackgroundColor() {
    const color = getRandomColor();
    colorValue.innerText = color;
    body.style.backgroundColor = color;
}

btn.onclick = changeBackgroundColor;