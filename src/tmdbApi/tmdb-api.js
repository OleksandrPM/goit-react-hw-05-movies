import axios from 'axios';

const ORIGIN = 'https://api.themoviedb.org/3/';
const API_KEY = 'b84a5032315fba75f240b745ca7cc0af';

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

async function getTMDBResponse(requestParameters) {
  const URL = buildUrlString(requestParameters);

  try {
    const response = await axios.get(URL);
    const data = response.data;

    // const pagesAmount = Math.ceil(
    //   images.totalHits / requestParameters.per_page
    // );

    // if (requestParameters.page === pagesAmount || pagesAmount === 0) {
    //   requestParameters.page = 1;
    // } else {
    //   requestParameters.page += 1;
    // }

    return data;
  } catch (error) {
    console.log(error);
  }
}

function buildUrlString(requestParameters) {
  const { pathname, queries } = requestParameters;
  const queriesString = buildQueryString(queries);
  return `${ORIGIN}${pathname}?api_key=${API_KEY}&${queriesString}`;
}

function buildQueryString(queries) {
  return Object.keys(queries)
    .map(key => {
      return `${key}=${queries[key]}`;
    })
    .join('&');
}

export { getTMDBResponse, requestParametersTrending, requestParametersMovie };
