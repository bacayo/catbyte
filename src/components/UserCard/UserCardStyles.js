import {StyleSheet} from 'react-native';

import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    margin: 5,
    borderRadius: 5,
    padding: 5,
    backgroundColor: Colors.secondaryColor,
    elevation: 1,
  },
  image: {
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  userName: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.black,
  },
  remove: {
    padding: 5,
    textAlign: 'right',
    color: 'red',
    fontFamily: 'bold',
  },
  removeBtn: {
    padding: 5,
  },
});
