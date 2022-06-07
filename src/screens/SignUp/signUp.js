import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput/customInput';
import CustomButton from '../../components/CustomButton/customButton';
import { ScrollView } from 'react-native-web';
import {SocialSignInButton} from '../../components/SocialSignInButtons/SocialSignInButton'
const SignUp = () => {
    const [username,setUsername]=useState('');
    const [name,setName]=useState('');
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [cellphone,setCellphone]=useState('');
    const [email,setEmail]=useState('');
    const [contrasena,setContrasena]=useState('');
    const signUpPressed=()=>{
        console.warn('Sign Up');
    }
    const onPrivacyPress=()=>{

    }
    const onTermsPress=()=>{

    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.logo}>Registrar usuario</Text>
                <CustomInput placeholder="Usuario" value={username} setValue={setUsername} secureTextEntry={false}/>
                <CustomInput placeholder="Nombre" value={name} setValue={setName} secureTextEntry={false}/>
                <CustomInput placeholder="Primer Apellido" value={firstName} setValue={setFirstName} secureTextEntry={false}/>
                <CustomInput placeholder="Segundo Apellido" value={lastName} setValue={setLastName} secureTextEntry={false}/>
                <CustomInput placeholder="Número Telefonico" value={cellphone} setValue={setCellphone} secureTextEntry={false}/>
                <CustomInput placeholder="Correo Electonico" value={email} setValue={setEmail} secureTextEntry={false}/>
                <CustomInput placeholder="Contraseña" value={contrasena} setValue={setContrasena} secureTextEntry={true}/>
                <CustomButton text='Registrarse' onPress={signUpPressed} type="PRIMARY"/>
                <Text style={styles.text}>Mediante este registro, se confirma haber aceptado nuestros{' '}
                  <Text style={styles.link} onPress={onTermsPress}>Terminos</Text>{' '}y{' '}
                  <Text style={styles.link} onPress={onPrivacyPress}>Condiciones</Text>
                </Text>
                <CustomButton text='Registrarse' onPress={signUpPressed} type="TERTIARY"/>
                <CustomButton text='¿Olvido la Contraseña?' onPress={signUpPressed} />
                {/* <SocialSignInButton/> */}
            </View>
        </ScrollView>
    );
}

export default SignUp;

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        padding:20,
    },
    logo:{
        color:'#0E813C',
        fontSize:24,
        margin:10
    },
    text:{
      color: 'gray',
      marginVertical:10
    },
    link:{
      color:'#FDB075'
    }

})