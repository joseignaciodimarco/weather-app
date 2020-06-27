import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import { setCity } from './actions';

const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Ciudad de Mexico,mx',
  'Madrid,es'
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: null
    }
  }
  
  handleSelectionLocation = city => {
    this.setState({
      city
    });
    this.props.setCity(city);
  }

  render() {
    return (
    <Grid>
      <Row>
        <AppBar position='sticky'>
          <Toolbar>
            <Typography variant='subtitle1' color='inherit'>
              Weather App
            </Typography>
          </Toolbar>
        </AppBar>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <LocationList
            cities={cities} 
            onSelectedLocation={ this.handleSelectionLocation }>
          </LocationList>
        </Col>
        <Col xs={12} md={6}>
          <Paper elevation={4}>
          <div className='details'>
            {
              this.state.city && 
              <ForecastExtended city={this.state.city}></ForecastExtended>
            }
            </div>
          </Paper>
        </Col>
      </Row>
    </Grid>
  );
  }
}

const mapDispatchToPropsActions = dispatch => ({
  setCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchToPropsActions)(App);
