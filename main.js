setTimeout(printHello, 5000) // Kör funktionen efter 1 sekund. "Callback"-funktion
// setInterval(printHello, 2000, 3) // Kör funktionen varje 1 sekund

console.log("Wait for it...")

function printHello() {
    console.log("Hello Friends!")
}