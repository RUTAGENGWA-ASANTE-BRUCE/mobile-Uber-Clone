import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
  } from "react-native";
  import React from "react";
  import tw from "tailwind-react-native-classnames"
  import {Icon} from "react-native-elements"
  import { useNavigation } from "@react-navigation/native";
  const data=[
    {
      id:"123",
      icon:"home",
      location:"Home",
      destination:"Code Street, London, UK",
    },
    {
      id:"465",
      icon:"briefcase",
      location:"Work",
      destination:"London Eye, London, UK",
    },

  ]
  const NavFavourites = () => {
    const navigation=useNavigation()
    return (
    <FlatList data={data} keyExtractor={(item)=>item.id}
    renderItem={({item:{location,icon,destination}})=>(
      <TouchableOpacity style={tw`flex-row items-center p-4`}>
          <Icon type="ionicon" color="white" name={icon} size={10} style={tw`p-3 mr-4 bg-gray-300 rounded-full`}/>
          <View>
            <Text style={tw`text-lg font-semibold`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
      </TouchableOpacity>
    )} 
    />
    );
  };
  
  export default NavFavourites;
  