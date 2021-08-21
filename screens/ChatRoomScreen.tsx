import React from 'react';
import {FlatList, ImageBackground, Text} from 'react-native'
import {useRoute} from "@react-navigation/native";
import chatRoomData from '../data/Chats'
import ChatMessage from "../components/ChatMessage";
import BG from "../assets/images/BG.png";
import InputBox from "../components/inputBox";

const ChatRoomScreen = () => {

    const route = useRoute()

    // console.log(route.params)

    return (
        <ImageBackground style={{width:'100%',height:'100%'}} source={BG}>
            <FlatList
                inverted
                data={chatRoomData.messages} renderItem={({item}) => <ChatMessage messages={item}/>}
            />

            <InputBox/>
        </ImageBackground>

    );
};

export default ChatRoomScreen;
