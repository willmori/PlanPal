import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../Colors';
import { FontAwesome5 } from '@expo/vector-icons';

function NewEventButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <FontAwesome5 name="plus-circle" color={'white'} size={40} /> 
            </View>
        </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        height: 80,
        width: 80,
        borderRadius: 40,
        bottom: 25,
        borderColor: 'white',
        borderWidth: 8,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default NewEventButton;