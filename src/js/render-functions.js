import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const litebox = new SimpleLightbox('.gallery-list a', {
  captionsData: 'alt',
  captionDelay: 5000,
});

export const showErrorMessage = message => {
  iziToast.error({
    message,
    position: 'topRight',
    maxWidth: 432,
  });
};

export function renderAllCards(element, images) {
  const markup = createAllCardsMarkup(images);
  element.innerHTML = markup;
  litebox.refresh();
}

export function createAllCardsMarkup(images) {
  return images.map(createCardMarkup).join('');
}

export function createCardMarkup(image) {
  return `<li class="gallery-item">
            <a href="${image.largeImageURL}" class="gallery-link">
              <img
                class="card-image"
                src="${image.webformatURL}"
                alt="${image.tags}"
                data-source="${image.largeImageURL}"
              />
              <div class="card-texts">
                <div class="card-text-element likes">
                  <p class="element-title">Likes</p>
                  <p class="element-value">${image.likes}</p>
                </div>
                <div class="card-text-element views">
                  <p class="element-title">Views</p>
                  <p class="element-value">${image.views}</p>
                </div>
                <div class="card-text-element comments">
                  <p class="element-title">Comments</p>
                  <p class="element-value">${image.comments}</p>
                </div>
                <div class="card-text-element downloads">
                  <p class="element-title">Downloads</p>
                  <p class="element-value">${image.downloads}</p>
                </div>
              </div>
            </a>
          </li>`;
}
