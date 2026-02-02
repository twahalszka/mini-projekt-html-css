const button = document.getElementById('changeTextBtn');
const text = document.getElementById('text');

button.addEventListener('click', function () {
  text.textContent = 'Tekst został zmieniony!';
});
