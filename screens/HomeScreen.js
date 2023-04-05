import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { getAuth, signOut } from 'firebase/auth';
import { SelectList } from 'react-native-dropdown-select-list'
import {auth,db} from '../config/firebase'; 
  // these were exported so I can access them here
import globals from '../config/defaultStyles';  
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
        <Text style={globals.titleText} >Welcome {user?.email}!</Text>

        {/* <Button title="Sign Out" style={styles.button} onPress={() => signOut(auth)} /> */}

        <Button 
         mode = "contained"
         buttonStyle='colors.primary'
         marginTop= {10}
         alignSelf='center'
         contentStyle={{
           height: 50,
           backgroundColor: colors.primary,
         }}
         
         labelStyle=
           {globals.buttonStyle}
         width='50%'
         onPress={() => signOut(auth)}>
         Sign Out
        </Button>


        {/* <SelectList 
          setSelected={(val) => setSelected(val)} 
          data={data} 
          save="value"
        /> */}

      <TextInput
        placeholder="User name"
        style={globals.textInput}
        mode="outlined"
        
        outlineColor={colors.secondary}
        activeOutlineColor={colors.primary}
        onChangeText={setUserName}
        theme={{ roundness: 16}}
      />

      <TextInput
        placeholder="Password hint"
        style={globals.textInput}
        mode="outlined"
        outlineColor={colors.secondary}
        activeOutlineColor={colors.primary}
        onChangeText={setPassword}
        theme={{ roundness: 16 }}
      />


      <Button 
         mode = "contained"
         buttonStyle='colors.primary'
         marginTop= {10}
         alignSelf='center'
         contentStyle={{
           height: 50,
           backgroundColor: colors.primary,
         }}
         
         labelStyle=
           {globals.buttonStyle}
         width='50%'
         onPress={addUser}>
         Add User
        </Button>  

      
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