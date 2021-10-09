//import liraries
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './styles';
// create a component
const NewMessageButton = () => {
    const navigation = useNavigation()
    const onPress = () => { 
        navigation.navigate("Contacts")
        console.log('dfgsdg')
    }
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            name="message-reply-text"
            size={28}
            color={"white"}
          />
        </View>
      </TouchableOpacity>
    );
};


//make this component available to the app
export default NewMessageButton;
