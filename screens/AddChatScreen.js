import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input, Icon} from "react-native-elements";
import {db} from '../firebase'

const AddChatScreen = ({ navigation }) => {
   useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new Chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);

  //state
  const [input, setInput] = useState("")

  //Function to Create a new Chat
  const createChat = async () => {
    //add a new collection to the chats db.
    await db.collection('chats').add({
        chatName: input
    })
    .then(() => {
        navigation.goBack()
    })
    .catch((error) => alert(error))
  }

  return (
    <View style={styles.container}>
      <Input 
        placeholder="Enter a chat name"
        value={input}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing = {createChat}
        leftIcon={
            <Icon name="wechat" type="antdesign" size={24} color="black" />
        }
      />
      <Button disabled={!input} onPress={createChat} title='Create new Chat' />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'white',
      padding: 30,
      height: "100%"
  },
});
