import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const feed = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Feed</Text>
      <Stack.Screen options={{
        title: 'Feed'
      }} />
    </View>
  );
};

export default feed;
