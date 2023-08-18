import { View, Text } from 'react-native';
import { Stack, Link } from 'expo-router';

const messages = () => {
  return (
    <View>
    {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> */}
      <Link href='/home/messages/123' style={{margin: 10, fontSize: 24}}>Message from Regine</Link>
      <Link href='/home/messages/234' style={{margin: 10, fontSize: 24}}>Message from Jimmy</Link>
      <Link href='/home/messages/345' style={{margin: 10, fontSize: 24}}>Message from Walter</Link>
      {/* <Stack.Screen
        options={{
          title: 'Message',
        }}
      /> */}
    </View>
  );
};

export default messages;
