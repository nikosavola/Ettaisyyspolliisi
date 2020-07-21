import React from 'react'
import { Image, Dimensions } from 'react-native'

const Webcam = (navigation) => {
  const url = { uri: 'http://www.oulunkaupunki.fi/_private/kamera/picture1.jpg' }

  const dimensions = Dimensions.get('window')

  return (
    <Image
      source={url}
      style={{
        width: Math.round(dimensions.width * (13 / 16)),
        height: Math.round(dimensions.height * (8 / 16)),
        resizeMode: 'center',
      }}
    />
  )
}

export default Webcam
