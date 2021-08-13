import axios from 'axios';

export default axios.create({
  baseURL: `https://hotel-reactcol.herokuapp.com/api/`
});