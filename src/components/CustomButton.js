import { StyleSheet, Text, View ,Pressable} from 'react-native'
import React from 'react'

const CustomButton = ({onPress,text,type='PRIMARY',bgColor,fgColor}) => {
  return (
    <Pressable 
    onPress={onPress} 
    style={[
      styles.container,
      styles[`container_${type}`,
      bgColor?{backgroundColor:bgColor}:{}]]}>
      <Text 
      style={[
        styles.text,
        styles[`text_${type}`,
        fgColor?{color:fgColor}:{}]]}>{text}</Text>
    </Pressable>
  )
}

export default CustomButton;

const styles = StyleSheet.create({
  container:{
    width:'100%',
    padding:15,
    marginVertical:5,
    alignItems:'center',
    borderRadius:5
  },
  container_PRIMARY:{
    backgroundColor:'#0E813C',
  },
  container_TERTIARY:{
    backgroundColor:'white',
    borderColor:'#0E813C',
    borderWidth:2
  },
  text:{
    fontWeight:'bold',
  },
  text_PRIMARY:{
    color:'white',
  },
  text_TERTIARY:{
    backgroundColor:'#0E813C',
  }
})