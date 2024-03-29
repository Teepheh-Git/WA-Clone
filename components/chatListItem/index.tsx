import React from 'react';

import {ChatRoom} from "../../types";
import {View, Text, Image, TouchableWithoutFeedback} from "react-native";
import styles from "./style";
import moment from "moment";
import {useNavigation} from "@react-navigation/native";

export  type ChatListItemProps = {
    chatRoom: ChatRoom
}


const ChatListItem = (props: ChatListItemProps) => {

    const navigation = useNavigation()

    const {chatRoom} = props;
    const user = chatRoom.users[1];
    const onClick = () => {
        navigation.navigate(
            'ChatRoom', {id: chatRoom.id, name: user.name}
        );
        // to show image in the header refer back to 2:08:00

    };


    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image source={{uri: user.imageUri}} style={styles.avatar}/>
                    <View style={styles.midContainer}>
                        <Text style={styles.username}> {user.name}</Text>
                        <Text style={styles.lastMessage}> {chatRoom.lastMessage.content}</Text>
                    </View>


                </View>
                <Text style={styles.time}>

                    {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}


                </Text>

            </View>
        </TouchableWithoutFeedback>
    );
};

export default ChatListItem;
