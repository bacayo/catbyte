import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

import {useDispatch} from 'react-redux';
import {addNewUserAsync} from '../api';
import {useNavigation} from '@react-navigation/native';
import Strings from '../constants/Strings';

const AddUserScreen = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [img, setImg] = useState('');

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const addUser = () => {
    dispatch(
      addNewUserAsync({
        firstName: firstname,
        lastName: lastname,
        image: 'https://robohash.org/doloremquesintcorrupti.png',
      }),
    );
    navigation.navigate(Strings.homeScreen);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="FirstName"
        value={firstname}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="lastName"
        value={lastname}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="image"
        value={img}
        onChangeText={setImg}
      />

      <TouchableOpacity style={styles.addBtn} onPress={addUser}>
        <Text style={styles.addBtnTitle}>Add User</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3FDFD',
  },
  input: {
    // borderWidth: 1,
    borderColor: '#71C9CE',
    width: '50%',
    alignSelf: 'center',
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
  },
  addBtn: {
    alignSelf: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#71C9CE',
    marginVertical: 5,
  },
  addBtnTitle: {
    color: '#000000',
    fontSize: 16,
  },
});

export default AddUserScreen;
