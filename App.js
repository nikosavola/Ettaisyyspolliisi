import 'react-native-gesture-handler'
import React from 'react'
import {
  createDrawerNavigator,
} from '@react-navigation/drawer'
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
        itemStyle: { marginVertical: 10 },
      }}
    >
      <Drawer.Screen name="Ettäisyys" component={Home} />
      <Drawer.Screen name="Kauppatori" component={Webcam} />
    </Drawer.Navigator>
  </NavigationContainer>
)

export default App
