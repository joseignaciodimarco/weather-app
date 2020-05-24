import React from 'react';
import './App.css';
import LocationList from './components/LocationList';

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
    <div className="App">
      <LocationList cities={cities} onSelectedLocation={ handleSelectionLocation }></LocationList>
    </div>
  );
}

export default App;
