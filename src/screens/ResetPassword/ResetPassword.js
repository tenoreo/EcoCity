import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput/customInput';
import CustomButton from '../../components/CustomButton/customButton';
import { ScrollView } from 'react-native-web';
const ResetPassword = () => {
    const [code,setCode]=useState('');
    const [newPassword,setNewPassword]=useState('');
    
    const CodeInPressed=()=>{
        console.warn('Sign in');
    }
    const backLogin=()=>{

    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.logo}>Cambio de Contraseña</Text>
                <CustomInput placeholder="Codigo" value={code} setValue={setCode} secureTextEntry={false}/>
                <CustomInput placeholder="Ingrese la nueva contraseña" value={newPassword} setValue={setNewPassword} secureTextEntry={true}/>
                <CustomButton text='Confirmar' onPress={CodeInPressed} type="PRIMARY"/>
                <CustomButton text='Volver al login' onPress={backLogin} type="TERTIARY"/>
            </View>
        </ScrollView>
    );
}

export default ResetPassword;

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