import axios from 'axios';

const KEY = 'AIzaSyAbYl9AoyoZffSaKAa-bnYlT-ita3h2Kgs';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
      part: 'snippet',
      maxResults: 5,
      key: KEY
   }
});
