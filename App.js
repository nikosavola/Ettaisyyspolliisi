import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react'
import {
  ActivityIndicator, Text, View, Image, ImageBackground, TouchableOpacity, Dimensions,
} from 'react-native'
import {
  createDrawerNavigator,
} from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import haversine from 'haversine'
import Hamburger from 'react-native-hamburger'
import {
  getLocationPerms, findCoordinates, findCity, toripolliisiLocation,
} from './utils/locationUtilities'
import Webcam from './components/Webcam'
import { styles } from './style/style'

const Home = (navigation) => {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 })
  const [city, setCity] = useState('Etsitään sijaintia…')
  const [colorFlag, setColorFlag] = useState(true)

  useEffect(async () => {
    await getLocationPerms()
    await findCoordinates(setLocation)
  }, [])

  useEffect(() => {
    findCity(location, setCity)
  }, [location])

  useEffect(() => {
    const interval = setInterval(async () => {
      await findCoordinates(setLocation)
    }, 10 * 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  const changeColor = () => {
    setColorFlag(!colorFlag)
  }

  const dimensions = Dimensions.get('window')

  return (
    <ImageBackground
      source={colorFlag
        ? require('./assets/backgroundWhite.png')
        : require('./assets/backgroundPink.png')}
      style={styles.image_background}
    >
      <View style={styles.container}>
        <Hamburger
          active={colorFlag}
          type="cross"
          onPress={() => navigation.toggleDrawer()}
        />

        <TouchableOpacity onPress={changeColor}>
          <Image
            source={colorFlag
              ? require('./assets/ToripolliisiPink.png')
              : require('./assets/ToripolliisiWhite.png')}
            style={{
              width: Math.round(dimensions.width * (13 / 16)),
              height: Math.round(dimensions.height * (8 / 16)),
              resizeMode: 'center',
            }}
          />
        </TouchableOpacity>

        <Text style={colorFlag
          ? styles.textB
          : styles.textW}
        >
          {'\n'}
          Ettäisyys Toripolliisiin on
        </Text>

        { location.latitude === 0
          ? <ActivityIndicator size="large" color="#F80160" />
          : (
            <Text style={styles.distance}>
              {' '}
              {String(haversine(location, toripolliisiLocation)).substring(0, 6)}
              {' '}
              km
            </Text>
          ) }

        <Text style={styles.location}>
          {city}
        </Text>

      </View>
    </ImageBackground>
  )
}

const Drawer = createDrawerNavigator()
const App = () => (
  <NavigationContainer>
    <Drawer.Navigator
      initialRouteName="Home"
      drawerType="front"
      drawerStyle={styles.drawer}
      drawerContentOptions={{
        itemStyle: { marginVertical: 10 },
      }}
    >
      <Drawer.Screen name="Ettäisyys" component={Home} />
      <Drawer.Screen name="Webcam" component={Webcam} />
    </Drawer.Navigator>
  </NavigationContainer>
)

export default App
