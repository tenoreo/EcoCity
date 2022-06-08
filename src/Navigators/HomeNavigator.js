import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, TabRouter } from '@react-navigation/native';

//screens
import Login from '../screens/SignIn/login';
import SignUp from '../screens/SignUp/signUp';
import ConfirmEmail from '../screens/ConfirmEmail/ConfirmEmail';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import ResetPassword from '../screens/ResetPassword/ResetPassword';
import Home from '../screens/Home/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStackNavigator=createNativeStackNavigator();

const Tab=createBottomTabNavigator();

const MyTabs=()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Login" component={Login}/>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="SignUp" component={SignUp}/>
        </Tab.Navigator>
    );
}

export default Navigation=()=>{
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}