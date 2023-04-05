import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import globals from '../config/defaultStyles';

// tutorial changed this from a function to a const... not sure why?
// export default function WelcomeScreen() {

// Tutorial had this in typescript
// const WelcomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => 

export default function WelcomeScreen({navigation}) {
return (
    <View style={styles.container}>
      <Text style={globals.titleText}>Welcome screen!</Text>
      <View style={styles.buttons}>

      <Button icon="account" mode = "outlined"  textColor='#990000' padding='10' 
              contentStyle = {styles.buttonStyle}
                width='50%' alignSelf='center' onPress={() => navigation.navigate('Sign In')}>
          Sign In
        </Button>

        <Button icon="account-plus" mode = "outlined"  textColor='#990000' 
      
                contentStyle={styles.buttonStyle}
                width='50%' alignSelf='center' onPress={() => navigation.navigate('Sign Up')}>
          Sign Up
        </Button>
        

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

// I want to better style this, but for now, it is fine

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttons: {
    
//    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 50,
    alignSelf: 'flex-end',
  },

  buttonStyle: {
    height: 50,
    flexDirection: 'row-reverse',
   
  },

});