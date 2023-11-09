import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from '@expo/vector-icons';

import MyEventsScreen from "../screens/MyEventsScreen";
import NewEventScreen from '../screens/NewEventScreen';
import AccountScreen from "../screens/AccountScreen";

import EventsNavigator from "./EventsNavigator";
import AccountNavigator from "./AccountNavigator";
import NewEventButton from "./NewEventButton";

const Tab = createBottomTabNavigator();


const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen
            name="Events"
            component={EventsNavigator}
            options={{title: "My Events", tabBarIcon: ({ color, size }) => <FontAwesome5 name="calendar-alt" color={color} size={size} /> }} />
        <Tab.Screen
            name="NewEvent"
            component={NewEventScreen} 
            options={({ navigation }) => ({
                tabBarButton: () => (<NewEventButton onPress={() => navigation.navigate("NewEvent")} />),
                tabBarIcon: ({ color, size }) => <FontAwesome5 name="plus-circle" color={color} size={size} /> 
            })} />
        <Tab.Screen
            name="Account"
            component={AccountNavigator} 
            options={{tabBarIcon: ({ color, size }) => <FontAwesome5 name="user" color={color} size={size} /> }} />
    </Tab.Navigator>
)

export default AppNavigator;