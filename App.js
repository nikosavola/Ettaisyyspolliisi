// Begin: spaghetti code
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Alert, TouchableOpacity, Dimensions} from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';


export default class App extends Component {

  // init states
  state = {
    locationLat: null,
    locationLon: null,
    errorMessage: null,
    flagImage: true,
    textColour: '#FA5695'
  };

  // location functions

  _getLocationPerms = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permissions to access location was denied',
      });
    }
  };

  findCoordinates = async () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const locationLat = JSON.stringify(position.coords.latitude);
        const locationLon = JSON.stringify(position.coords.longitude);

        this.setState({ locationLat });
        this.setState({ locationLon });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: false, maximumAge: 10 }
    );
  };

  changeImage() {
   if (this.state.textColour === 'white') {
     var textColour = '#FA5695';
   } else {
     var textColour = 'white';
   }
   this.setState({
      flagImage:!this.state.flagImage,
      textColour: textColour
    });
  };

  tekstiStyle = function(options) {
    return {
      fontFamily: 'sans-serif', // android default font
      fontSize: 30,
      textAlign: "center",
      margin: 10,
      color: this.state.textColour // muuhun #F80160
    }
  };

  render() {
    const dimensions = Dimensions.get('window');
    const haversine = require('haversine');

    setTimeout(this._getLocationPerms, 1000); // 2s
    setTimeout(this.findCoordinates, 1000);

    let toripolliisiLocation = {
      latitude: 65.0126795,
      longitude: 25.4649844
    };

    let start = {
      latitude: this.state.locationLat,
      longitude: this.state.locationLon
    };

    return (
        <ImageBackground source={ this.state.flagImage === true ?
                          require('./assets/backgroundWhite.png') :
                          require('./assets/backgroundPink.png')}
                          style={{flex: 1, width: '100%', height: '100%'}}>
          <View style={styles.container}>

            <TouchableOpacity onPress={ this.changeImage.bind(this) }>
            <Image source={ this.state.flagImage === true ?
                          require('./assets/ToripolliisiPink.png') :
                          require('./assets/ToripolliisiWhite.png')}
                    style={{width: Math.round(dimensions.width * 13 / 16), height: Math.round(dimensions.height * 8 / 16), resizeMode: 'center'}} />
            </TouchableOpacity>

            <Text style={this.tekstiStyle()}>
              {"\n"}Ettäisyys Toripolliisiin on
            </Text>
            <Text style={styles.etaisyys}>
             {String(haversine(start, toripolliisiLocation)).substring(0,6)} km
            </Text>

          </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  teksti: {
    fontFamily: 'sans-serif', // android default font
    fontSize: 26,
    textAlign: "center",
    margin: 10,
    color: '#FA5695' // muuhun #F80160
  },

  etaisyys: {
    fontFamily: 'sans-serif-medium',
    fontSize: 36,
    textAlign: "center",
    fontWeight: 'bold',
    color: 'black'
  },
});
