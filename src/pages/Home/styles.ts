import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 40
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  titleContainer: {
    maxWidth: '80%'
  },

  title: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 24,
    color: '#222222',
    lineHeight: 28,
  },

  date: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 18,
    color: '#B5B5B5',
    marginTop: 8
  },

  temperatureContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  weatherIcon: {
    width: 96,
    height: 96,
  },

  temperature: {
    fontFamily: 'DMSans_700Bold',
    fontSize: 64,
    color: '#222',
    marginLeft: 28,
  },

  weatherDescription: {
    fontFamily: 'DMSans_400Regular',
    color: '#B5B5B5',
    fontSize: 18,
    textTransform: 'capitalize'
  },

  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between'
  }



});

export default styles;
