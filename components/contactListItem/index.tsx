import React from 'react';

import {User} from "../../types";
import {View, Text, Image, TouchableWithoutFeedback} from "react-native";
import styles from "./style";
import moment from "moment";
import {useNavigation} from "@react-navigation/native";

export  type ContactListItemProps = {
    user: User
}


const ContactListItem = (props: ContactListItemProps) => {

    const navigation = useNavigation()

    const {user} = props;
    const onClick = () => {

        // nav to chatroom with this user
    };


    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image source={{uri: user.imageUri}} style={styles.avatar}/>
                    <View style={styles.midContainer}>
                        <Text style={styles.username}> {user.name}</Text>
                        <Text style={styles.status}> {user.status}</Text>
                    </View>


                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default ContactListItem;
