import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import Colors from '../Colors';


export default function AddNameScreen({ navigation }) {

  return (
    <View style={styles.container}>
        <Text>NAME SCREEN</Text>
        <TouchableOpacity onPress={() => navigation.navigate("DateAndTime")}>
            <Text>NEXT</Text>
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
