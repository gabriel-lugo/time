window.addEventListener('DOMContentLoaded', main);

let timeoutRef;

function main() {
    // Start på programmet

    timeoutRef = setTimeout(changeBackgroundColor, 2000);
    addEventListeners();
}

function changeBackgroundColor() {
    document.body.style.background = "lightblue"
}

function addEventListeners() {
    const button = document.getElementById("cancel");
    button.addEventListener('click', cancelBackgroundChange);
}

function cancelBackgroundChange() {
    clearTimeout(timeoutRef);
}




// setTimeout(printHello, 5000) // Kör funktionen efter 1 sekund. "Callback"-funktion
// setInterval(printHello, 2000, 3) // Kör funktionen varje 1 sekund

// console.log("Wait for it...")

// function printHello() {
    // console.log("Hello Friends!")
// }