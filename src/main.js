import { searchImages } from './js/pixabay-api.js';
import { showErrorMessage, renderAllCards } from './js/render-functions.js';

const refs = {
  form: document.querySelector('.form'),
  input: document.querySelector('.form-input'),
  button: document.querySelector('.form-button'),
  gallery: document.querySelector('.gallery-list'),
  loader: document.querySelector('.loader'),
};

refs.form.addEventListener('submit', handleFormSubmit);
refs.loader.style.display = 'none';

function handleFormSubmit(event) {
  event.preventDefault();
  const value = event.currentTarget.elements.search.value.trim();
  if (!value) {
    showErrorMessage('Enter some value');
    return;
  }
  renderAllCards(refs.gallery, []);
  refs.loader.style.display = 'block';
  searchImages(value)
    .then(data => {
      refs.loader.style.display = 'none';
      if (data.length === 0) {
        showErrorMessage(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      } else {
        renderAllCards(refs.gallery, data);
      }
    })
    .catch(error => {
      refs.loader.style.display = 'none';
      showErrorMessage('Sorry, something went wrong. Please try again!');
    });
}
