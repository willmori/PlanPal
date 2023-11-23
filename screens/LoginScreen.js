import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image, Button, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import logo from '../assets/favicon.png';
import PlanPal from '../assets/PlanPal.png';
import google from '../assets/google.png';
import Colors from '../Colors.js';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import * as Google from "expo-auth-session/providers/google";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithCredential, getAuth, signInWithRedirect } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { makeRedirectUri } from 'expo-auth-session';
import { IOS_CLIENT_ID } from '@env';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const login = async () => {
    try {
      const response = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
      alert('Login successful')
    } catch (error) {
      console.log(error);
      alert('Invalid email or password')
    }
  }

  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: IOS_CLIENT_ID
  })

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(FIREBASE_AUTH, credential);
    }
  }, [response])

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <Image
        source={PlanPal} 
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
        autoCapitalize='none'
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={login}
      >
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <Button
        color={Colors.contrast}
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
      {/* Implement the Google login button using a library like react-native-google-signin */}
      <TouchableOpacity
        style={styles.googleButton}
        onPress={() => promptAsync()}
      >
        <Image
          source={google}
          style={styles.google}
        />
        <Text style={styles.googleButtonText}>Sign in with Google</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'start',
    paddingTop: '40%',
    padding: 20,
  },
  logo: {
    width: 300,
    height: 62,
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
  googleButton: {
    width: '62%',
    backgroundColor: Colors.secondary, 
    padding: 10,
    borderRadius: 35,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 35
  },
  googleButtonText: {
    color: "lightgray", 
    fontSize: 18,
  },
  google: {
    height: 40,
    width: 40
  },
});

export default LoginScreen;
