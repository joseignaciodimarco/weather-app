import React, { Component } from 'react';
import ForecastItem from './ForecastItem';
import './styles.css';
import transforForecast from './../services/transformForecast';

const api_key = 'eb158c00a16b08bd904d75a86b7e3cc3';
const url = 'http://api.openweathermap.org/data/2.5/forecast';


class ForeCastExtended extends Component {
  constructor(){
    super();
    this.state = {
      forecastData: null
    }
  }

  updateCity = city => {
    fetch(`${url}?q=${city}&appid=${api_key }`)
    .then(data => data.json())
    .then(weatherData => {
      this.setState({
        forecastData: transforForecast(weatherData)
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props.city) {
      this.setState({
        forecastData: null
      });
      this.updateCity(nextProps.city);
    }
  }

  componentDidMount() {
    this.updateCity(this.props.city);
  }

  renderForecastItemDays(forecastData) {
    return forecastData.map(({ weekDate, hour, data}, i) => 
    <ForecastItem key={i} weekDay={weekDate} hour={hour} data={data}></ForecastItem>);
  }

  renderProgress = () => {
    return 'Cargando pronostico extendido';
  }

  render() {
    return (
      <div>
        <h2 className='forecastTitle'>Pronostico Extendido para {this.props.city}</h2>
        {
          this.state.forecastData ? 
          this.renderForecastItemDays(this.state.forecastData) :
          this.renderProgress()
        }
      </div>
    );
  }
}

export default ForeCastExtended;