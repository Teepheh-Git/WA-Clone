import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Text, View} from '../components/Themed';
import ChatListItem from "../components/chatListItem";

import users from '../data/Users'
import NewMessageButton from "../components/newMessageButton";
import ContactListItem from "../components/contactListItem";

export default function ContactsScreen() {
    return (
        <View style={styles.container}>

            <FlatList
                style={{width: '100%%'}}
                data={users}
                renderItem={({item}) => <ContactListItem user={item}/>}
                keyExtractor={(item) => item.id}
            />

            {/*<NewMessageButton/>*/}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

});
