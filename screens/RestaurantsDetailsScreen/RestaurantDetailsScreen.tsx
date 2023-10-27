import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useRestaurantDetailsScreenData } from './useRestaurantsDetailsScreen';

interface Restaurant {
  id: number;
  alias: string;
  address: string;
  latitude: number;
  longitude: number;
}

// const restaurant: Restaurant = {
//   id: 1,
//   name: 'Restaurant A',
//   address: '123 Main Street, City, Country',
//   latitude: 37.78825,
//   longitude: -122.4324,
// };

const RestaurantDetailsScreen: React.FC = ({navigation, route}:any) => {
  
  const {data: restaurant, isError, isLoading} = useRestaurantDetailsScreenData(route.params.id)
  console.log("🚀 ------------------------------------------------------------------🚀")
  console.log("🚀 ~ file: RestaurantDetailsScreen.tsx:42 ~ restaurant:",  restaurant?.coordinates?.latitude,
  restaurant?.coordinates?.longitude,)
  console.log("🚀 ------------------------------------------------------------------🚀")
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
  
  

  return (
    <View style={styles.container}>
      <View style={styles.addressContainer}>
        <Text style={styles.addressText}>{restaurant.alias}</Text>
      </View>
      <View style={styles.addressContainer}>
        {restaurant.location.display_address.map((segment:any, idx:number)=>(<Text key={idx} style={styles.addressText}>{segment}</Text>))}
      </View>
      {restaurant?.coordinates?<MapView
        style={styles.map}
        initialRegion={{
          latitude: restaurant?.coordinates?.latitude,
          longitude: restaurant?.coordinates?.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
      >
        <Marker
          coordinate={{ latitude: restaurant.latitude, longitude: restaurant.longitude }}
          title={restaurant.name}
        />
      </MapView>:null}
      
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