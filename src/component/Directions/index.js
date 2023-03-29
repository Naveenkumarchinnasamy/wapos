import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady}) => (

    <MapViewDirections 
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyA58fEHCI9rjDH8dRkh-F78tR-VnFakKb4"
    strokeWidth={3}
    strokeColor="#000"
    
    />
);

export default Directions;
