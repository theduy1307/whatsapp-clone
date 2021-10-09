//import liraries
import * as React from "react";
import { StyleSheet, FlatList } from "react-native";

import { Text, View } from "../components/Themed";
import ChatListItem from "../components/ChatListItem";
import users from "../data/Users";
import ContactsListItem from "../components/ContactsListItem";

// create a component
const ContactsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={users}
        renderItem={({ item }) => <ContactsListItem user={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default ContactsScreen;
