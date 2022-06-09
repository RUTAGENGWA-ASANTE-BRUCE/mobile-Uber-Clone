import React from 'react'
import tw from "tailwind-react-native-classnames"
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {useSelector} from "react-redux"
import {selectOrigin} from "../slices/navSlice"
export default function App() {
    const origin =useSelector(selectOrigin)
  return (
      <MapView style={tw`flex-1`}
      mapType="mutedStandard"
      //  initialRegion={
      //     {
      //         latitude:37.78825,
      //         longitude:-122.4324,
      //         latitudeDelta:0.0922,
      //         longitudeDelta:0.0421
      //     }}

    >
        {origin?.location && (
            <Marker 
            coordinate={{
                latitude:37.78825,
              longitude:-122.4324,
            }}
            title="Origin"
            description="The user selecetd origin"
            identifier='origin'
        />
        )}
    </MapView>

  );
}

