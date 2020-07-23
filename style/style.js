import { StatusBar, StyleSheet, Platform } from 'react-native'

export const styles = StyleSheet.create({
  container_pink: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F80160',
    paddingTop: 10, // Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  container_white: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFF',
    paddingTop: 10,
  },

  container_webcam: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFF',
    paddingTop: 10,
  },

  image_background: {
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: 'visible',
  },

  textW: {
    fontFamily: 'sans-serif', // android default font
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#FFFF', // muuhun #F80160
  },

  textB: {
    fontFamily: 'sans-serif', // android default font
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#F80160', // muuhun #F80160
  },

  distance: {
    fontFamily: 'sans-serif-medium',
    fontSize: 36,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },

  location: {
    fontFamily: 'sans-serif-medium',
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'normal',
    color: 'black',
  },

  drawer: {
    backgroundColor: '#f4669d',
    width: 200,
  },

  drawer_content: {
    color: '#ffff',
  },

  hamburger: {
    alignSelf: 'flex-end',
    margin: 8,
  },

  home_side: {
    alignSelf: 'flex-start',
    width: '5%',
  },
})
