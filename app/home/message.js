import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const message = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Message</Text>
      <Stack.Screen options={{
        title: 'Message'
      }} />
    </View>
  );
};

export default message;
