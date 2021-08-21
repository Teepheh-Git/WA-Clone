import React from 'react';
import {Text, View} from 'react-native';
import {Message} from "../../types";
import moment from "moment";
import styles from './style';


export type ChatMessageProps = {
    messages: Message;
}

const ChatMessage = (props: ChatMessageProps) => {

    const {messages} = props

    const isMyMessage = () => {

        return messages.user.id === 'u1';
    }

    return (
        <View style={styles.container}>
            <View style={[styles.messageBox,
                {
                    backgroundColor: isMyMessage() ? '#dcf8c5' : '#fff',
                    marginLeft: isMyMessage() ? 50 : 0,
                    marginRight: isMyMessage() ? 0 : 50
                }]}>

                {!isMyMessage() && <Text style={styles.name}> {messages.user.name}</Text>}
                <Text style={styles.message}> {messages.content}</Text>
                <Text style={styles.time}> {moment(messages.createdAt).fromNow()}</Text>
            </View>

        </View>
    )
}

export default ChatMessage;
