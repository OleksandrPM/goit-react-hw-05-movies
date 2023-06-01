export { getTrending, getMovies, getDetails };

const ORIGIN = 'https://api.themoviedb.org/3/';
const API_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODRhNTAzMjMxNWZiYTc1ZjI0MGI3NDVjYTdjYzBhZiIsInN1YiI6IjY0NzBiZWJlMzM2ZTAxMDBlODBjNTYyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f2kRYsL7gY4sDbVFKpKd_M1rnGrppV5NDL6eESs9EQU';

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
  addId: function (id) {
    this.pathname += `/${id}`;
  },
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
