const changeButton = document.getElementById('changeTextBtn');
const resetButton = document.getElementById('resetTextBtn');
const text = document.getElementById('text');

changeButton.addEventListener('click', function () {
  text.textContent = 'Denkujeee';
});

resetButton.addEventListener('click', function () {
  text.textContent = 'Bardzo hihi';
});

const showButton = document.getElementById('showMessageBtn');
const hideButton = document.getElementById('hideMessageBtn');
const message = document.getElementById('message');

showButton.addEventListener('click', function () {
  message.textContent = 'Wiadomość została pokazana!';
});

hideButton.addEventListener('click', function () {
  message.textContent = '';
});