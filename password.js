let passwordDisplay = document.querySelector('.password');
let copyBtn = document.querySelector('.copy');
let lengthSlider = document.querySelector('input[type="range"]');
let lengthLabel = document.querySelector('.length span');
let generateBtn = document.querySelector('.generatebtn');

let uppercaseEl = document.getElementById('uppercase');
let lowercaseEl = document.getElementById('lowercase');
let numbersEl = document.getElementById('numbers');
let symbolsEl = document.getElementById('symnols');

let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowercase = 'abcdefghijklmnopqrstuvwxyz';
let numbers = '0123456789';
let symbols = '!@#$%^&*()_+=[]{}|;:,.<>?/`~';

lengthSlider.addEventListener('input', function () {
  lengthLabel.textContent = lengthSlider.value;
});

generateBtn.addEventListener('click', function () {
  let length = Number(lengthSlider.value);
  let characters = '';
  if (uppercaseEl.checked) characters += uppercase;
  if (lowercaseEl.checked) characters += lowercase;
  if (numbersEl.checked) characters += numbers;
  if (symbolsEl.checked) characters += symbols;

  if (characters === '') {
    passwordDisplay.textContent = 'Select at least one option';
    return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  passwordDisplay.textContent = password;
});

copyBtn.addEventListener('click', function () {
  let password = passwordDisplay.textContent;
  if (password && !password.includes('Select')) {
    navigator.clipboard.writeText(password);
    copyBtn.textContent = 'Copied!';
    setTimeout(function () {
      copyBtn.textContent = '';
    }, 1500);
  }
});
