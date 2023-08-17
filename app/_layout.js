import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default () => {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: 'gray' },
        // title: 'Title-Stack_layout',
        headerTintColor: 'white',
        headerTitleStyle: { fontWeight: 'bold' },
        // headerRight: () => (
        //   <Ionicons
        //   onPress={() => router.push('/modal')}
        //     name='ios-information-circle-outline'
        //     size={30}
        //     color='black'
        //   />
        // ),
      }}
    >
      {/* do this if you want static layout and will be applied to all */}
      <Stack.Screen name='index' options={{ title: 'Home_layout.js' }} />
      <Stack.Screen
        name='modal'
        options={{
          presentation: 'modal',
          title: 'Modal',
          headerStyle: {
            backgroundColor: 'yellow',
          },
          headerTintColor: 'black',
        }}
      />
      <Stack.Screen name='home' options={{ headerShown: false }} />
    </Stack>
  );
};
