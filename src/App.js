import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, GoogleApiWrapper, Marker, LatLng, InfoWindow, Circle, Size } from 'google-maps-react';

// class GMap extends Component {
//   state = { zoom: 10 };
//
//   // static propTypes() {
//   // 	initialCenter: React.PropTypes.objectOf(React.PropTypes.number).isRequired
//   // }
//
// 	render() {
//     return <div className="GMap">
//
//     </div>
//   }
//
//   componentDidMount() {
//     // create the map, marker and infoWindow after the component has
//     // been rendered because we need to manipulate the DOM for Google =(
//     this.map = this.createMap()
//     this.marker = this.createMarker()
//     this.infoWindow = this.createInfoWindow()
//   }
//
//   // clean up event listeners when component unmounts
//   componentDidUnMount() {
//
//   }
//
//   createMap() {
//     let mapOptions = {
//       zoom: this.state.zoom,
//       center: this.mapCenter()
//     }
//     return new Map(this.refs.mapCanvas, mapOptions)
//   }
//
//   createMarker() {
//     const data = [
//       {name: "GROCERIES MI CUBA", lat: 41.88580719533072, lng: -87.75048285056646, license: 2658858},
//       {name: "THUNDERBOLT", lat: 41.953509344353286, lng: -87.74889778214177, license: 2627486}
//     ]
//     return data.map((b, i) => {
//       return new Marker({
//         name: b.name,
//         position: {lat: b.lat, lng: b.lng},
//         map: this.map
//       })
//     })
//   }
//
//   mapCenter() {
//     return {
//              lat: 41.8781, //Chicago
//              lng: -87.6298
//             }
// 	}
//
//   createInfoWindow() {
//     let contentString = "<div class='InfoWindow'>I'm a Window that contains Info Yay</div>"
//     return new InfoWindow({
//       map: this.map,
//       anchor: this.marker[0],
//       content: contentString
//     })
//   }
//
//   handleZoomChange() {
//     this.setState({
//       zoom: this.map.getZoom()
//     })
//   }
// }
//
// var initialCenter = { lng: 41.8781, lat: -87.6298 }

// ReactDOM.render(<GMap initialCenter={initialCenter} />, document.getElementById('container'));



const mapStyles = {
  width: '100%',
  height: '100%'
};

const data = [
  {name: "GROCERIES MI CUBA", lat: 41.88580719533072, lng: -87.75048285056646, license: 2658858, risk: 1},
  {name: "THUNDERBOLT", lat: 41.953509344353286, lng: -87.74889778214177, license: 2627486, risk: 3}
]


export class MapContainer extends Component {
  render() {

    return (
      <Map
        google={this.props.google}
        className={'map'}
        zoom={15}
        style={mapStyles}
        initialCenter={{
         lat: 41.8781, //Chicago
         lng: -87.6298
        }}
        onGoogleApiLoaded={({map, maps}) =>
          console.log("test")
        }
        yesIWantToUseGoogleMapApiInternals={true} >

        <Marker
          title = {"foo"}
          id = {0}
          name = {data[0].name}
          position = {{lat: data[0].lat, lng: data[0].lng}}
          onClick = {this.onMarkerClick}
          icon = {{url: 'http://amundeep.com/img/risk' + data[0].risk + '.jpg'}} >
        </Marker>

        <Marker
          title = {"foo"}
          id = {1}
          name = {data[1].name}
          position = {{lat: data[1].lat, lng: data[1].lng}}
          onClick = {this.onMarkerClick}
          icon = {{url: 'http://amundeep.com/img/risk' + data[1].risk + '.jpg'}} >
        </Marker>

        <InfoWindow
          marker = {this.activeMarker}
          content = {data[this.activeMarker.id].name}
        />

      </Map>
    );
  }

  componentDidMount() {
    // create the map, marker and infoWindow after the component has
    // been rendered because we need to manipulate the DOM for Google =(
    console.log("Component did Mount")
    console.log("/img/risk" + data[0].risk + ".jpg")
  }

  onMarkerClick(props, marker, e) {
    console.log("Marker clicked: " + marker.name);
    //GO TO THE RESTAURANT PAGE HERE
    this.activeMarker = marker;

  }

  // createMarkers() {
  //   const data = [
  //     {name: "GROCERIES MI CUBA", lat: 41.88580719533072, lng: -87.75048285056646, license: 2658858},
  //     {name: "THUNDERBOLT", lat: 41.953509344353286, lng: -87.74889778214177, license: 2627486}
  //   ]
  //   return data.map(item => {
  //     return new Marker({
  //       name: item.name,
  //       position: {lat: item.lat, lng: item.lng},
  //       onClick: this.onMarkerClick,
  //     })
  //   })
  // }



}


// License needed
// <Marker
//   title = {"foo"}
//   name = {data[0].name}
//   position = {{lat: data[0].lat, lng: data[0].lng}}
//   onClick = {this.onMarkerClick} />

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAwo32hKAQ4RnuHSOD69Lopuk2R72IpSi8'
})(MapContainer);
