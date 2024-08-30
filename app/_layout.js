import React from "react";

import { View, Text, StyleSheet } from "react-native";

const App = () => {
  return (
    <View>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <View>
        <Text style={bala.firstText}>A</Text>
        <Text style={bala.secondT}>B</Text>
        <Text>C</Text>
        <Text>D</Text>
        <Text>E</Text>
      </View>
    </View>
  )
}

export default App;


const bala = StyleSheet.create({
  firstText: {
    fontSize: 40,
    color: "red",
    fontWeight: 'bold'
  },
  secondT: {
    fontSize: 60,
    color: 'yellow',
    fontWeight: "700",
  },
});