import axios from 'axios';

// const options = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/trending/movie/day',
//   params: { language: 'en-US' },
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDc4MmY5NDg3ODY0NDJjZjVlOGQ2Yjc2YjRhMGM1NCIsInN1YiI6IjY0MmYzMWZkMjU4ODIzMDEyNmEzZDk1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6eBnUmYFpUnv_yl9k_JLVmkzef9mjHtys81wZRx5fJA',
//   },
// };

// export const fetchTranding = async () => {
//   const { data } = await axios.request(options);
//   // .then(function (response) {
//   //   console.log(response.data);
//   // })
//   // .catch(function (error) {
//   //   console.error(error);
//   // });
//   console.log('res:', data);

//   return data;
// };
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
      // api_key: API_KEY,
      page: page,
    },
  };

  try {
    const response = await axios.get(`trending/all/day`, config);
    // console.log('response:', response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function searchMovie(searchValue) {
  const config = {
    params: {
      // api_key: API_KEY,
      query: searchValue,
      // include_adult: 'false',
      // language: 'en-US',
      page: '1',
    },
  };

  try {
    const response = await axios.get(`search/movie`, config);
    // console.log('response:', response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getMovieDetails(movie_id) {
  const config = {
    params: {
      // api_key: API_KEY,
      // language: 'en-US',
    },
  };

  try {
    const response = await axios.get(`movie/${movie_id}`, config);
    // console.log('response:', response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}
export async function getMovieCredits(movie_id) {
  const config = {
    params: {
      // api_key: API_KEY,
      // language: 'en-US',
    },
  };

  try {
    const response = await axios.get(`movie/${movie_id}/credits`, config);
    // console.log('response:', response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}
export async function getMovieReviews(movie_id) {
  const config = {
    params: {
      // api_key: API_KEY,
      // language: 'en-US',
      page: 1,
    },
  };

  try {
    const response = await axios.get(`movie/${movie_id}/reviews`, config);
    // console.log('response:', response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}
