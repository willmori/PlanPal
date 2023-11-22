import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Colors from '../Colors';


export default function EventDetailScreen({ route }) {
  const event = route.params;

  return (
    <View style={styles.container}>
        <Text>{event.name}</Text>
        <Text>{event.date}</Text>
        <Text>{event.time}</Text>
        <Text>{event.address}</Text>
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
