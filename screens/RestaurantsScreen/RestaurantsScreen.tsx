

import React, { useState } from 'react';
import { View, Text, Image, SectionList, TextInput, StyleSheet, Pressable } from 'react-native';
import { useRestaurantsScreen } from './useRestaurantsScreen';

// Restaurant data (dummy data for demonstration)
interface Restaurant {
  id: number;
  name: string;
  price: string;
  rating: number;
  reviewCount: number;
  image: string;
}

// const restaurants: Restaurant[] = [
//   {
//     id: 1,
//     name: 'Restaurant A',
//     price: '$',
//     rating: 4.5,
//     reviewCount: 100,
//     image: "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
//   },
//   {
//     id: 2,
//     name: 'Restaurant B',
//     price: '$$',
//     rating: 4.2,
//     reviewCount: 80,
//     image: "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",

//   },
//   {
//     id: 3,
//     name: 'Restaurant C',
//     price: '$$$',
//     rating: 4.8,
//     reviewCount: 120,
//     image: "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
  
//   },
//   // Add more restaurants...
// ];

const RestaurantScreen: React.FC = ( {navigation}:any ) => {
  const [searchText, setSearchText] = useState('');

  const { data : restaurants, isError, isLoading} = useRestaurantsScreen()
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

  console.log("🚀 ------------------------------------------------🚀")
  console.log("🚀 ~ file: RestaurantsScreen.tsx:51 ~ data:", restaurants)
  console.log("🚀 ------------------------------------------------🚀")

  // Filter restaurants based on search text and price
  const filteredRestaurants = restaurants.businesses.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // Group restaurants by price
  const groupedRestaurants = [
    {
      title: 'Cost Effective',
      data: filteredRestaurants.filter((restaurant) => restaurant.price === '$'),
    },
    {
      title: 'Bit Pricer',
      data: filteredRestaurants.filter((restaurant) => restaurant.price === '$$'),
    },
    {
      title: 'Big Spender',
      data: filteredRestaurants.filter((restaurant) => restaurant.price === '$$$'),
    },
  ];

  // Render item for each restaurant
  const renderItem = ({ item }: { item: Restaurant }) => (
    <Pressable onPress={()=>navigation.navigate("RestaurantsDetailsScreen", {
      
        id:item.id
      
    })}>
    <View style={styles.restaurantContainer}>
      <Image source={{uri:item.image_url}} style={styles.restaurantImage} />
      <View style={styles.restaurantInfoContainer}>
        <Text style={styles.restaurantName}>{item.name}</Text>
        <Text style={styles.restaurantRating}>
          Rating: {item.rating} ({item.reviewCount} reviews)
        </Text>
      </View>
    </View>
    </Pressable>
  );

  // Render section header for each price category
  const renderSectionHeader = ({
    section: { title },
  }: {
    section: { title: string };
  }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );

  // if (isLoading ) return (
  //   <View style={styles.container}>
  //     <Text>Loading ...</Text>
  //   </View>
  // )

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <SectionList
        sections={groupedRestaurants}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchInput: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  sectionHeader: {
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  restaurantContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  restaurantImage: {
    width: 80,
    height: 80,
  },
  restaurantInfoContainer: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  restaurantRating: {
    fontSize: 14,
    color: '#888',
  },
});

export default RestaurantScreen;