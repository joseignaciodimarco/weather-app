import React, { Component } from 'react';
import './App.css';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtended from './components/ForecastExtended';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: null
    }
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
         <LocationListContainer />
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
