import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';

const Loading = () => {
  return (
    <ActivityIndicator
      size={30}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
    />
  );
};

export default Loading;
