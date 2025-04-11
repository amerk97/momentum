import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5267',
  headers: { 'Content-Type': 'application/json' },
});


export const fetchWeatherForecast = async () => {
  const response = await API.get('/Weatherforecast');
  return response.data;
};

export default API; 

