import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData'
import transformWeather from './../../services/transformWeather';
import CircularProgress from "@material-ui/core/CircularProgress";
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import './styles.css';

class WeatherLocation extends Component {
  constructor(props) {
    super(props);
    const { city } = props;
    this.state = {
      city,
      data: null
    }
  }

  componentDidMount() {
    this.handleUpdateClick();
  }

  componentDidUpdate(prevProps, prevState) {
  }

  handleUpdateClick = () => {
    fetch( getUrlWeatherByCity(this.state.city))
    .then(resolve => {
      return resolve.json();
    })
    .then(({main, wind, weather}) => {
      this.setState({
        data: transformWeather(main, wind, weather)
      });
    });
  }

  render() {
    const { onWeatherLocationClick } = this.props
    const { city, data } = this.state;
    return (
    <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
      <Location city={city}></Location>
      {data ? <WeatherData data={data}></WeatherData> :  <CircularProgress size={50}></CircularProgress>}
    </div>);
  }
};

export default WeatherLocation;