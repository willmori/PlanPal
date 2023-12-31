import React, { useContext } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image, Button, SafeAreaView } from 'react-native';
import logo from '../assets/favicon.png';
import google from '../assets/google.png';
import photo from '../assets/suit_photo.jpg';
import Colors from '../Colors.js';
import Avatar from '../components/Avatar';
import { FontAwesome5 } from '@expo/vector-icons';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { AuthContext } from '../contexts/contexts';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccountScreen = ({ navigation }) => {
  const { user, setUser } = useContext(AuthContext);

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("@user");
      await FIREBASE_AUTH.signOut();
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={{backgroundColor: Colors.background, flex: 1}}>
        <View style={[styles.item, {marginBottom: 60}]}>
            <Avatar blob={photo} />
            <View style={styles.profileInfo}>
                <Text style={styles.name}>{user.displayName}</Text>
                <Text style={styles.email}>{user.email}</Text>
            </View>
        </View>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("EditProfile")}>
            <FontAwesome5 name="cog" size={27} color="gray" />
            <View style={styles.profileInfo}>
                <Text style={styles.name}>Edit Profile</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.item, {borderTopWidth: 0}]} onPress={() => navigation.navigate("NotificationSettings")}>
            <FontAwesome5 name="bell" size={30} color="gray" />
            <View style={styles.profileInfo}>
                <Text style={styles.name}>Notifications</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.item, {marginTop: 50}]} onPress={logout}>
            <FontAwesome5 name="sign-out-alt" size={30} color="black" />
            <View style={styles.profileInfo}>
                <Text style={[styles.name, {color: 'red'}]}>Logout</Text>
            </View>
        </TouchableOpacity>
        
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderTopWidth: 1, 
    borderTopColor: 'lightgray', 
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    backgroundColor: "#fff"
  },
  profileInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 15
  },
  name: {
    fontSize: 20
  },
  email: {
    fontSize: 16
  }
});

export default AccountScreen;
