const changeButton = document.getElementById('ZmienPrzycisk');
const resetButton = document.getElementById('ZresetujPrzycisk');
const text = document.getElementById('text');

changeButton.addEventListener('click', function () {
  text.textContent = 'Change of text';
});

resetButton.addEventListener('click', function () {
  text.textContent = 'Reset change';
});

const showButton = document.getElementById('showMessageBtn');
const hideButton = document.getElementById('hideMessageBtn');
const message = document.getElementById('message');

showButton.addEventListener('click', function () {
  message.textContent = 'No more secrets';
});

hideButton.addEventListener('click', function () {
  message.textContent = '';
});

const showBtn = document.getElementById('showBtn');
const hideBtn = document.getElementById('hideBtn');
const secretText = document.getElementById('secretText');

hideBtn.addEventListener('click', function () {
  secretText.classList.add('hidden');
});

showBtn.addEventListener('click', function () {
  secretText.classList.remove('hidden');
});