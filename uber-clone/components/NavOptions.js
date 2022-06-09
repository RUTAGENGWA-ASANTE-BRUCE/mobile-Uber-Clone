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

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://Links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://Links.papareact.com/28w",
    screen: "EatsScreen",
  },
];
const NavOptions = () => {
  const navigation=useNavigation()
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={()=>navigation.navigate(item.screen)} style={tw`p-2 pl-6 pt-4 bg-gray-200 m-2 pb-8 w-40`}>
          <View>
            <Image
              source={{ uri: item.image }}
              style={{ width: 120, height: 120, resizeMode: "contain" }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon type="antdesign" color="white" name="arrowright" style={tw`p-2 bg-black rounded-full w-10 mt-3`}/>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
