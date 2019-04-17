import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 41.8781, //Chicago
         lng: -87.6298
        }}
      />

    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAwo32hKAQ4RnuHSOD69Lopuk2R72IpSi8'
})(MapContainer);
