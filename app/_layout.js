import React from "react";
import { View, Text, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.enoch}>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
    </View>
  )
}

export default App;


const styles = StyleSheet.create({
  enoch: {
    flex: 1,
    backgroundColor: "white"
  },
});