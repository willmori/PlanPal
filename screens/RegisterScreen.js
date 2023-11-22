import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image, Button, SafeAreaView, StatusBar, KeyboardAvoidingView } from 'react-native';
import logo from '../assets/favicon.png';
import google from '../assets/google.png';
import backArrow from '../assets/left-arrow.png';
import Colors from '../Colors.js';
import { FIREBASE_AUTH } from '../FirebaseConfig';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  
  const register = async () => {
    if (password.length < 6) {
      alert('Password must be 6 characters or greater')
    } else if (password !== confirmPassword) {
      alert('Passwords do not match')
    } else {
      try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        alert('Account created')
      } catch (error) {
        alert(error)
        console.log(error);
      }
    }
  }

  return (
    <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={150} style={styles.container}>
      
        <Image
            source={logo} 
            style={styles.logo}
        />
        
          <TextInput
              value={email}
              placeholder="Email"
              placeholderTextColor={Colors.contrast}
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(text) => setEmail(text)}
          />
          <TextInput
              value={password}
              placeholder="Password"
              placeholderTextColor={Colors.contrast}
              secureTextEntry
              style={styles.input}
              onChangeText={(text) => setPassword(text)}
          />
          <TextInput
              value={confirmPassword}
              placeholder="Confirm Password"
              placeholderTextColor={Colors.contrast}
              secureTextEntry
              style={styles.input}
              onChangeText={(text) => setConfirmPassword(text)}
          />
          
          <TouchableOpacity
              style={styles.button}
              onPress={register}
          >
              <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        
    </KeyboardAvoidingView>
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
    color: Colors.contrast,
    padding: 18,
    borderRadius: 20,
  },
  button: {
    width: '100%',
    backgroundColor: Colors.secondary, 
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 35
  },
  buttonText: {
    color: Colors.contrast, 
    fontSize: 18,
  },
});

export default RegisterScreen;
