import React from "react";
import { View, Text, StyleSheet, Button, Image, ScrollView } from "react-native";

const App = () => {
  return (
    <View style={styles.enoch}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'red' }}>RN Component</Text>
      <ScrollView>

        <View style={{ marginTop: 30, marginBottom: 30 }}>
          <Button title="Press Me" />
        </View>

        <Image source={require("../assets/images/enoch.jpg")} style={{ height: 200, width: 200, }} />

        <Image
          source={{ uri: "https://img.freepik.com/free-photo/close-up-hand-wearing-chains_23-2151693716.jpg?t=st=1725274832~exp=1725278432~hmac=4a0c3f00f576ec0849a638559980ded9333dfca5d8dc42273137c5249c4b1dd9&w=360" }}
          style={{ height: 200, width: 200, marginTop: 30, borderRadius: 200, }}
        />
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'red' }}>RN Component</Text>

        <View style={{ marginTop: 30, marginBottom: 30 }}>
          <Button title="Press Me" />
        </View>

        <Image source={require("../assets/images/enoch.jpg")} style={{ height: 200, width: 200, }} />

        <Image
          source={{ uri: "https://img.freepik.com/free-photo/close-up-hand-wearing-chains_23-2151693716.jpg?t=st=1725274832~exp=1725278432~hmac=4a0c3f00f576ec0849a638559980ded9333dfca5d8dc42273137c5249c4b1dd9&w=360" }}
          style={{ height: 200, width: 200, marginTop: 30, borderRadius: 200, }}
        />
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  enoch: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
});