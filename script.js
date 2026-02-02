const changeButton = document.getElementById('changeTextBtn');
const resetButton = document.getElementById('resetTextBtn');
const text = document.getElementById('text');

changeButton.addEventListener('click', function () {
  text.textContent = 'Denkujeee';
});

resetButton.addEventListener('click', function () {
  text.textContent = 'Bardzo hihi';
});