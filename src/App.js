import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import { createStore } from 'redux';

const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Ciudad de Mexico,mx',
  'Madrid,es'
],
  store = createStore(() => {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
  setCity = value => ({
    type: 'setCity',
    value
  });

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
    store.dispatch(setCity(city));
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

export default App;
