import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NavBackButton = ({navigation}:any) => {
  return (
    <Pressable style={{ padding: 10 }} onPress={() => navigation.goBack()}>
    <Text> back </Text>
  </Pressable>
  )
}

export default NavBackButton

const styles = StyleSheet.create({})