import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image, Button, SafeAreaView, StatusBar } from 'react-native';
import logo from '../assets/favicon.png';
import google from '../assets/google.png';
import backArrow from '../assets/left-arrow.png';
import Colors from '../Colors.js';

const RegisterScreen = () => {

  return (
    <View style={styles.container}>
        <TouchableOpacity
            style={styles.arrow}
            onPress={() => console.log('back to login pressed')}
        >
            <Image source={backArrow} style={styles.backArrow} />
        </TouchableOpacity>

        <Image
            source={logo} 
            style={styles.logo}
        />
        <TextInput
            placeholder="Email"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
        />
        <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
        />
        <TextInput
            placeholder="Confirm Password"
            secureTextEntry
            style={styles.input}
        />
        <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('Sign up pressed')}
        >
            <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 100,
  },
  input: {
    width: '100%',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 18,
    borderRadius: 20,
  },
  button: {
    width: '100%',
    backgroundColor: Colors.primary, 
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 35
  },
  buttonText: {
    color: '#fff', 
    fontSize: 18,
  },
  arrow: {
    position: 'absolute',
    top: 70,
    left: 30,
    height: 20,
    width: 20,
  },
  backArrow: {
    width: 40,
    height: 40
  }
});

export default RegisterScreen;
