import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function Banner() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/coca-cola.png")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 35,
  },

  image: {
    width: 280,
    height: 180,
    resizeMode: "contain",
    backgroundColor: "white",
  },
});