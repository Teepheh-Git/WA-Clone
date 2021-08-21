import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import styles from "./styles";
import {Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons} from "@expo/vector-icons";

const InputBox = () => {

    const [message, setMessage] = useState("")


    const onMicrophonePress = () => {
        console.warn(`microphone`)
    }

    const onSendPress = () => {
        console.warn(`sending ${message}`)
        setMessage('')


    }

    const onPress = () => {
        if (!message) {
            onMicrophonePress()
        } else {
            onSendPress()
        }

    }


    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color={"grey"}/>

                <TextInput
                    placeholder="Type a message..."
                    multiline={true}
                    style={styles.textInput}
                    value={message}
                    onChangeText={setMessage}/>

                <Entypo name="attachment" size={24} color={"grey"} style={styles.icon}/>
                {!message && <Fontisto name={"camera"} size={24} color={"grey"} style={styles.icon}/>}
            </View>

            <TouchableOpacity onPress={onPress} n>
                <View style={styles.buttonContainer}>

                    {!message ? <MaterialCommunityIcons name={"microphone"} size={24} color={"white"}/>
                        : <MaterialCommunityIcons name={"send"} size={24} color={"white"}/>}

                </View>
            </TouchableOpacity>
        </View>
    );
};

export default InputBox;
