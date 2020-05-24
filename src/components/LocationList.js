import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList =({ cities,  onSelectedLocation}) => {
  const handleWeatherLocationClick = city => {
    console.log('handleWeatherLocationClick');
    onSelectedLocation(city);
  }
  return (
    <div>
      {
      cities.map(city => 
        <WeatherLocation 
          key={city} 
          city={city}
          onWeatherLocationClick={() =>  handleWeatherLocationClick(city) }
        ></WeatherLocation>)
      }
    </div>
   )
};

export default LocationList;
