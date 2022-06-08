import { StyleSheet, Text, View,SafeAreaView,Image } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete"
import NavOptions from '../components/NavOptions'
import {GOOGLE_MAP_APIKEY} from "@env";
const HomeScreen = () => {
  return (
    <SafeAreaView style={tw` h-full`}>
    <View style={tw`p-5`}>
      <Image source={{uri:"https://Links.papareact.com/gzs"}}  style={{width:100,height:100,resizeMode:"contain"}}/>
      <GooglePlacesAutocomplete 
      placeholder="Where from?" 
      styles={{
        container:{
          flex:0,
        },
        textInput:{
          fontSize:18,
        }
      }} 
      query={{
        key:GOOGLE_MAP_APIKEY,
        language:"en"
      }}
      onPress={(data,details=null)=>{console.log(data)}}
      fetchDetails={true}
      enablePoweredByContainer={false}
      minLength={2}
      nearbyPlacesAPI='GooglePlacesSearch' 
    debounce={400} 

      />
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