import React, { useState, useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";

const RegisterScreen = ({ navigation }) => {

  //States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useLayoutEffect(() => {
      navigation.setOptions({
          headerTitleStyle: { marginLeft: 90}
      })
  }, [navigation])

  //Register Function
  const register = () => {};

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Create a Signal account
      </Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          type="text"
          autoFocus
          value={name}
          onChange={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          secureTextEntry
          onChange={(text) => setPassword(text)}
        />
        <Input
          placeholder="Profile Picture"
          type="text"
          value={imageUrl}
          onChange={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>

      <Button
        title="Register"
        containerStyle={styles.button}
        raised
        onPress={register}
      />
    </View>
  );
};

export default RegisterScreen;

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
      marginTop: 10
  },
});
