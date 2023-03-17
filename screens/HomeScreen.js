import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { Button } from 'react-native-elements';
import { getAuth, signOut } from 'firebase/auth';
import { SelectList } from 'react-native-dropdown-select-list'

const auth = getAuth();

export default function HomeScreen() {
  const { user } = useAuthentication();
  const [selected, setSelected] = React.useState("");

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
        <Text>Welcome {user?.email}!</Text>

        <Button title="Sign Out" style={styles.button} onPress={() => signOut(auth)} />
        <SelectList 
          setSelected={(val) => setSelected(val)} 
          data={data} 
          save="value"
    />
      
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