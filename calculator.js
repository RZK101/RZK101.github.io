// Calculator Logic with Subscription Redirect

let displayValue = '0';
const display = document.getElementById('display');

function updateDisplay() {
    display.value = displayValue;
}

function appendNumber(num) {
    if (displayValue === '0' && num !== '.') {
        displayValue = num;
    } else {
        displayValue += num;
    }
    updateDisplay();
}

function appendOperator(operator) {
    const lastChar = displayValue.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
        displayValue = displayValue.slice(0, -1) + operator;
    } else {
        displayValue += operator;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function calculateResult() {
    try {
        // Evaluate the expression safely
        const result = eval(displayValue);
        
        // Show result briefly then redirect to subscription page
        displayValue = result.toString();
        updateDisplay();
        
        // Redirect to subscription page after a short delay
        setTimeout(() => {
            window.location.href = 'subscription.html';
        }, 500);
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
        setTimeout(() => {
            displayValue = '0';
            updateDisplay();
        }, 1500);
    }
}

// Keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    if (/[0-9]/.test(key)) {
        appendNumber(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
        appendOperator(key);
    } else if (key === '.') {
        appendNumber('.');
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculateResult();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearDisplay();
    } else if (key === 'Backspace') {
        displayValue = displayValue.slice(0, -1);
        if (displayValue === '') {
            displayValue = '0';
        }
        updateDisplay();
    }
});
