import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import {withAuthenticator} from 'aws-amplify-react-native'

import Amplify, {Auth, API, graphqlOperation} from 'aws-amplify'
import config from './src/aws-exports'
import {getUser} from "./src/graphql/queries";
import {createUser} from "./src/graphql/mutations";

Amplify.configure(config)

const randomImage = [
    'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg',
    'https://hieumobile.com/wp-content/uploads/avatar-among-us-3.jpg',
    'https://hieumobile.com/wp-content/uploads/avatar-among-us-6.jpg',
    'https://hieumobile.com/wp-content/uploads/avatar-among-us-9.jpg',
]


function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();


    const getRandomImage = () => {
        return randomImage[Math.floor(Math.random() * randomImage.length)]
    }

// run this  only when app is first mounted
    useEffect(() => {
            const fetchUser = async () => {

                // get authenticated users from auth
                const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true})
                console.log(userInfo)

                if (userInfo) {
                    // get users from backend with user id from auth

                    const userData = await API.graphql(graphqlOperation(
                        getUser,
                        {id: userInfo.attributes.sub}
                    ))

                    if (userData.data.getUser) {
                        console.log('User is already registered in database')
                        return;
                    }

                    const newUser = {
                        id: userInfo.attributes.sub,
                        name: userInfo.username,
                        imageUri: getRandomImage(),
                        status: 'Hey, I am using whatsapp'

                    }

                    await API.graphql(
                        graphqlOperation(
                            createUser,
                            {input: newUser}
                        )
                    )

                    // if no user in d DB with the id , create one

                }


            }
            fetchUser()
        }, []
    )
    ;


    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <SafeAreaProvider>
                <Navigation colorScheme={colorScheme}/>
                <StatusBar/>
            </SafeAreaProvider>
        );
    }
}

export default withAuthenticator(App)
