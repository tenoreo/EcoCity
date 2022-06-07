import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput/customInput';
import CustomButton from '../../components/CustomButton/customButton';
import { ScrollView } from 'react-native-web';
import SocialSignInButton from '../../components/SocialSignInButtons/SocialSignInButton';
import Navigation from '../../Navigators/HomeNavigator';
const Login = () => {
    const [username,setUsername]=useState('');
    const [contrasena,setContrasena]=useState('');
    const signInPressed=()=>{
        console.warn('Sign in');
    }
    const signUpPressed=()=>{
        console.warn('Sign Up');
    }
    const signInGoogle=()=>{
        console.warn('Sign in');
    }
    const signInFacebook=()=>{
        console.warn('Sign in');
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.logo}>EcoCity</Text>
                <CustomInput placeholder="Usuario" value={username} setValue={setUsername} secureTextEntry={false}/>
                <CustomInput placeholder="Contraseña" value={contrasena} setValue={setContrasena} secureTextEntry={true}/>
                <CustomButton text='Iniciar Sesión' onPress={signInPressed} type="PRIMARY"/>
                <CustomButton text='Registrarse' onPress={signUpPressed} type="TERTIARY"/>
                <CustomButton text='¿Olvido la Contraseña?' onPress={signUpPressed} />
                {/* <SocialSignInButton/> */}
            </View>
        </ScrollView>
    );
}

export default Login;

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        padding:20,
    },
    logo:{
        color:'#0E813C',
        fontSize:24,
        margin:10
    }
})