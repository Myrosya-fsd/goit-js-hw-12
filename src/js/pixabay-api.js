import axios from 'axios';

const API_KEY = '48845906-64ae9219885c1d872e65b26b8';
const BASE_URL = 'https://pixabay.com/api/';

export function searchImages(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };
  return axios
    .get(BASE_URL, { params })
    .then(response => {
      return response.data.hits;
    })
    .catch(error => {
      console.log(error);
    });
}
