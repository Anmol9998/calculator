const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const buttonText = event.target.innerText;

        if (buttonText === '=') {
            currentInput = currentInput === '' ? '0' : currentInput;
            try {
                currentInput = String(eval(currentInput));
                display.value = currentInput;
            } catch (err) {
                display.value = "Error (Press AC)";
            }
        } else if (buttonText === 'AC') {
            currentInput = '';
            display.value = '0';
        } else if (buttonText === 'DEL') {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput || '0';
        } else if (event.target.id === 'toggleSign') {
            currentInput = String(-eval(currentInput));
            display.value = currentInput;
        } else {
            currentInput += buttonText;
            display.value = currentInput;
        }
    });
});
