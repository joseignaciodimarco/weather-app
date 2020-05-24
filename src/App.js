import React from 'react';
import './App.css';
import LocationList from './components/LocationList';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';

const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Ciudad de Mexico,mx',
  'Madrid,es'
];
function App() {
  const handleSelectionLocation = city => {
    console.log(`handleSelectionLocation ${city}`);
  }

  return (
    <Grid>
      <Row>
        <AppBar position='sticky'>
          <Toolbar>
            <Typography variant='title' color='inherit'>
              Weather App
            </Typography>
          </Toolbar>
        </AppBar>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <LocationList
            cities={cities} 
            onSelectedLocation={ handleSelectionLocation }>
          </LocationList>
        </Col>
        <Col xs={12} md={6}>
          <Paper elevation={4}>
          <div className='details'></div>
          </Paper>
        </Col>
      </Row>
    </Grid>
  );
}

export default App;
