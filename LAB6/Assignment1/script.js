const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
const clearButton = document.querySelector('.clear');
let value1 , value2
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === '=') {
            try {
                display.value = eval(display.value); // Evaluate the expression
            } catch {
                display.value = 'Error';
            }
        } else {
           display.value += value;
            
        }
    });
});

clearButton.addEventListener('click', () => {
    display.value = ''; // Clear the display
});
