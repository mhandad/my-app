import { View, Text, Image } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'
const index = () => {
  return (
    <View style ={{flex: 1, justifyContent:"center", alignItems: "center", paddingHorizontal: 89, backgroundColor:"rgb(255, 255, 255)"}}>

      <Text style= {{fontSize: 36, fontWeight: "600", color:"rgb(23, 59, 66)", marginBottom:32, textAlign:"center"}}>COMO VOCÊ QUER USAR O APP?</Text>
      <Link href="/auth/driver">
      <Image style={{width:150, height:150}} source ={require("../assets/driver.png")}/>
      </Link>
      <Text style={{fontSize:32, fontWeight:"bold", color:"rgb(31, 131, 149)"}}>MOTORISTA</Text>
      <Text style={{fontSize:18, marginBottom: 32}}>Ofereça carona e ganhe dinheiro</Text>

      <Link href="/auth/Passager">
      <Image style={{width:150, height:150}} source ={require("../assets/Passager.png")}/>
      </Link>
      <Text style={{fontSize:32, fontWeight:"bold", color:"rgb(31, 131, 149)"}}>CARONA</Text>
      <Text style={{fontSize:18, marginBottom: 32}}>Encontre caronas e economize</Text>
   </View>
  )
}

export default index