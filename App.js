import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import HomeNavigator from './src/Navigator/HomeNavigator';
import HomePage from './src/screens/HomePage'
const App=()=> {
  return (
    
      <HomePage/>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
