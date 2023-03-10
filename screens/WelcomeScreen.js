import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button } from 'react-native';

// tutorial changed this from a function to a const... not sure why?
// export default function WelcomeScreen() {

// Tutorial had this in typescript
// const WelcomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => 

export default function WelcomeScreen({navigation}) {
return (
    <View style={styles.container}>
      <Text>Welcome screen!</Text>
      <View style={styles.buttons}>
        <Button title="Sign in" buttonStyle={styles.button} onPress={() => navigation.navigate('Sign In')} />
        <Button title="Sign up please" type="outline" buttonStyle={styles.button} onPress={() => navigation.navigate('Sign Up')} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttons: {
    flex: 1,
  },

  button: {
    marginTop: 10
  }
});