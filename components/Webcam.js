import React from 'react'
import { Image, Dimensions, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Hamburger from 'react-native-hamburger'
import ImageZoom from 'react-native-image-pan-zoom'
import { styles } from '../style/style'

const Webcam = ({ navigation }) => {
  const url = { uri: `http://www.oulunkaupunki.fi/_private/kamera/picture1.jpg?${Date.now()}` }

  return (
    <SafeAreaView style={styles.container_webcam}>
      <View style={styles.container_white}>
        <View style={styles.home_side}>
          <Hamburger
            active
            type="cross"
            onPress={() => { navigation.toggleDrawer() }}
            style={styles.hamburger}
          />
        </View>
      </View>
      <ImageZoom
        cropWidth={Dimensions.get('window').width}
        cropHeight={Dimensions.get('window').height * 0.9}
        imageWidth={1920}
        imageHeight={1080}
      >
        <Image
          style={{ width: 1920, height: 1080 }}
          source={url}
        />
      </ImageZoom>
      <View style={styles.home_side} />

    </SafeAreaView>
  )
}

export default Webcam
