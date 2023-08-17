import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const search = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Search</Text>
      <Stack.Screen options={{
        title: 'Search'
      }} />
    </View>
  )
}

export default search