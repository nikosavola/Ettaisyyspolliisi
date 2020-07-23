import Permissions from 'expo-permissions'
import * as Location from 'expo-location'
import { Alert } from 'react-native'

const getLocationPerms = async () => {
  try {
    await Permissions.askAsync(Permissions.LOCATION)
  } catch (error) {
    Alert.alert(
      'Error',
      'Permissions to access location was denied',
      { cancelable: false },
    )
  }
}

const findCoordinates = async (setLocation) => {
  try {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const locationLat = JSON.stringify(position.coords.latitude)
        const locationLon = JSON.stringify(position.coords.longitude)
        const mesta = { latitude: Number(locationLat), longitude: Number(locationLon) }
        setLocation(mesta)
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: false, maximumAge: 10 },
    )
  } catch (error) {
    console.log('location error!', error)
  }
}

const findCity = async (location, setCity) => {
  try {
    const place = await Location.reverseGeocodeAsync(location)
    setCity(`paikasta ${place[0].city}`)
  } catch (error) {
    console.log('no city!', error)
  }
}

const toripolliisiLocation = {
  latitude: 65.0126795,
  longitude: 25.4649844,
}

export {
  getLocationPerms, findCoordinates, findCity, toripolliisiLocation,
}
