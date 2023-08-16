import { View, Text } from 'react-native';
import React from 'react';
import { useSearchParams } from 'expo-router';

const profile = () => {
  const { name, username } = useSearchParams();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>
        Hello {name} (@{username})
      </Text>
    </View>
  );
};

export default profile;
