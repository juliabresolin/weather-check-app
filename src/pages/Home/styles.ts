import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 48
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  titleContainer: {
    maxWidth: '80%'
  },

  title: {
    fontFamily: 'DMSans_700Bold',
    fontSize: 28,
    color: '#222222',
    lineHeight: 32,
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
    paddingVertical: '24%',
  },

  temperature: {
    fontFamily: 'DMSans_700Bold',
    fontSize: 112,
    color: '#222',
    marginLeft: 28,
  },

  weatherDescription: {
    fontFamily: 'DMSans_400Regular',
    color: '#B5B5B5',
    fontSize: 24,
    textTransform: 'capitalize'
  },

  optionContent: {
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#f0f0f7'
  },

  optionDescription: {
    fontFamily: 'DMSans_400Regular',
    color: '#b5b5b5',
    fontSize: 16
  },

  optionValue: {
    fontFamily: 'DMSans_700Bold',
    color: '#222',
    fontSize: 16
  }



});

export default styles;
