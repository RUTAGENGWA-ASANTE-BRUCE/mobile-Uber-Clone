import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import tw from "tailwind-react-native-classnames"
import MapView from "react-native-maps"

import Map from '../components/Map'
import NavigationCard from '../components/NavigationCard';
import RideOptionsCard from '../components/RideOptionsCard';
import {selectOrigin,selectDestination} from "../slices/navSlice"
import {useSelector} from "react-redux"
const MapScreen = () => {
  const Stack=createNativeStackNavigator();
  const origin=useSelector(selectOrigin);
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
      <Stack.Navigator>
      <Stack.Screen name="NavigationCard" component={NavigationCard} options={{headerShown:false}}/>
      <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} options={{headerShown:false}}/>
      </Stack.Navigator>
      {/* <Text>Your currnent location: {origin.location}</Text> */}

      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})