import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {CustomButton} from '../CustomButton/customButton';

const SocialSignInButton = () => {
    const signInGoogle=()=>{
        console.warn('Sign in');
    }
    const signInFacebook=()=>{
        console.warn('Sign in');
    }
  return (
    <View>
        {/* <CustomButton text='Registrarse con Facebook' onPress={signInFacebook} bgColor="#E7EAF4" fgColor="#4765A9"/>
        <CustomButton text='Registrarse con Google' onPress={signInGoogle} bgColor="#FAE9EA" fgColor="#DD4D44"/> */}
    </View>
  )
}

export default SocialSignInButton;

const styles = StyleSheet.create({})