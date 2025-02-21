import { searchImages } from './js/pixabay-api.js';
import {
  showErrorMessage,
  renderAllCards,
  renderAppendCards,
} from './js/render-functions.js';

const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery-list'),
  loader: document.querySelector('.loader'),
  more: document.querySelector('.load-more'),
};

refs.form.addEventListener('submit', handleFormSubmitAsync);
refs.more.addEventListener('click', handleLoadMoreClick);
refs.loader.style.display = 'none';

let searchQuery = '';
let page = 1;

async function handleFormSubmitAsync(event) {
  event.preventDefault();
  const value = event.currentTarget.elements.search.value.trim();
  if (!value) {
    showErrorMessage('Enter some value');
    return;
  }
  searchQuery = value;
  page = 1;
  renderAllCards(refs.gallery, []);
  refs.loader.style.display = 'block';
  try {
    const data = await searchImages(value);
    if (data.hits.length === 0) {
      showErrorMessage(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    } else {
      renderAllCards(refs.gallery, data.hits);
      if (data.hits.length < 15) {
        showErrorMessage(
          "We're sorry, but you've reached the end of search results."
        );
      } else {
        refs.more.style.display = 'block';
      }
    }
  } catch (error) {
    showErrorMessage('Sorry, something went wrong. Please try again!');
  } finally {
    refs.loader.style.display = 'none';
  }
}

async function handleLoadMoreClick() {
  page += 1;
  refs.loader.style.display = 'block';
  refs.more.style.display = 'none';
  try {
    const data = await searchImages(searchQuery, page);
    if (data.hits.length < 15 || page * 15 > data.totalHits) {
      showErrorMessage(
        "We're sorry, but you've reached the end of search results."
      );
    } else {
      refs.more.style.display = 'block';
    }
    renderAppendCards(refs.gallery, data.hits);
    window.scrollBy({
      top: getCardHeight(),
      behavior: 'smooth',
    });
  } catch (error) {
    showErrorMessage('Sorry, something went wrong. Please try again!');
  } finally {
    refs.loader.style.display = 'none';
  }
}

function getCardHeight() {
  const card = document.querySelector('.gallery-item:nth-child(1)');
  const rect = card.getBoundingClientRect();
  return rect.height * 2;
}
