import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Platform} from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context"
import {KeyboardAvoidingView} from "react-native"
import {Provider} from "react-redux"
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { store } from './store';
import "react-native-gesture-handler"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack=createNativeStackNavigator();
  return (
    <Provider store={store}>

    <NavigationContainer>
    <SafeAreaProvider>

    <KeyboardAvoidingView
     style={{flex:1}}
     behavior={Platform.OS==="ios"?"padding":"height"}
     keyboardVerticalOffset={Platform.OS==="ios"?-64:0}>

      <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="MapScreen" component={MapScreen} options={{headerShown:false}}/>
      </Stack.Navigator>

  
    </KeyboardAvoidingView>
    </SafeAreaProvider>
    </NavigationContainer>
    </Provider>
  );
}