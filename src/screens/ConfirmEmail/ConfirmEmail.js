import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput/customInput';
import CustomButton from '../../components/CustomButton/customButton';
import { ScrollView } from 'react-native-web';
import SocialSignInButton from '../../components/SocialSignInButtons/SocialSignInButton'
const ConfirmEmail = () => {
    const [code,setCode]=useState('');
    const [contrasena,setContrasena]=useState('');
    const CodeInPressed=()=>{
        console.warn('Sign in');
    }
    const resendCodeInPressed=()=>{

    }
    const backLogin=()=>{

    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.logo}>Correo de confirmación</Text>
                <CustomInput placeholder="Codigo de confirmación" value={code} setValue={setCode} secureTextEntry={false}/>
                <CustomButton text='Confirmar' onPress={CodeInPressed} type="PRIMARY"/>
                <CustomButton text='Reenviar Codigo' onPress={resendCodeInPressed} type="TERTIARY"/>
                <CustomButton text='Volver al login' onPress={backLogin} type="PRIMARY"/>
            </View>
        </ScrollView>
    );
}

export default ConfirmEmail;

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