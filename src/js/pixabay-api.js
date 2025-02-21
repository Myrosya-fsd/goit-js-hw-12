import axios from 'axios';

const API_KEY = '48845906-64ae9219885c1d872e65b26b8';
const BASE_URL = 'https://pixabay.com/api/';

export async function searchImages(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 15,
    page,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
