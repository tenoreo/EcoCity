import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import Login from './src/screens/SignIn/login';
import SignUp from './src/screens/SignUp/signUp'
import ResetPassword from './src/screens/ResetPassword/ResetPassword';
import Home from './src/screens/Home/Home';
import ConfirmEmail from './src/screens/ConfirmEmail/ConfirmEmail';
import ForgotPassword from './src/screens/ForgotPassword/ForgotPassword';
const App=()=>{
  return(
    <SafeAreaView style={styles.container}>
      <SignUp/>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F9FBFC'
  },
});
export default App;
