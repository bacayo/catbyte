import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    margin: 5,
    flex: 1,
  },
  image: {
    height: 150,
    width: 150,
    resizeMode: 'contain',

    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    marginHorizontal: 5,
    padding: 5,
  },
  userName: {
    fontSize: 16,
    color: '#000000',
  },
  age: {
    fontSize: 16,
    color: '#000000',
    padding: 5,
    margin: 5,
  },
  company: {
    fontSize: 16,
    color: '#000000',
    padding: 5,
    margin: 5,
  },
});
