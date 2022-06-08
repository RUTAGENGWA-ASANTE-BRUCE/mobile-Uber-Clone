import { StyleSheet, Text, View,SafeAreaView,Image } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"
import Logo from "./UberLogo.png"
import NavOptions from '../components/NavOptions'

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw` h-full`}>
    <View style={tw`p-5`}>
      <Image source={{uri:"https://Links.papareact.com/gzs"}}  style={{width:100,height:100,resizeMode:"contain"}}/>
      <NavOptions />
    </View>

    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text:{
        color:"blue",
    }
})