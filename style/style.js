import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image_background: {
    flex: 1,
    width: '100%',
    height: '100%',
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
})
