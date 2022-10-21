import {View, Text, Image} from 'react-native';
import React from 'react';

import styles from './UserDetailStyles';

const UserDetail = ({
  // firstName,
  // lastName,
  // image,
  // age,
  // address,
  // postalCode,
  // state,
  user,
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: user.image}} />
      <View style={styles.nameContainer}>
        <Text style={styles.userName}>
          Name: {user.firstName} {user.lastName}
        </Text>
      </View>
      <Text style={styles.age}>Age: {user.age}</Text>
      <Text style={styles.company}>
        Company: {user.address}
        {user.postalCode}
        {user.state}
      </Text>
    </View>
  );
};

export default UserDetail;
