import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedbackBase, View, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input} from 'react-native-elements';
import {Button, TextInput} from 'react-native-paper';
import { StackScreenProps } from '@react-navigation/stack';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import globals from '../config/defaultStyles';
import colors from '../config/colors';

const auth = getAuth();

export default function SignUpScreen({navigation}) {

  const [value, setValue] = React.useState({
    email: '',
    password: '',
    error: ''
  })

  async function signUp() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.'
      })
      return;
    }
  
    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      navigation.navigate('Sign In');
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      })
    }
  }

  return (
    <View style={styles.container}>
      <Text style={globals.titleText}>Sign Up screen!</Text>
      
      {!!value.error && <View style={globals.error}><Text>{value.error}</Text></View>}


      {/* Insert TextInput here from react-native-paper */}

      <View style={styles.controls}>

     

      <TextInput
        placeholder="Email"
        value={value.email}
        style={globals.textInput}
        mode="outlined"
        outlineColor={colors.secondary}
        activeOutlineColor={colors.primary}
        onChangeText={(text) => setValue({ ...value, email: text })}
        theme={{ roundness: 16 }}
        left={
          <TextInput.Icon
            icon={'email-outline'}
            iconColor={colors.primary}
            size={30}
          />
        }
      />
      
      <TextInput
        placeholder="Password"
        value={value.password}
        style={globals.textInput}
        mode="outlined"
        secureTextEntry
        outlineColor={colors.secondary}
        activeOutlineColor={colors.primary}
        onChangeText={(text) => setValue({ ...  value, password: text })}
        theme={{ roundness: 16 }}
        left={
          <TextInput.Icon
            icon={'key-outline'}
            iconColor={colors.primary}
            size={30}
          />
        }
      /> 


        {/* https://callstack.github.io/react-native-paper/docs/components/Button/  */}


      
        <Button 
          icon="account-plus-outline" 
          mode = "contained"
          buttonStyle='colors.primary'
          marginTop= {10}
          alignSelf='center'
          contentStyle={{
            height: 50,
            backgroundColor: colors.primary,
          }}
          iconColor='#ff000'
          labelStyle=
            {globals.buttonStyle}
          width='50%'
          onPress={signUp}>
          Sign up
        </Button>
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
   // width: '90%',
  },

  controls: {
    //flex: 1,
    width: '80%',
    margin: 10,
    alignSelf: 'center',
  },

  control: {
    marginTop: 10,
    backgroundColor: 'lightgrey',
    textColor: "#000"
  },

});