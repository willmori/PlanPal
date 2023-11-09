import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EditProfileScreen from '../screens/EditProfileScreen';
import NotificationSettingsScreen from '../screens/NotificationSettingsScreen';
import AccountScreen from '../screens/AccountScreen';
import Colors from '../Colors';

const Stack = createStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Account" component={AccountScreen} options={{title: "My Account", headerStyle: { backgroundColor: Colors.background, shadowOpacity: 0 }}} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{title: "Edit Profile"}} />
        <Stack.Screen name="NotificationSettings" component={NotificationSettingsScreen} options={{title: "Notification Settings"}} />
    </Stack.Navigator>
)

export default AccountNavigator;