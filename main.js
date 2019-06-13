const form = document.querySelector('#myInput');
const liste = document.querySelector('#liste');
const bouton = document.querySelector('#bouton');
const oups = document.querySelector('#oups');

const createListe = (inputValue) => {
  const li = document.createElement('li');
  const text = document.createTextNode(inputValue);
  li.appendChild(text);
  liste.appendChild(li);
};

bouton.addEventListener('click', (event) => {
  event.preventDefault();
  const value = form.value;
  createListe(value);
  form.value = '';
});

oups.addEventListener('click', (event) => {
  liste.innerHTML = '';
});
