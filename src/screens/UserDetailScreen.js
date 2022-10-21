import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getSingleUserAsync} from '../api';
import Loading from '../components/Loading/Loading';
import {clearUser} from '../redux/userSlice/userSlice';

const UserDetailScreen = props => {
  const {id} = props.route.params;
  const dispatch = useDispatch();

  const {user, isLoading} = useSelector(state => state.userSlice);

  useEffect(() => {
    dispatch(clearUser());
    dispatch(getSingleUserAsync(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: user.image}} />
      <View style={styles.nameContainer}>
        <Text style={styles.userName}>
          Name: {user.firstName} {user.lastName}
        </Text>
      </View>
      <Text style={styles.age}>Age: {user.age}</Text>
      <Text style={styles.company}>Company:{user?.company?.name}</Text>
      <Text style={styles.company}>{user?.company?.address?.address}</Text>
      <Text style={styles.company}>{user?.company?.address?.postalCode}</Text>
      <Text style={styles.company}>{user?.company?.address?.state}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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

export default UserDetailScreen;
