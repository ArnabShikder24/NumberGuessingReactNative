import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Title = ({children}) => {
  return <Text style={styles.title}>{children}</Text>
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: "white",
    borderWidth: 2,
    borderColor: "white",
    padding: 10,
    textAlign: 'center'
  }
})