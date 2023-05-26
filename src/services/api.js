import axios from 'axios';
import { Notify } from 'notiflix';

const API_KEY = '70782f948786442cf5e8d6b76b4a0c54';
const BASE_URL = 'https://api.themoviedb.org/3/';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  include_adult: 'false',
  language: 'en-US',
};

export async function fetchTrending(page = 1) {
  const config = {
    params: {
      page: page,
    },
  };

  try {
    const response = await axios.get(`trending/all/day`, config);
    return response.data;
  } catch (error) {
    Notify.failure(error.message);
  }
}

export async function searchMovie(searchValue) {
  const config = {
    params: {
      query: searchValue,
    },
  };

  try {
    const response = await axios.get(`search/movie`, config);
    return response.data;
  } catch (error) {
    Notify.failure(error.message);
  }
}

export async function getMovieDetails(movie_id) {
  try {
    const response = await axios.get(`movie/${movie_id}`);
    return response.data;
  } catch (error) {
    Notify.failure(error.message);
  }
}
export async function getMovieCredits(movie_id) {
  const config = {
    params: {},
  };

  try {
    const response = await axios.get(`movie/${movie_id}/credits`, config);

    return response.data;
  } catch (error) {
    Notify.failure(error.message);
  }
}
export async function getMovieReviews(movie_id) {
  const config = {
    params: {
      page: 1,
    },
  };

  try {
    const response = await axios.get(`movie/${movie_id}/reviews`, config);

    return response.data;
  } catch (error) {
    Notify.failure(error.message);
  }
}
