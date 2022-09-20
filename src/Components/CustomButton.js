import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({item,label,action}) => {
  return (
    <TouchableOpacity 
    disabled={label == '-' && item.qty < 1 ? true : false}
    onPress={action}
    style={styles.cartbtn}>
        <Text>{label}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    cartbtn:{
        borderWidth:1,
        width:20,
        height:20,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: "silver",
        marginRight:5,
        marginStart:5
      }
})