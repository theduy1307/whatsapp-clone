//import liraries
import moment from "moment";
import React from "react";
import { View, Text } from "react-native";
import { Message } from "../../types";
import styles from "./styles";

export type ChatMessageProps = {
    message: Message
}
// create a component
const ChatMessage = (props: ChatMessageProps) => {
    const {message} = props
    const isMyMessage = () => {
        return message.user.id==='u1'
    }
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.messageBox,
          {
            backgroundColor: isMyMessage() ? "#DCF8C5" : "#white",
            marginLeft: isMyMessage() ? 50 : 0,
            marginRight: isMyMessage() ? 0 : 50,
          },
        ]}
      >
        {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
        <Text style={styles.message}>{message.content}</Text>
        <Text style={styles.time}>
          {moment(message.createdAt).fromNow()}
        </Text>
      </View>
    </View>
  );
};

//make this component available to the app
export default ChatMessage;
