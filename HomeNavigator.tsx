import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './screens/HomeScreen';
import RestaurantsScreen from './screens/RestaurantsScreen/RestaurantsScreen';
import RestaurantDetailsScreen from './screens/RestaurantsDetailsScreen/RestaurantDetailsScreen';
import NavHeading from './components/NavHeading';
import NavBackButton from './components/NavBackButton';
const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen"
      screenOptions={({navigation})=>{
        return {
          headerShown: true,
          headerBackVisible: false,
          headerTitleAlign: "center",
          headerTitle: () => <NavHeading text="Restaurants" />,
          headerRight: () => <NavBackButton navigation={navigation}  />
        }
      }}
    >


      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={() => ({
          headerShown: false
        })}
      />

      <Stack.Screen
        name="RestaurantsScreen"
        component={RestaurantsScreen}
      />

      <Stack.Screen
        name="RestaurantsDetailsScreen"
        component={RestaurantDetailsScreen}
      />


    </Stack.Navigator>
  )
}

export default HomeNavigator

const styles = StyleSheet.create({})