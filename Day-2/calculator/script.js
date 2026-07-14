const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// Calculate Result
function calculate() {
    try {
        const expression = display.value;

        if (/[\+\-\*\/]{2,}/.test(expression)) {
            display.value = "Invalid Expression";
            return;
        }

        const result = eval(expression);

        if (isNaN(result)) {
            display.value = "Result is undefined";
        }
        else if (!isFinite(result)) {
            display.value = "Cannot divide by 0";
        }
        else {
            display.value = result;
        }

    } catch {
        display.value = "Error";
    }
}

// Handle Input
function handleInput(value) {

    // Reset after errors
    if (
        display.value === "Error" ||
        display.value === "Invalid Expression" ||
        display.value === "Cannot divide by 0" ||
        display.value === "Result is undefined"
    ) {
        display.value = "0";
    }

    const operators = ["+", "-", "*", "/", "%"];

    // Initial state = 0
    if (display.value === "0") {

        // Keep single zero
        if (value === "0") {
            return;
        }

        // Allow expressions like 0+5
        if (operators.includes(value)) {
            display.value += value;
            return;
        }

        // Replace 0 with entered number
        display.value = value;
        return;
    }

    display.value += value;
}

// Button Click Events
buttons.forEach(button => {
    button.addEventListener("click", () => {

        const value = button.textContent;

        // Clear
        if (value === "C") {
            display.value = "0";
        }

        // Backspace
        else if (value === "⌫") {
            display.value = display.value.slice(0, -1);

            if (display.value === "") {
                display.value = "0";
            }
        }

        // Calculate
        else if (value === "=") {
            calculate();
        }

        // Normal input
        else {
            handleInput(value);
        }
    });
});

// Keyboard Support
document.addEventListener("keydown", (event) => {

    const key = event.key;

    if (
        (key >= "0" && key <= "9") ||
        ["+", "-", "*", "/", ".", "%"].includes(key)
    ) {
        handleInput(key);
    }

    else if (key === "Enter") {
        calculate();
    }

    else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);

        if (display.value === "") {
            display.value = "0";
        }
    }

    else if (key === "Escape") {
        display.value = "0";
    }
});