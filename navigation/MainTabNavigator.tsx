/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import {Fontisto, Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatScreen from '../screens/ChatScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import {MainTabParamList, TabOneParamList, TabTwoParamList} from '../types';

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <MainTab.Navigator
            initialRouteName="Chats"
            tabBarOptions={{
                activeTintColor: Colors[colorScheme].background,
                style: {
                    backgroundColor: Colors[colorScheme].tint
                },
                indicatorStyle: {
                    backgroundColor: Colors[colorScheme].background,
                    height: 3
                },
                labelStyle: {
                    fontWeight: 'bold'
                },
                showIcon:true,
            }}>
            <MainTab.Screen
                name="Camera"
                component={TabOneNavigator}
                options={{
                    tabBarIcon: ({color}) => <Fontisto name="camera" color={color} size={18}/>,
                    tabBarLabel:()=> null

                }}
            />
            <MainTab.Screen
                name="Chats"
                component={ChatScreen}
            />
            <MainTab.Screen
                name="Status"
                component={TabTwoNavigator}
            />
            <MainTab.Screen
                name="Calls"
                component={TabTwoNavigator}
            />
        </MainTab.Navigator>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
    return <Ionicons size={30} style={{marginBottom: -3}} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
    return (
        <TabOneStack.Navigator >
            <TabOneStack.Screen
                name="TabOneScreen"
                component={ChatScreen}
                options={{headerTitle: 'Tab One Title'}}
            />
        </TabOneStack.Navigator>
    );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
    return (
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen
                name="TabTwoScreen"
                component={TabTwoScreen}
                options={{headerTitle: 'Tab Two Title'}}
            />
        </TabTwoStack.Navigator>
    );
}
