import 'react-native-gesture-handler'
import React from 'react'
import {
  createDrawerNavigator,
} from '@react-navigation/drawer'
import { View, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Webcam from './components/Webcam'
import Home from './components/Home'
import { styles } from './style/style'

const Drawer = createDrawerNavigator()
const App = () => (
  <NavigationContainer>
    <Drawer.Navigator
      initialRouteName="Home"
      drawerType="front"
      drawerStyle={styles.drawer}
      drawerContentOptions={{
        itemStyle: {
          marginVertical: 20,
          flexDirection: 'row',
        },
      }}
    >
      <Drawer.Screen
        name="Ettäisyys"
        component={Home}
        options={{
          drawerIcon: () => (
            <View style={{ width: 170, height: 170 }}>
              <Image style={{ flex: 1, width: undefined, height: undefined }} source={require('./assets/icon1.png')} />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Kauppatori"
        component={Webcam}
        options={{
          drawerIcon: () => (
            <View style={{ width: 170, height: 170 }}>
              <Image style={{ flex: 1, width: undefined, height: undefined }} source={require('./assets/ToripolliisiCropped.png')} />
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  </NavigationContainer>
)

export default App
