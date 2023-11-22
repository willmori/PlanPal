import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from '@expo/vector-icons';

import MyEventsScreen from "../screens/MyEventsScreen";
import NewEventScreen from '../screens/NewEventScreen';
import AccountScreen from "../screens/AccountScreen";

import EventsNavigator from "./EventsNavigator";
import AccountNavigator from "./AccountNavigator";
import NewEventButton from "./NewEventButton";
import Colors from "../Colors";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator
        tabBarOptions={{
            activeTintColor: Colors.contrast,
            inactiveTintColor: 'lightgray',
            activeBackgroundColor: Colors.secondary,
            inactiveBackgroundColor: Colors.secondary,
            
            style: {
                backgroundColor: Colors.secondary,
                borderTopWidth: 0,
                shadowOpacity: 0,
            }
        }}
    >
        <Tab.Screen
            name="Events"
            component={EventsNavigator}
            options={{title: "My Events", tabBarIcon: ({ color, size }) => <FontAwesome5 name="calendar-alt" color={color} size={size} /> }} />
        <Tab.Screen
            name="NewEvent"
            component={NewEventScreen} 
            options={({ navigation }) => ({
                tabBarButton: () => (<NewEventButton onPress={() => navigation.navigate("NewEvent")} />)
            })} />
        <Tab.Screen
            name="Account"
            component={AccountNavigator} 
            options={{tabBarIcon: ({ color, size }) => <FontAwesome5 name="user" color={color} size={size} /> }} />
    </Tab.Navigator>
)

export default AppNavigator;