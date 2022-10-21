import {Image, Text, Pressable, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import Strings from '../../constants/Strings';
import {deleteUserAsync} from '../../api';
import styles from './UserCardStyles';

const UserCard = ({user}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleNavigation = () => {
    navigation.navigate(Strings.userDetailScreen, {
      firstName: user.firstName,
      lastName: user.lastName,
      image: user.image,
      age: user.age,
      company: user.company,
      id: user.id,
    });
  };

  const deleteUser = () => {
    dispatch(deleteUserAsync(user.id));
  };

  return (
    <Pressable onPress={handleNavigation} style={styles.container}>
      <TouchableOpacity onPress={deleteUser} style={styles.removeBtn}>
        <Text style={styles.remove}>X</Text>
      </TouchableOpacity>
      <Image style={styles.image} source={{uri: user.image}} />
      <View style={styles.innerContainer}>
        <Text style={styles.userName}>
          {user.firstName} {user.lastName}
        </Text>
      </View>
    </Pressable>
  );
};

export default UserCard;
