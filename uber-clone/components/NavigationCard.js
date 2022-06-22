import { StyleSheet, Text, View,SafeAreaView,TextInput,Button,TouchableOpacity,Pressable } from 'react-native'
import React from 'react'
import {GOOGLE_MAPS_APIKEY} from "@env";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete"
import { useDispatch } from "react-redux";
import {Icon} from "react-native-elements"
import {setDestination,setOrigin} from "../slices/navSlice"
  import NavFavourites from "../components/NavFavourites"
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
        style={{height: 30,  backgroundColor:"#DDDDDF",}}
        placeholder="Where to?"
        
                onChangeText={newText =>{
        dispatch(setDestination({location:newText,description:`My destination  is ${newText} `}))
        }}
      />

        <Pressable   onPress={submitHandler} style={tw`bg-blue-600 h-6 text-center`}><Text style={tw`text-center mt-0.5 text-white`}>Submit</Text></Pressable>
        <NavFavourites />
      </View>
        <View style={tw`flex-row flex justify-evenly bg-white mt-auto py-2 border-t border-gray-100`}>
        <TouchableOpacity style={tw`flex flex-row w-24 bg-black px-4 py-3 rounded-full justify-between`} onPress={()=>{navigation.navigate("RideOptionsCard")}}>
          <Icon name="car" type="font-awesome" color="white" size={16}/>
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={tw`flex flex-row w-24 justify-between w-24  px-4 py-3`}>
          <Icon name="fast-food-outline" type="ionicon" color="black" size={16}/>
          <Text style={tw`text-black text-center`}>Eats</Text>
        </TouchableOpacity>
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