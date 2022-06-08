import { StyleSheet, View,KeyboardAvoidingView,TextInput,TouchableOpacity,Text,ScrollView } from 'react-native';
import React,{useState} from 'react';
//import db from '../../servidor/firebase';
const APIURL='http://10.0.2.2:8888';

const SignUp = ({navigation}) => {
    const [user,setUser]=useState({
        nombre:"",
        apellido1:"",
        apellido2:"",
        telefono:"",
        correo:"",
        contrasena:"",
        confirmacionContrasena:""
    });
    const handleChangeText=(name,value)=>{
        setUser({...user,[name]:value});
    }
    const createNewUser= async() =>{
        if (user.nombre == '' || user.apellido1 == '' || user.apellido2 == '' ||
            user.telefono == '' || user.correo == '' || user.contrasena == '' ||
            user.confirmacionContrasena == '') {
            alert('Por favor, revisar los campos no llenados.');
        } else if (user.contrasena == '' && user.confirmacionContrasena == '') {
            alert('Las contraseñas no coinciden');
        }else {
            navigation.navigate('Home')
            //enviarUsuarioAPI();           
        }
    }
    const enviarUsuarioAPI=()=>{
        fetch(`${APIURL}/crearUsuario`,{
            method:'POST',
            headers:{'Content-Type': 'application/json',},
            body:JSON.stringify(user),
        }).then(res=>res.json())
        .then(data=>{console.log(data)})
        .catch(err=>console.log(err))
    }
  return (
      
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding">
        <View>
            <Text style={styles.title}>Registrar Usuario</Text>
        </View>
        <View style={styles.inputContainer}>
            <TextInput 
            placeholder="Correo electronico"
            onChangeText={text=>handleChangeText('correo',text)}
            style={styles.input}
            />
            <TextInput 
            placeholder="Nombre"
            onChangeText={text=>handleChangeText('nombre',text)}
            style={styles.input}
            />
            <TextInput 
            placeholder="Primer Apellido"
            onChangeText={text=>handleChangeText('apellido1',text)}
            style={styles.input}
            />
            <TextInput 
            placeholder="Segundo Apellido"
            onChangeText={text=>handleChangeText('apellido2',text)}
            style={styles.input}
            />
            <TextInput 
            placeholder="Número Telefonico"
            onChangeText={text=>handleChangeText('telefono',text)}
            style={styles.input}
            />
            <TextInput 
            placeholder="Contraseña"
            onChangeText={text=>handleChangeText('contrasena',text)}
            style={styles.input}
            secureTextEntry
            />
            <TextInput 
            placeholder="Confirma contraseña"
            onChangeText={text=>handleChangeText('confirmacionContrasena',text)}
            style={styles.input}
            secureTextEntry
            />
        </View>
        {/* Buttons*/}
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={()=>createNewUser()}
                style={styles.button}
            >
                <Text 
                style={styles.buttonText}>
                    Registrarse</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{navigation.navigate('SignIn')}}
                style={[styles.button,styles.buttonOutline]}
            >
                <Text 
                style={styles.buttonOutlineText}>
                    Iniciar Sesión</Text>
            </TouchableOpacity>
        </View>        
    </KeyboardAvoidingView>
  )
}

export default SignUp;

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