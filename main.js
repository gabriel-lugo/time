window.addEventListener('DOMContentLoaded', main);

let timeoutRef;

function main() {
    // Start på programmet

    timeoutRef = setTimeout(changeBackgroundColor, 2000);
    setupEventListeners();
}

function changeBackgroundColor() {
    document.body.style.background = getRandomColor();
}

function setupEventListeners() {
    const cancelTimeoutButton = document.getElementById("cancel");
    cancelTimeoutButton.addEventListener('click', cancelBackgroundChange);

    const startIntervalButton = document.getElementById("start-interval");
    startIntervalButton.addEventListener('click', startBackgroundChangeInterval);
}

function cancelBackgroundChange() {
    clearTimeout(timeoutRef);
}

function startBackgroundChangeInterval() {
    setInterval(changeBackgroundColor, 200);
}

function getRandomColor() {
    const value = Math.random();

    if (value < 0.2) {
        return "blue";
    } else if (value < 0.4) {
        return "red";
    } else if (value < 0.6 ) {
        return "green";
    } else if (value < 0.8) {
        return "grey";
    } else {
        return "pink";
    }


}



// setTimeout(printHello, 5000) // Kör funktionen efter 1 sekund. "Callback"-funktion
// setInterval(printHello, 2000, 3) // Kör funktionen varje 1 sekund

// console.log("Wait for it...")

// function printHello() {
    // console.log("Hello Friends!")
// }