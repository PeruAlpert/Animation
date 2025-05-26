import {Platform, StyleSheet} from 'react-native';
import Layout from '../../constants/Layout';
import {colors} from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS == 'android' ? 20 : 50,
  },
  adsContainer: {
    width: Layout.width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    gap: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginVertical: 10,
  },
  hackerTextStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00FF00',
  },
  textContainer: {
    margin: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 10,
    width: Layout.width * 0.9,
    alignSelf: 'center',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 39,
    paddingHorizontal: 20,
    gap: 10,
    marginTop: 20,
  },
  flagsContainer: {
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: Layout.width,
    alignSelf: 'center',
    height: 122,
    backgroundColor: 'white',
    gap: 10,
    marginTop: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: Platform.OS === 'ios' ? 10 : 5,
  },
  floatCard: {
    position: 'absolute',
    top: Layout.height * 0.05,
    width: Layout.width * 0.9,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 1,
    padding: 4,

    borderRadius: 25,
    borderWidth: 0.4,
  },

  floatCardContent: {
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 25,
    borderWidth: 0.5,
    gap: 10,
    paddingTop: 20,
  },
  btn: {
    backgroundColor: colors.primary,
    width: Layout.width * 0.8,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 39,
  },
});
export default styles;
