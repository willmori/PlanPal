import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../Colors';
import { FontAwesome5 } from '@expo/vector-icons';

function NewEventButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <FontAwesome5 name="plus-circle" color={Colors.secondary} size={40} /> 
            </View>
        </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.contrast,
        height: 80,
        width: 80,
        borderRadius: 40,
        bottom: 20,
        borderColor: Colors.secondary,
        borderWidth: 8,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOpacity: 0,
        shadowOffset: 0,
        shadowRadius: 0,
        shadowColor: 0
    }
});

export default NewEventButton;