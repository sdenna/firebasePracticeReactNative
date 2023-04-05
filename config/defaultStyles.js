import { StyleSheet } from "react-native";
import colors from './colors';

const globals = StyleSheet.create({
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  error: {
    marginTop: 10,
    padding: 10,
    color: '#fff',
    backgroundColor: '#D54826FF',
  },
  textInput: {
    color: colors.primary,
    fontSize: 20,
    backgroundColor: colors.verylight,
    width: '50%',
  },
  buttonStyle: {
    color: colors.light,
    fontSize: 20,
    alignItems: 'center',
    
    
  }

});

export default globals;