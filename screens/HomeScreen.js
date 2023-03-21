import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';

import { getAuth, signOut } from 'firebase/auth';
import { SelectList } from 'react-native-dropdown-select-list'

import colors from '../config/colors';

const auth = getAuth();

export default function HomeScreen() {
  const { user } = useAuthentication();
  const [selected, setSelected] = React.useState("");

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const data = [
    {key:'1', value:'Mobiles', disabled:true},
    {key:'2', value:'Appliances'},
    {key:'3', value:'Cameras'},
    {key:'4', value:'Computers', disabled:true},
    {key:'5', value:'Vegetables'},
    {key:'6', value:'Diary Products'},
    {key:'7', value:'Drinks'},
]

  return (
    <View style={styles.container}>
        <Text style={styles.button} >Welcome {user?.email}!</Text>

        <Button title="Sign Out" style={styles.button} onPress={() => signOut(auth)} />
        <SelectList 
          setSelected={(val) => setSelected(val)} 
          data={data} 
          save="value"
        />
        <TextInput 
          placeholder="name"
          style={styles.button}
          onChangeText={setUserName}/>

        <TextInput 
          placeholder="password"
            style={styles.button}
            onChangeText={setPassword} />

        <Button 
          title="Add Data" 
          style={styles.button} 
          onPress={() => console.log('button pressed ' + userName + ' ' + password)} />
      
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
    margin: 10, 
    marginBottom: 20,
  }
});