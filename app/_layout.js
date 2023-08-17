import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Alert } from 'react-native';

export default () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: 'gray' },
        // title: 'Title-Stack_layout',
        headerTintColor: 'white',
        headerTitleStyle: { fontWeight: 'bold' },
        headerRight: () => (
          <Ionicons
          onPress={() => Alert.alert("More info")}
            name='ios-information-circle-outline'
            size={30}
            color='black'
          />
        ),
      }}
    >
      {/* do this if you want static layout and will be applied to all */}
      <Stack.Screen name='index' options={{ title: 'Home_layout.js' }} />
    </Stack>
  );
};
