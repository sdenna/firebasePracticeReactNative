import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { getAuth, signOut } from 'firebase/auth';
import { SelectList } from 'react-native-dropdown-select-list'
import {auth,db} from '../config/firebase'; 
  // these were exported so I can access them here
import colors from '../config/colors';


// from the website
// https://firebase.google.com/docs/firestore/quickstart#web-version-9
import { collection, addDoc } from "firebase/firestore"; 

//const auth = getAuth();
// const firestore = firebase.firestore();

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

// This is causing an error
/*
 ReferenceError: Property 'addUser' doesn't exist, js engine: hermes
 ERROR  Invariant Violation: "main" has not been registered. This can happen if:
* Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.
* A module failed to load due to an error and `AppRegistry.registerComponent` wasn't called., js engine: hermes
Android Bundling complete 79ms
 ERROR  Error: You attempted to use a firebase module that's not installed on your Android project by calling firebase.app().

Ensure you have:

1) imported the 'io.invertase.firebase.app.ReactNativeFirebaseAppPackage' module in your 'MainApplication.java' file.

2) Added the 'new ReactNativeFirebaseAppPackage()' line inside of the RN 'getPackages()' method list.

See http://invertase.link/android for full setup instructions., js engine: hermes

*/



const addUser = async() => {
  // try to get the users email address and have their data saved to their 
  // email or UID
  console.log(user.email);

  try {
    const docRef = await addDoc(collection(db, user.email), {
      name: userName,
      password: password,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}


  return (
    <View style={styles.container}>
        <Text style={styles.button} >Welcome {user?.email}!</Text>

        <Button title="Sign Out" style={styles.button} onPress={() => signOut(auth)} />
        {/* <SelectList 
          setSelected={(val) => setSelected(val)} 
          data={data} 
          save="value"
        /> */}
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
          onPress={addUser} />
      
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