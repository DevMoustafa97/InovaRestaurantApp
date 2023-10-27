// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const RestaurantDetailsScreen = () => {
//   console.log("RestaurantsDetailsScreen")
//   return (
//     <View>
//       <Text>RestaurantDetailsScreen</Text>
//     </View>
//   )
// }

// export default RestaurantDetailsScreen

// const styles = StyleSheet.create({})


import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useRestaurantDetailsScreenData } from './useRestaurantsDetailsScreen';

interface Restaurant {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
}

const restaurant: Restaurant = {
  id: 1,
  name: 'Restaurant A',
  address: '123 Main Street, City, Country',
  latitude: 37.78825,
  longitude: -122.4324,
};

const RestaurantDetailsScreen: React.FC = ({navigation, route}:any) => {
  console.log("🚀 --------------------------------------------------------🚀")
  console.log("🚀 ~ file: RestaurantDetailsScreen.tsx:40 ~ route:", route)
  console.log("🚀 --------------------------------------------------------🚀")
  const {data, isError, isLoading} = useRestaurantDetailsScreenData(route.params.id)
  if (isError ) return (
    <View style={styles.container}>
      <Text>Error please try again ...</Text>
    </View>
  )

    if (isLoading ) return (
    <View style={styles.container}>
      <Text>Loading ...</Text>
    </View>
  )
  console.log("🚀 ------------------------------------------------------🚀")
  console.log("🚀 ~ file: RestaurantDetailsScreen.tsx:41 ~ data:", data)
  console.log("🚀 ------------------------------------------------------🚀")
  
  // console.log("🚀 ------------------------------------------------------🚀")
  // console.log("🚀 ~ file: RestaurantDetailsScreen.tsx:41 ~ data:", data)
  // console.log("🚀 ------------------------------------------------------🚀")

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: restaurant.latitude,
          longitude: restaurant.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
      >
        <Marker
          coordinate={{ latitude: restaurant.latitude, longitude: restaurant.longitude }}
          title={restaurant.name}
        />
      </MapView>
      <View style={styles.addressContainer}>
        <Text style={styles.addressText}>{restaurant.address}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  addressContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  addressText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RestaurantDetailsScreen;