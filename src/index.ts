import lib from './lib/Cargo.toml';

const DISPLAY_ID = 'messageDisplay';
const FORM_ID = 'nameForm';
const NAME_INPUT_ID = 'nameInput';

const form = document.getElementById(FORM_ID);
const nameInput = document.getElementById(NAME_INPUT_ID);
const display = document.getElementById(DISPLAY_ID);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = lib.hello(nameInput.value);
    display.innerHTML = `
    <p class="text-gray-800">${message}</p>
    `;
});
