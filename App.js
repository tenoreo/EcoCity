import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/screens/SignIn/login';
import SignUp from './src/screens/SignUp/signUp'
import ResetPassword from './src/screens/ResetPassword/ResetPassword';
import Home from './src/screens/Home/Home';
import ConfirmEmail from './src/screens/ConfirmEmail/ConfirmEmail';
import ForgotPassword from './src/screens/ForgotPassword/ForgotPassword';

export default function App() {
  return (
    <View style={styles.container}>
      <Login/>
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
});
