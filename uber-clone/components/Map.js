import React from 'react'
import tw from "tailwind-react-native-classnames"
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions'
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {useSelector,useDispatch} from "react-redux"
import {selectOrigin,selectDestination,setTravelTimeInformation} from "../slices/navSlice"
import {useRef} from "react"
import {useEffect} from "react"
export default function App() {
    const origin =useSelector(selectOrigin);
    const dispatch=useDispatch()
    const destination=useSelector(selectDestination);
    const mapRef=useRef(null);
    useEffect(()=>{
        if(!origin || !destination) return;
        mapRef.current.fitToSuppliedMarkers(["origin","destnation"],{
          edgePadding:{top:50,right:50,bottom:5,left:50},
        })
    },[origin,destination])
    useEffect(()=>{
      if(!origin || !destination) return;
      dispatch(setTravelTimeInformation({distance:{text:"470 mi",value:75640,},duration:{text:"8 hours 7 min",value:29240},statues:"Ok"}))
    })
  return (
      <MapView style={tw`flex-1`}
      mapType="mutedStandard"
      ref={mapRef}
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
        {/* {origin && destination && <MapViewDirections
          origin={origin}
          destination={destination}
          strokeWidth={3}
          strokeColor={"black"}
          apikey={"AIzaSyDMARlawEcd00HDP7EEfsWnHr5Yzfw86WM"}
          
        />} */}
        {destination?.location && (
            <Marker 
            coordinate={{
                latitude:57.78825,
              longitude:-422.4324,
            }}
            title="Origin"
            description="The user selecetd origin"
            identifier='origin'
        />
        )}
    </MapView>

  );
}

