import { View, Text } from 'react-native';
import React from 'react';
import { useSearchParams, Stack } from 'expo-router';

const profile = () => {
  const { name, username } = useSearchParams();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Stack.Screen
        options={{
          title: username,
          headerStyle: { backgroundColor: 'white' },
          headerTintColor: 'black',
        }}
      />
      <Text style={{ fontSize: 30 }}>Hello {username}</Text>
    </View>
  );
};

export default profile;
