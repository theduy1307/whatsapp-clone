import React from "react";
import { Text, FlatList, ImageBackground } from "react-native";
import { useRoute } from "@react-navigation/native";
import ChatMessage from "../components/ChatMessage";
import chatRoomData from "../data/Chats";
import InputBox from "../components/InputBox";

const ChatRoomScreen = () => {
  const route = useRoute();
  const BG = require('../assets/images/BG.png')
  console.log(route.params);
  return (
    <ImageBackground style={{width:'100%', height:'100%'}} source={BG}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
        inverted
      />
      <InputBox/>
    </ImageBackground>
  );
};

export default ChatRoomScreen;
