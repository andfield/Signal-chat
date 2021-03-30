import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input, Image } from "react-native-elements";

const LoginScreen = ({ navigation }) => {
  // States for this view
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Sign In function
  const signIn = () => {};

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* Image of signal */}
      <Image
        source={{
          uri:
            "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
        }}
        style={{ width: 200, height: 200 }}
      />

      {/* Input Div */}
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChange={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChange={(text) => setPassword(text)}
        />
      </View>

      {/* Button Div */}
      <Button containerStyle={styles.button} onPress={signIn} title="Login" />
      <Button
        containerStyle={styles.button}
        onPress={() => navigation.navigate("Register")}
        title="Register"
        type="outline"
      />
    </View>
  );
};

export default LoginScreen;

//external styles for this page.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
