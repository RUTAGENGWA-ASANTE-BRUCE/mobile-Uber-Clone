import { StyleSheet, Text,TextInput, View,SafeAreaView,Image,Button } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete"
import { useNavigation } from "@react-navigation/native";
import NavOptions from '../components/NavOptions'
import { useDispatch } from "react-redux";
import {setDestination,setOrigin} from "../slices/navSlice"
import {GOOGLE_MAPS_APIKEY} from "@env";
const HomeScreen = () => {
  const navigation=useNavigation()
  const dispatch=useDispatch()
  const submitHandler=()=>{
    navigation.navigate("NavigationCard");
  }
  return (
    <SafeAreaView style={tw` h-full`}>
    <View style={tw`p-5`}>
      <Image source={{uri:"https://Links.papareact.com/gzs"}}  style={{width:100,height:100,resizeMode:"contain"}}/>
      {/* <GooglePlacesAutocomplete 
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
        key:"AIzaSyDMARlawEcd00HDP7EEfsWnHr5Yzfw86WM",
        language:"en"
      }}
      onPress={(data,details=null)=>{
        dispatch(setOrigin({location:details.geometry.location,description:data.description}));
        dispatch(setDestination(setDestination(null)))
      }}
      fetchDetails={true}
      enablePoweredByContainer={false}
      minLength={2}
      nearbyPlacesAPI='GooglePlacesSearch' 
    debounce={400} 

      /> */}
         <TextInput
        style={{height: 40}}
        placeholder="Where from?"
        onChangeText={newText =>{
          dispatch(setOrigin({location:newText,description:`My origin is ${newText} `}));
        dispatch(setDestination(setDestination(null)))
        }}
      />
        <Button title="submit" onPress={submitHandler} />

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