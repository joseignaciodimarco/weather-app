import React, { Component } from 'react';
import LocationList from './../components/LocationList';
import { setCity } from './../actions';
import { connect } from 'react-redux';

const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Ciudad de Mexico,mx',
  'Madrid,es'
];


class LocationListContainer extends Component {
  handleSelectionLocation = city => {
    this.props.setCity(city)
  }
  
  render() {
    return (
      <LocationList
        cities={cities} 
        onSelectedLocation={ this.handleSelectionLocation } 
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCity: value => dispatch(setCity(value)) 
})

export default connect(null, mapDispatchToProps)(LocationListContainer);