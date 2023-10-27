import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const NavHeading = ({ text }:{text:string}) => {
  return (
    <Text>
      {text}
    </Text>
  );
};

export default NavHeading

const styles = StyleSheet.create({})