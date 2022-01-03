const API_KEY = process.env.REACT_APP_GIPHY_KEY;
const getGifs = async (keyword, limit) => {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=0&rating=r&lang=en`;
  const res = await fetch(apiUrl);
  const response = await res.json();
  const { data = [] } = response;
  const gifs = data.map((gif) => gif);
  return gifs;
};
export default getGifs;
