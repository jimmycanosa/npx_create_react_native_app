import { Link, Stack, useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const users = [
  { username: 'AMutia', name: 'Alex' },
  { username: 'JCanosa', name: 'Jimmy' },
  { username: 'RLuad', name: 'Regine' },
];

const router = useRouter();

export default function Page() {
  // const router = useRouter();
  
  return (
    <View style={styles.container}>
      {/* do this for dynamic layout */}
      <Stack.Screen options={{ 
        title: 'Home-index.js',
        headerRight: () => (
          <Ionicons
          onPress={() => router.push('/modal')}
            name='ios-information-circle-outline'
            size={30}
            color='black'
          />
        ),
        }} />
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>

        {users.map((user) => (
          <Link key={user.username} href={`/${user.username}`} style={styles.link}>
            Open {user.name}'s profile
          </Link>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },
  link: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
