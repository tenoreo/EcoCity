import { StyleSheet, View,KeyboardAvoidingView,TextInput,TouchableOpacity,Text } from 'react-native';
import React,{ useState } from 'react';

const ResetPassword = () => {
    const [contrasena,setContrasena]=useState('');
    const [confimarContraseña,setConfimarContraseña]=useState('');
    const verificarContrasena=()=>{
        if(contrasena==''  || confimarContraseña==''){
            console.warn('Verificar que los campos esten llenos');
        }else if(contrasena!=confimarContraseña){
            console.warn('Verificar que las contraseña sean iguales')
        }else{
            navigation.navigate('Login');
        }
    }
  return (
    <KeyboardAvoidingView 
    style={styles.container}
    behavior="padding">
        {/* Inputs */}
        <View>
            <Text style={styles.title}>Cambiar de Contraseña</Text>
        </View>
        <View style={styles.inputContainer}>
            <TextInput 
            placeholder="Nueva Contraseña"
            value={contrasena}
            onChangeText={text=>setContrasena(text)}
            style={styles.input}
            />
            <TextInput 
            placeholder="Confirmación de la Nueva Contraseña"
            value={confimarContraseña}
            onChangeText={text=>setConfimarContraseña(text)}
            style={styles.input}
            secureTextEntry
            />
        </View>

        {/* Buttons*/}
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={()=>{verificarContrasena()}}
                style={styles.button}
            >
                <Text 
                style={styles.buttonText}>
                    Confirmar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                 onPress={()=>{navigation.navigate('login')}}
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

export default ResetPassword;

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