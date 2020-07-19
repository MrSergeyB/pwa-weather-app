import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "0871fbb8f7b68043a9c4e502fd63711d";

export const fetchWeather = async (query) => {
  const {data} = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });
  return data;
};
