import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image, Button, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import logo from '../assets/favicon.png';
import google from '../assets/google.png';
import Colors from '../Colors.js';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import * as Google from "expo-auth-session/providers/google";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithCredential, getAuth, signInWithRedirect } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { makeRedirectUri } from 'expo-auth-session';


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
    iosClientId: '493837676775-q38mm877i6rn5kcbh9i8nqul1ommll0j.apps.googleusercontent.com'
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
        source={logo} 
        style={styles.logo}
      />
      <TextInput
        value={email}
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        value={password}
        placeholder="Password"
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
  googleButton: {
    width: '60%',
    backgroundColor: Colors.gray, 
    padding: 10,
    borderRadius: 35,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 35
  },
  googleButtonText: {
    color: 'black', 
    fontSize: 18,
  },
  google: {
    height: 40,
    width: 40
  }
});

export default LoginScreen;
