import React from 'react';
import Map from './Map';
import LeafletMap from './LeafletMap';
import Map1 from './Map1';
import '../src/Style.css';

function App() {
  return (
    <div>
      {/* <Map /> */}
      {/* <LeafletMap /> */}
      <Map1 zoom={6} center={{ lat: -33, lng: 147 }}/>
    </div>
  );
}

export default App;
