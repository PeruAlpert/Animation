import {Platform, StyleSheet, Text, View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import InfoScreen from '../screens/InfoScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import CustomTabBar from './CustomTabBar';
const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function Navigation() {


  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}


function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Info"
        component={InfoScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Info" component={InfoScreen} />
    </BottomTab.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {alignItems: 'center', top: 5, width: '100%'},
});
