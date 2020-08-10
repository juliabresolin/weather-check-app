import axios from 'axios';

const openweatherAPI = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5',
})

export default openweatherAPI;
