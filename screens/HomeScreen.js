import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import CustomListItem from "../components/CustomListItem";
import { Avatar } from "react-native-elements";
import { auth, db } from "../firebase";
import { TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {

// signout function
const signOutUser = () => {
    auth.signOut().then(() => {
        navigation.replace('Login')
    })
} 

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "white" },
      headerTitleStyle: { color: "black", marginLeft: 96 },
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
