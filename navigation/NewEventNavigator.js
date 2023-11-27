import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddAddressScreen from '../screens/AddAddressScreen';
import AddNameScreen from '../screens/AddNameScreen';
import AddDateAndTimeScreen from '../screens/AddDateAndTimeScreen';
import AddMembersScreen from '../screens/AddMembersScreen';
import Colors from '../Colors';
import { NewEventContext } from '../contexts/contexts';

const Stack = createStackNavigator();

const NewEventNavigator = () => {

    const [address, setAddress] = useState('TESTING123');

    return (
        <NewEventContext.Provider value={{address, setAddress}}>
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
                    name="Address" 
                    component={AddAddressScreen} 
                    options={{ headerShown: false, headerBackTitleVisible: false}} />
                <Stack.Screen 
                    name="Name" 
                    component={AddNameScreen} 
                    options={{title: "Add Event Name", headerBackTitleVisible: false}} />
                <Stack.Screen 
                    name="DateAndTime" 
                    component={AddDateAndTimeScreen} 
                    options={{title: "Add Event Date and Time", headerBackTitleVisible: false}} />
                <Stack.Screen 
                    name="Members" 
                    component={AddMembersScreen}
                    options={{title: "Add Event Members", headerBackTitleVisible: false}} />
            </Stack.Navigator>
        </NewEventContext.Provider>
    )
}

export default NewEventNavigator;