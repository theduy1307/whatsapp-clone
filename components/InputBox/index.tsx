//import liraries
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo,
  Fontisto,
  MaterialIcons,
} from "@expo/vector-icons";
import React, { Component, useState } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, TextInput } from "react-native";
import styles from './styles'

// create a component
const InputBox = () => {
  const [message, setMessage] = useState('')
  const onMicrophonePress = () => {
    console.warn('Microphone')
  }
  const onSendPess = () => {
    console.warn(`Sending: ${message}`);
    setMessage('')
  }
  const onPress = () =>{
    if(!message)
    {
      onMicrophonePress()
    }
    else {
      onSendPess()
    }
  }
    return (
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <FontAwesome5 name="laugh-beam" size={24} color="grey" />
          <TextInput
            placeholder={"Type your message"}
            style={styles.textInput}
            multiline
            value={message}
            onChangeText={setMessage}
          />
          <Entypo
            name="attachment"
            size={24}
            color="grey"
            style={styles.icon}
          />
          {!message && <Fontisto name="camera" size={24} color="grey" style={styles.icon} />}
        </View>
        <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
          {!message ? (
            <MaterialCommunityIcons
              name="microphone"
              size={28}
              color={"white"}
            />
          ) : (
            <MaterialIcons 
              name="send" 
              size={28} 
              color={"white"} 
            />
          )}
        </View>
        </TouchableOpacity>
      </View>
    );
};
//make this component available to the app
export default InputBox;
