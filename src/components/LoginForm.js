import React from "react";
import {
  View,
  TextInput,
  Pressable,
  Text,
  StyleSheet,
} from "react-native";

export default function LoginForm({
  email,
  password,
  setEmail,
  setPassword,
  onLogin,
}) {
  return (
    <View>

      <TextInput
        placeholder="Correo electrónico"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        style={styles.input}

      />

      <TextInput
        placeholder="Contraseña"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        onSubmitEditing={onLogin}
      />

      <Pressable
        onPress={onLogin}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.buttonText}>INGRESAR</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#6C2EF2",
    borderRadius: 8,
    padding: 14,
    marginBottom: 15,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#7B3FF2",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  buttonPressed: {
  backgroundColor: "#481e9bff",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 4,
    transform: [{ scale: 0.98 }]
  },
  shadowOpacity: 0.3,
  shadowRadius: 6,
  elevation: 8, // Android
},
});