import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Platform} from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context"
import {KeyboardAvoidingView} from "react-native"
import {Provider} from "react-redux"
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { store } from './store';
import "react-native-gesture-handler"
import { NavigationContainer }