const API_KEY = process.env.REACT_APP_GIPHY_KEY;
const API_URL = process.env.REACT_APP_API_URL;

const fromApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse;
  if (Array.isArray(data)) {
    const gifs = data.map((image) => {
      const { images, title, id } = image;
      const { url } = images.original;
      return { title, id, url };
    });
    return gifs;
  }
  return [];
};

const getGifs = async ({ keyword = "Morty", limit = 25, page = 0 } = {}) => {
  const apiUrl = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=r&lang=en`;
  const res = await fetch(apiUrl);
  const response = await res.json();
  return fromApiResponseToGifs(response);
};

export default getGifs;
