import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '33135653-4734ab6feb6e20c316e4b7aea';

export async function getImagesByQuery(query, page) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        page,
        per_page: 15,
        safesearch: true,
      },
    });

    return response.data;
  } catch (error) {
    iziToast.error({
      message: 'Error fetching data. Please try again later.',
      titleColor: '#FFFFFF',
      messageColor: '#FFFFFF',
      color: '#B51B1B',
      position: 'topRight',
    });
    return { hits: [], totalHits: 0 };
  }
}
