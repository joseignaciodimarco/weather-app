import convert from 'convert-units';
import {
  SUN,
  CLOUD,
  RAIN,
  SNOW,
  THUNDER,
  DRIZZLE
} from './../constants/weathers';

const getTemp = temp => convert(temp).from('K').to('C').toFixed(0);

const getWeatherState = ({id}) => {
  if (id < 300) {
    return THUNDER
  } else if (id < 400) {
    return DRIZZLE;
  } else if (id < 600) {
    return RAIN 
  } else if (id < 700) {
    return SNOW;
  } else if (id === 800) {
    return SUN;
  } else {
    return CLOUD;
  }
}

const transformWeather = ({ humidity, temp }, { speed}, weather) => {
  return {
    humidity: humidity,
    temperature: getTemp(temp),
    weatherState: getWeatherState(weather[0]),
    wind: `${speed} m/s`
  }
};

export default transformWeather;
