import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import UserDetailScreen from './src/screens/UserDetailScreen';
import Strings from './src/constants/Strings';
import AddUserScreen from './src/screens/AddUserScreen';

const Router = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Strings.homeScreen}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Strings.userDetailScreen}
          component={UserDetailScreen}
          options={({route}) => ({
            headerTitle: route.params.firstName + ' ' + route.params.lastName,
          })}
        />
        <Stack.Screen name="AddUserScreen" component={AddUserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
