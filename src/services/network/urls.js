const getBaseUrl = () => {
  return 'https://api.themoviedb.org/3/'
};

export const getUrl = (type) => {
  const baseUrl = getBaseUrl();
  const api_key = process.env.REACT_APP_API_KEY_TMDB;
  const lang = process.env.REACT_APP_TMDB_LANG;
  switch (type) {
    //Common
    case 'NOW_PLAYING':
      return `${baseUrl}movie/now_playing?api_key=${api_key}&language=${lang}`;
    case 'LATEST':
      return `${baseUrl}movie/latest?api_key=${api_key}&language=${lang}`;
    case 'UPCOMING':
      return `${baseUrl}movie/upcoming?api_key=${api_key}&language=${lang}`;
    case 'SEARCH':
      return `${baseUrl}search/movie?api_key=${api_key}&language=${lang}`;

    default:
      return `${baseUrl}`;
  }
};
