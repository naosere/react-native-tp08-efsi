import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import LoginForm from "../components/LoginForm";
import LoginOptions from "../components/LoginOptions";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleLogin = () => {
    if (
      email === "hola1234@gmail.com" &&
      password === "12345678"
    ) {
      setMessage("Login exitoso");
      setSuccess(true);
    } else {
      setMessage("Usuario o contraseña incorrectos.");
      setSuccess(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />

      <View style={styles.content}>
        <Banner />

        <LoginForm
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          onLogin={handleLogin}
        />

        {message !== "" && (
          <Text
            style={[
              styles.message,
              { color: success ? "green" : "red" },
            ]}
          >
            {message}
          </Text>
        )}

        <LoginOptions />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECECEC",
  },

  content: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 30,
  },

  message: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 20,
    fontWeight: "bold",
  },
});