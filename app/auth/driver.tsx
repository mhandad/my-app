import { View, Text } from 'react-native'
import React from 'react'
import {MaterialIcons} from '@expo/vector-icons'

const driver = () => {
  return (
    
<>
    <View style={{backgroundColor: '#000', height:122, justifyContent:"flex-start", alignItems:"center", flexDirection:"row"}}>

        <MaterialIcons name="arrow-back" color={'#fff'} size={24} />
        
      <Text style={{color: "white", fontSize: 22, marginLeft:16 }}>Cadastro de novo motorista</Text>
    </View>
    <Text>drive</Text>
 </>
    
)
}

export default driver