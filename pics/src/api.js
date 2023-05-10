import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID JvjOGwSNuKUdRCTRKp3-sx9PzK9TW0Dfi9sDSzY-b4E',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
