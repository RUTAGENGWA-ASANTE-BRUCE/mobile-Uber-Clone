import { StyleSheet, Text, View,SafeAreaView,TextInput,Button } from 'react-native'
import React from 'react'
import {GOOGLE_MAPS_APIKEY} from "@env";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete"
import { useDispatch } from "react-redux";
import {setDestination,setOrigin} from "../slices/navSlice"
import tw from "tailwind-react-native-classnames"
import { useNavigation } from "@react-navigation/native";

const NavigationCard = () => {
  const dispatch=useDispatch()
  const navigation=useNavigation()
  const submitHandler=()=>{
    navigation.navigate("RideOptionsCard");
  }
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-xl text-center py-5`}>NavigationCard</Text>
      <View style={tw`flex-shrink border-t border-gray-200 `}>
      {/* <GooglePlacesAutocomplete 
      placeholder="Where to?" 
      styles={toInputBoxStyles} 
      query={{
        key:GOOGLE_MAPS_APIKEY,
        language:"en"
      }}
      onPress={(data,details=null)=>{
        dispatch(setDestination({
            location:details.geometry.location,
            description:data.description
        }))
        navigation.navigate("RideOptionsCard")
      }}
      fetchDetails={true}
      enablePoweredByContainer={false}
      minLength={2}
      nearbyPlacesAPI='GooglePlacesSearch' 
    debounce={400} 

      /> */}
         <TextInput
        style={{height: 40}}
        placeholder="Where to?"
        onChangeText={newText =>{
          dispatch(setOrigin({location:newText,description:`My origin is ${newText} `}));
        dispatch(setDestination(setDestination(null)))
        }}
      />
        <Button title="submit" onPress={submitHandler} />
      </View>
    </SafeAreaView>
  )
}

export default NavigationCard

const toInputBoxStyles = StyleSheet.create({
    container:{
        backgroundColor:"White",
        paddingTop:20,
        flex:0,
    },
    textInput:{
        backgroundColor:"#DDDDDF",
        borderRadius:0,
        fontSize:18,
    },
    textInputContainer:{
        paddingHoizontal:20,
        paddingBottom:0,
    }
})