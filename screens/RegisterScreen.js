import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image, Button, SafeAreaView, StatusBar, KeyboardAvoidingView } from 'react-native';
import logo from '../assets/favicon.png';
import google from '../assets/google.png';
import backArrow from '../assets/left-arrow.png';
import PlanPal from '../assets/PlanPal.png';
import Colors from '../Colors.js';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { isValidEmail, isValidName, isValidPassword } from '../validators/validators';

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [usernamesTaken, setUsernamesTaken] = useState([]);
  const [emailsTaken, setEmailsTaken] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/usernames`)
      .then(response => response.json())
      .then(data => setUsernamesTaken(data))
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    fetch(`http://localhost:5000/api/emails`)
      .then(response => response.json())
      .then(data => setEmailsTaken(data))
      .catch(error => console.log(error))
  }, [])
  
  const register = async () => {
    const nameValidator = isValidName(username, usernamesTaken);
    const emailValidator = isValidEmail(email, emailsTaken);
    const passwordValidator = isValidPassword(password, confirmPassword);
    if (!nameValidator.valid) {
      alert(nameValidator.reason);
    } else if (!emailValidator.valid) {
      alert(emailValidator.reason)
    } else if (!passwordValidator.valid) {
      alert(passwordValidator.reason)
    } else {
      try {
        const response = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
        const user = response.user;
        await updateProfile(user, { displayName: username });

        const firestoreUserData = {
          email: email,
          username: username
        }
        const res = await fetch(`http://localhost:5000/api/addUser`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(firestoreUserData),
        })
        
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
            source={PlanPal} 
            style={styles.logo}
        />
          <TextInput
              value={username}
              placeholder="Username"
              placeholderTextColor={Colors.contrast}
              style={styles.input}
              autoCapitalize="none"
              onChangeText={(text) => setUsername(text)}
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
    justifyContent: 'start',
    paddingTop: '10%',
    padding: 20,
  },
  logo: {
    width: 300,
    height: 62,
    marginBottom: 60,
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
