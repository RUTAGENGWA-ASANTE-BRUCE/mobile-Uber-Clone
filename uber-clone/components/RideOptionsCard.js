import { StyleSheet, Text, View } from 'react-native'
import {setDestination,selectDestination,setOrigin} from "../slices/navSlice"
import {useSelector} from "react-redux"
import React from 'react'

const RideOptionsCard = () => {
  const destination=useSelector(selectDestination);

  return (
    <View>
      <Text>RideOptionsCard: {destination.location}</Text>
    </View>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})