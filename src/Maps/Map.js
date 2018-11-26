import React, { Component } from "react";
import { Dimensions, StyleSheet, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Point   } from "react-native-maps";
import { View, Fab } from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";
import openMap from 'react-native-open-maps';
import postos from './markers';

export default class Map extends Component {


  constructor(props) {
    super(props);


    this.state = {
      latitude: -15.7942287,
      longitude: -47.8821658,
      latitudeDelta: 100,
      longitudeDelta: 100,
      error: null,
      navigate: false,
      navigateLat: false,
      navigateLon: false,
      yourPosition:{
        description: "You're Here!",
        title: 'Your Position',
        coordinates: {
          latitude: -15.7942287,
          longitude: -47.8821658
        },
      }
    };
    this.centerMapOnGps.bind(this);
    this.gotToLocation.bind(this);
    this.navegar.bind(this);
  }

  navegar(habilitar,lat,lon) {
    this.setState({...this.state, navigate:habilitar, navigateLat:lat, navigateLon:lon});
  }

  gotToLocation() {
    openMap({ latitude: this.state.navigateLat, longitude:this.state.navigateLon });
  }
  centerMapOnGps = function(){
    return getCurrentLocation().then(
      (position) => {
          this.setState({...this.state, latitude:position.coords.latitude , longitude: position.coords.longitude})
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }
  componentDidMount() {
    return getCurrentLocation().then(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          // latitudeDelta: 0.01,
          // longitudeDelta: 0.01,
          error: null, 
          yourPosition:{
            title: 'Your Position',
            description: "You're Here!",
            coordinates: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            },
          },
        });
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }
  

  render() {
    var styles = StyleSheet.create({
      container: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height-10
      }
    });
    
    return (
      <View>
        <MapView
          mapType="terrain"
          provider={PROVIDER_GOOGLE}
          style={styles.container}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            longitudeDelta: this.state.longitudeDelta,
            latitudeDelta: this.state.latitudeDelta
          }}
          initialRegion={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            longitudeDelta: this.state.longitudeDelta,
            latitudeDelta: this.state.latitudeDelta
          }}
        >
        {/* marcador de onte esta voce */}
        <Marker
              coordinate={this.state.yourPosition.coordinates}
              title={this.state.yourPosition.title}
              description={this.state.yourPosition.description}
             
              >
            </Marker>
        {/* this.gotToLocation */}

        {postos.map((markerPin, key)=>{
          return (  
          <Marker
            flat={true}
            coordinate={markerPin.coordinates}
            title={markerPin.title}
            description={markerPin.description}
            key={key}
            onPress={()=>{this.navegar(true,markerPin.coordinates.latitude,markerPin.coordinates.longitude)}}
            onCalloutPress={()=>{this.navegar(false,markerPin.coordinates.latitude,markerPin.coordinates.longitude)}}
            pinColor="#009b3a">
            </Marker>
            );
        })


        }
        </MapView>

         {/* marcador de onte esta voce */}

          <Fab  style={{backgroundColor:'#fff'}} onPress={()=> {this.centerMapOnGps()}} >
                <Icon
                  type="MaterialIcons"
                  style={{color:"#009b3a"}}
                  name="adjust"
                  size={40}
                />
          </Fab>

        {
          this.state.navigate &&   
          <Fab  style={{backgroundColor:'#fff'}} onPress={()=> {this.gotToLocation()}} >
              <Icon
                type="MaterialIcons"
                position="bottomLeft"
                style={{color:"#009b3a"}}
                name="navigation"
                size={40}
              />
         </Fab>
        }
         
      </View>

    );
  }
}

export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      e => reject(e)
    );
  });
};
