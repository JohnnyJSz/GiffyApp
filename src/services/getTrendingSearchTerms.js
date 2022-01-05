const API_KEY = process.env.REACT_APP_GIPHY_KEY;
const API_URL = process.env.REACT_APP_API_URL;

const fromApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse;
  return data;
};

const getTrendingSearchTerms = async () => {
  const apiUrl = `${API_URL}/trending/searches?api_key=${API_KEY}`;
  const res = await fetch(apiUrl);
  const response = await res.json();
  return fromApiResponseToGifs(response);
};

export default getTrendingSearchTerms;
