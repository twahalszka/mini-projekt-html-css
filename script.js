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


const toggleBtn = document.getElementById('toggleBtn');
const secretText = document.getElementById('secretText');

toggleBtn.addEventListener('click', function () {
  secretText.classList.toggle('hidden');
});

const colorBtn = document.getElementById('colorBtn');
const box = document.getElementById('box');

colorBtn.addEventListener('click', function () {
  box.classList.toggle('blue');
});
