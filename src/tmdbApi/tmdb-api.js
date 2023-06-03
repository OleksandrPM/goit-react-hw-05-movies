const ORIGIN = 'https://api.themoviedb.org/3/';
const API_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODRhNTAzMjMxNWZiYTc1ZjI0MGI3NDVjYTdjYzBhZiIsInN1YiI6IjY0NzBiZWJlMzM2ZTAxMDBlODBjNTYyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f2kRYsL7gY4sDbVFKpKd_M1rnGrppV5NDL6eESs9EQU';

const urlParams = {
  BASE_URL: 'https://image.tmdb.org/t/p/',
  POSTER_SIZE: 'w500',
  PHOTO_SIZE: 'w300',
};

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: API_TOKEN,
  },
};

const requestParametersTrending = {
  pathname: 'trending/movie/day',
  queries: { language: 'en-US' },
};

const requestParametersMovie = {
  pathname: 'search/movie',
  queries: {
    query: '',
    include_adult: false,
    language: 'en-US',
    page: 1,
  },
};

const requestParametersDetails = {
  pathname: '',
  queries: { language: 'en-US' },
};

const requestParametersCast = {
  pathname: '',
  queries: { language: 'en-US' },
};

const requestParametersReviews = {
  pathname: '',
  queries: { language: 'en-US', page: 1 },
};

async function getTrending() {
  const url = buildUrlString(requestParametersTrending);
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (err) {
    return console.error(err);
  }
}

async function getMovies(query) {
  requestParametersMovie.queries.query = query;
  const url = buildUrlString(requestParametersMovie);
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (err) {
    return console.error(err);
  }
}

async function getDetails(id) {
  requestParametersDetails.pathname = `movie/${id}`;
  const url = buildUrlString(requestParametersDetails);
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (err) {
    return console.error(err);
  }
}

async function getCast(id) {
  requestParametersCast.pathname = `movie/${id}/credits`;
  const url = buildUrlString(requestParametersCast);
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (err) {
    return console.error(err);
  }
}

async function getReviews(id) {
  requestParametersReviews.pathname = `movie/${id}/reviews`;
  const url = buildUrlString(requestParametersReviews);
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (err) {
    return console.error(err);
  }
}

function buildUrlString(requestParameters) {
  const { pathname, queries } = requestParameters;
  const queriesString = buildQueryString(queries);
  return `${ORIGIN}${pathname}?${queriesString}`;
}

function buildQueryString(queries) {
  return Object.keys(queries)
    .map(key => {
      return `${key}=${queries[key]}`;
    })
    .join('&');
}

export { getTrending, getMovies, getDetails, getCast, getReviews, urlParams };
