import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Navbar() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Login App (Apellido, Apellido)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6C2EF2",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});