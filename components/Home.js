import 'react-native-gesture-handler'
import React, { useState, useEffect, useRef } from 'react'
import {
  ActivityIndicator, Text, View, Image, TouchableOpacity, Dimensions,
} from 'react-native'
import haversine from 'haversine'
import Hamburger from 'react-native-hamburger'
import {
  getLocationPerms, findCoordinates, findCity, toripolliisiLocation,
} from '../utils/location'
import { openShareDialogAsync } from '../utils/sharing'
import { styles } from '../style/style'

const Home = ({ navigation }) => {
  // ref callbacks
  const viewContainer = useRef(null)

  // states
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 })
  const [city, setCity] = useState('Etsitään sijaintia…')
  const [colorFlag, setColorFlag] = useState(true)
  const [hamburgerState, setHamburgerState] = useState(false)

  // effects
  useEffect(() => {
    const init = async () => {
      await getLocationPerms()
      await findCoordinates(setLocation)
    }
    init()
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

  // handlers
  const changeColor = async () => {
    setColorFlag(!colorFlag)
    console.log(viewContainer)
    await openShareDialogAsync(viewContainer)
  }

  const dimensions = Dimensions.get('window')

  // render
  /* <ImageBackground
  source={colorFlag
  ? require('./assets/backgroundWhite.png')
  : require('./assets/backgroundPink.png')}
  style={styles.image_background}
  collapsable={false}
  > */
  return (
    <>
      <Hamburger
        active={hamburgerState}
        type="cross"
        onPress={() => {
          setHamburgerState(!hamburgerState)
          navigation.toggleDrawer()
        }}
        style={styles.hamburger}
      />
      <View
        ref={viewContainer}
        style={
          colorFlag ? styles.container_white
            : styles.container_pink
        }
        collapsable={false}
      >
        <TouchableOpacity onPress={changeColor}>
          <Image
            collapsable={false}
            source={colorFlag
              ? require('../assets/ToripolliisiPink.png')
              : require('../assets/ToripolliisiWhite.png')}
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
    </>
  )
}

export default Home
