import moment from 'moment';
import 'moment/locale/es';
import transformWeather from './transformWeather';

const transformForecast = ({ list }) => (
  list.filter(item => (
    moment.unix(item.dt).hour() === 6 ||
    moment.unix(item.dt).hour() === 12 ||
    moment.unix(item.dt).hour() === 18
  )).map(({ dt, main, wind, weather }) => (
     {
       weekDate: moment.unix(dt).format('ddd'),
       hour: moment.unix(dt).hour(),
       data: transformWeather(main, wind, weather)
     }
  ))
);

export default transformForecast;