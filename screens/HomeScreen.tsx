import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}:any) => {
  console.log("homeScreen")
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text></Text>
      <Button title='go to restaurants' onPress={()=>navigation.navigate("RestaurantsScreen")} />   
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  }
})