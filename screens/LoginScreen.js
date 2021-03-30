import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { auth } from "../firebase";

const LoginScreen = ({ navigation }) => {
  // States for this view
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //on load fire the effect.
  useEffect(() => {
    //when the user is signed in or out.
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      //if the user is signed in push to home screen
      if (authUser) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  //Sign In function
  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error));
  };

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
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={signIn}
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
