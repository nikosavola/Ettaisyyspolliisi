import { Alert } from 'react-native'
import { captureRef } from 'react-native-view-shot'
import * as Sharing from 'expo-sharing'

const openShareDialogAsync = async (ref) => {
  await new Promise((r) => setTimeout(r, 500)) // i.e. sleep

  if (!(await Sharing.isAvailableAsync())) {
    console.log('failed sharing')
    Alert.alert('Jakaminen ei näytä toimivan laitteellasi.')
    return
  }

  // const imageURI = await captureScreen()
  const imageURI = await captureRef(ref, {
    result: 'tmpfile',
    quality: 1,
    format: 'png',
  })

  await Sharing.shareAsync(imageURI, { mimeType: 'image/png' }) // selectedImage.localUri
}

export { openShareDialogAsync }
