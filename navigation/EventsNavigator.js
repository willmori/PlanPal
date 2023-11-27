import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyEventsScreen from '../screens/MyEventsScreen';
import EventDetailScreen from '../screens/EventDetailScreen';
import Colors from '../Colors';

const Stack = createStackNavigator();

const EventsNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: Colors.background, 
                borderBottomWidth: 0,
                shadowOpacity: 0,
            },
            headerTintColor: Colors.contrast, 
        }}
    >
        <Stack.Screen 
            name="MyEvents" 
            component={MyEventsScreen} 
            options={{ headerShown: false }} />
        <Stack.Screen 
            name="EventDetail" 
            component={EventDetailScreen} 
            options={{title: "Event Details", headerBackTitleVisible: false}} />
    </Stack.Navigator>
)

export default EventsNavigator;