import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { Button } from 'react-native-elements';

const auth = getAuth();

export default function HomeScreen() {
  const { user } = useAuthentication();

  return (
    <View style={styles.container}>
        <Text>Welcome {user?.email}!</Text>

        <Button title="Sign Out" style={styles.button} onPress={() => signOut(auth)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10
  }
});