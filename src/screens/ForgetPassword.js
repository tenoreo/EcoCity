import { StyleSheet, View,KeyboardAvoidingView,TextInput,TouchableOpacity,Text } from 'react-native';
import React,{ useState } from 'react';

const ForgetPassword = ({navigation}) => {
    const [correo,setCorreo]=useState('');
  return (
    <KeyboardAvoidingView 
    style={styles.container}
    behavior="padding">
        {/* Inputs */}
        <View>
            <Text style={styles.title}>Solicitar Cambio de contraseña</Text>
        </View>
        <View style={styles.inputContainer}>
            <TextInput 
            placeholder="Ingresar Correo Electronico registrado"
            value={correo}
            onChangeText={text=>setCorreo(text)}
            style={styles.input}
            />
        </View>

        {/* Buttons*/}
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={()=>{navigation.navigate('CodeVerification')}}
                style={styles.button}
            >
                <Text 
                style={styles.buttonText}>
                    Solicitar Codigo de Verificación</Text>
            </TouchableOpacity>
            <TouchableOpacity
                 onPress={()=>{navigation.navigate('SignIn')}}
                style={[styles.button,styles.buttonOutline]}
            >
                <Text 
                style={styles.buttonOutlineText}>
                    Volver al login</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default ForgetPassword;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        paddingBottom:20,
        alignItems:'center',
        fontSize:25,
        fontWeight:'900',
        color:'#1a763e'
    },
    inputContainer:{
        width:'80%',
    },
    input:{
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:5
    },
    buttonContainer:{
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40
    },
    button:{
        backgroundColor:'#1a763e',
        width:'100%',
        padding:15,
        borderRadius:10,
        alignItems:'center'
    },
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:16,
    },
    buttonOutline:{
        backgroundColor:'white',
        marginTop:5,
        borderColor:'#1a763e',
        borderWidth:2
    },
    buttonOutlineText:{
        color:'#1a763e',
        fontSize:16,
        fontWeight:'700'
    },
    buttonWhite:{
        padding:20
    },
    textWhite:{
        color:'#808080',
        fontSize:16,
        fontWeight:'700',
    }
  });