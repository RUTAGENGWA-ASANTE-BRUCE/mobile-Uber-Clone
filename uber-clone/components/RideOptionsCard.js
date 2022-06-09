import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,FlatList,Image } from 'react-native'
import {Icon} from "react-native-elements"
import {setDestination,selectDestination,setOrigin} from "../slices/navSlice"
import {useSelector} from "react-redux"
  import tw from "tailwind-react-native-classnames"
import { useNavigation } from "@react-navigation/native";
import React,{useState,useEffect} from 'react'
import {useDispatch} from "react-redux"
import {selectTravelTimeInformation} from "../slices/navSlice"
import "intl";

import "intl/locale-data/jsonp/en";
const data=[
  {
    id:"Uber-X_123",
    title:"UberX",
    multiplier:1,
    image:"https://Links.papareact.com/3pn"
  },
  {
    id:"Uber-XL-456",
    title:"Uber XL",
    multiplier:1.2,
    image:"https://Links.papareact.com/5w8"
  },
  {
    id:"Uber-LUX-785",
    title:"Uber LUX",
    multiplier:1.75,
    image:"https://Links.papareact.com/7pf"
  }
]
const RideOptionsCard = () => {
  const SURGE_CHARGE_RATE=1.5;
  const destination=useSelector(selectDestination);
  const navigation=useNavigation()
  const [selected,setSelected]=useState(null)
  const travelTimeInformation=useSelector(selectTravelTimeInformation)
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
    <View>
      <TouchableOpacity style={tw`absolute z-50 top-3 left-5 p-3 rounded-full`} onPress={()=>{navigation.navigate("NavigationCard")}}>
          <Icon type="fontawesome" name="chevron-left"/>
      </TouchableOpacity>
      <Text style={tw`text-center py-5 text-xl`}>Select a Ride - 
      {travelTimeInformation?.distance.text}</Text>
    </View>
    <FlatList 
    data={data}
    keyExtractor={(item)=>item.id}
    renderItem={({item:{id,multiplier,title,image},item})=>(
      <TouchableOpacity
      
       style={tw`flex  flex-row justify-between items-center px-10 ${id===selected?.id && "bg-gray-200"}`} onPress={()=>setSelected(item)}>
        <Image style={{width:70,height:70,resizeMode:"contain"}} source={{uri:image}} />
        <View style={tw``}>
            <Text style={tw`text-lg font-semibold`}>{title}</Text>
            <Text>{travelTimeInformation?.duration.text} Travel Time</Text>
        </View>
        <Text style={tw`text-lg`}>
        {new Intl.NumberFormat("en-gb", {
                  style: "currency",
                  currency: "GBP",
                }).format(
                  (travelTimeInformation?.duration.value *
                    SURGE_CHARGE_RATE *
                    multiplier) /
                    100
                )}
        </Text>
      </TouchableOpacity>
    )}
      />
      <View style={tw`mt-auto border-t border-gray-200`} >
      <TouchableOpacity style={tw` bg-black py-2 m-2 ${!selected && "bg-gray-300"}`}
      disabled={!selected}
      >
        <Text style={tw`text-center text-white text-xl`}>Choose {selected?.id}</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})