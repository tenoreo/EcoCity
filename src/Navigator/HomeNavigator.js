import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ResetPassword from '../screens/ResetPassword';
import CodeVerification from '../screens/CodeVerification';
import ForgetPassword from '../screens/ForgetPassword';
import Home from '../screens/Home';

const Stack=createNativeStackNavigator()

const HomeNavigator=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignIn">
                <Stack.Screen options={{headerShown:false}} name='SignIn' component={SignIn}/>
                <Stack.Screen options={{headerShown:false}} name='SignUp' component={SignUp}/>
                <Stack.Screen options={{headerShown:false}} name='ForgetPassword' component={ForgetPassword}/>
                <Stack.Screen options={{headerShown:false}} name='CodeVerification' component={CodeVerification}/>
                <Stack.Screen options={{headerShown:false}} name='ResetPassword' component={ResetPassword}/>
                <Stack.Screen options={{headerShown:false}} name='Home' component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default HomeNavigator;
