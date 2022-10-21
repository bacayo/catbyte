import {View, FlatList, StyleSheet, TouchableOpacity, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getAllUsersAsync} from '../api';
import UserCard from '../components/UserCard/UserCard';
import Loading from '../components/Loading/Loading';
import Colors from '../constants/Colors';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const numberOfColumns = 2;

  const [limit, setLimit] = useState(30);
  const dispatch = useDispatch();
  const {users, isLoading} = useSelector(state => state.userSlice);
  const renderUser = ({item}) => <UserCard user={item} />;

  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('AddUserScreen');
  };

  const fetchMoreData = () => {
    setLimit(limit + 10);
  };

  useEffect(() => {
    dispatch(getAllUsersAsync({limit: limit}));
  }, [dispatch, limit]);

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderUser}
        numColumns={numberOfColumns}
        ListFooterComponent={() => isLoading && <Loading />}
        onEndReachedThreshold={0.1}
        onEndReached={fetchMoreData}
      />
      <TouchableOpacity onPress={handleNavigation} style={styles.addUserBtn}>
        <Text style={styles.addUserBtnTitle}>Add User</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  addUserBtn: {
    alignSelf: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: Colors.secondaryColor,
    marginVertical: 5,
  },
  addUserBtnTitle: {
    color: Colors.black,
    fontSize: 16,
  },
});

export default HomeScreen;
