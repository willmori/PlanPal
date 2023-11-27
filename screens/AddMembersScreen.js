import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import Colors from '../Colors';


export default function AddMembersScreen() {

  return (
    <View style={styles.container}>
        <Text>ADD MEMBERS SCREEN</Text>
        <TouchableOpacity>
            <Text>Create Event</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
