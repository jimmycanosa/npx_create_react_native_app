import { Tabs } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default () => {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false }}>
      <Tabs.Screen
        name='index'
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name='home' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="search" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='message'
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="message1" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};
