import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";

export default function LoginOptions() {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.option}>
          ¿Olvidaste la contraseña?
        </Text>
      </Pressable>

      <Pressable>
        <Text style={styles.option}>
          Crear Cuenta
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    alignItems: "center",
  },

  option: {
    fontSize: 17,
    marginBottom: 18,
    color: "#222",
  },
});