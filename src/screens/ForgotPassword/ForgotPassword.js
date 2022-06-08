import { StyleSheet, Text, View, ScrollView} from 'react-native'
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput/customInput';
import CustomButton from '../../components/CustomButton/customButton';
const ForgotPassword = () => {
    const [username,setUsername]=useState('');
    const CodeInPressed=()=>{
        console.warn('Sign in');
    }
    const backLogin=()=>{

    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.logo}>Cambio de Contraseña</Text>
                <CustomInput placeholder="Usuario o correo Electronico" value={username} setValue={setUsername} secureTextEntry={false}/>
                <CustomButton text='Confirmar' onPress={CodeInPressed} type="PRIMARY"/>
                <CustomButton text='Volver al login' onPress={backLogin} type="TERTIARY"/>
            </View>
        </ScrollView>
    );
}

export default ForgotPassword;

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