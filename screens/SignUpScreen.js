import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedbackBase, View, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input} from 'react-native-elements';
import {Button, TextInput} from 'react-native-paper';
import { StackScreenProps } from '@react-navigation/stack';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


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
      <Text style={styles.titleText}>Sign Up screen!</Text>
      
      {!!value.error && <View style={styles.error}><Text>{value.error}</Text></View>}


      {/* Insert TextInput here from react-native-paper */}

      <View style={styles.controls}>
        <Input
          placeholder='Email'
          containerStyle={styles.control}
          value={value.email}
          onChangeText={(text) => setValue({ ...value, email: text })}
          leftIcon={<Icon
            name='envelope'
            size={16}
          />}
        />

        <Input
          placeholder='Password2'
          containerStyle={styles.control}
          value={value.password}
          onChangeText={(text) => setValue({ ...value, password: text })}
          secureTextEntry={true}
          leftIcon={<Icon
            name='key'
            size={16}
          />}
        />
        {/* https://callstack.github.io/react-native-paper/docs/components/Button/  */}

        <Button icon="account-plus" mode = "contained"  buttonColor='#990000' 
                textColor='#dddddd' width='50%' alignSelf='center' onPress={signUp}>
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
    backgroundColor: 'yellow',
    margin: 10,
    alignSelf: 'center',
  },

  control: {
    marginTop: 10,
    backgroundColor: 'lightgrey',
    textColor: "#000"
  },

  error: {
    marginTop: 10,
    padding: 10,
    color: '#fff',
    backgroundColor: '#D54826FF',
  },

  titleText: {
    fontSize: 24,
    fontWeight: "bold",
  }
});