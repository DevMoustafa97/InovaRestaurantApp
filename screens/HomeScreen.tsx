import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}:any) => {
  console.log("homeScreen")
  return (
    <View style={styles.container}>
      <Text style={styles.center}>Home Screen</Text>
      <Text style={styles.center}>Dear Inova Reviewer:</Text>
      <Text style={styles.center}>Thanks for putting some time to review my assessment</Text>
      <Text style={styles.center}>Really enjoyed this task even if it is not complete and i'm looking for your feedback </Text>
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
  },
  center:{textAlign:"center"}
})