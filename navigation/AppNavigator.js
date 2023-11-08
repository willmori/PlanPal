import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyEventsScreen from "../screens/MyEventsScreen";
import NewEventScreen from '../screens/NewEventScreen';
import AccountScreen from "../screens/AccountScreen";
import EventsNavigator from "./EventsNavigator";

const Tab = createBottomTabNavigator();


const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="Events" component={EventsNavigator} />
        <Tab.Screen name="NewEvent" component={NewEventScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
)

export default AppNavigator;