import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyEventsScreen from '../screens/MyEventsScreen';
import EventDetailScreen from '../screens/EventDetailScreen';

const Stack = createStackNavigator();

const EventsNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="MyEvents" component={MyEventsScreen} />
        <Stack.Screen name="EventDetail" component={EventDetailScreen} />
    </Stack.Navigator>
)

export default EventsNavigator;