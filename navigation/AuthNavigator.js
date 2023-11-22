import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import Colors from '../Colors';

const Stack = createStackNavigator();

const AuthNavigator = () => (
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
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
)

export default AuthNavigator;