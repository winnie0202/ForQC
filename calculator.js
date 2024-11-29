// Basic Calculator

const readline = require("readline");

// Initialize readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Basic Calculator");
console.log("Operations: +, -, *, /");
console.log("Type 'exit' to quit.");

rl.on("line", (input) => {
    if (input.toLowerCase() === "exit") {
        console.log("Goodbye!");
        rl.close();
        return;
    }

    const [a, operator, b] = input.split(" ");
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Invalid input. Please enter in format: number operator number");
        return;
    }

    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
	    if (num2 === 0) {
	        console.log("Error: Division by zero is not allowed.");
	        return;
	    }
	    result = num1 / num2;
    	break;

        default:
            console.log("Invalid operator. Use +, -, *, or /.");
            return;
    }

    console.log(`Result: ${result}`);
});
