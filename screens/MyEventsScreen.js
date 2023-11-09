import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import Colors from '../Colors';
import EventCard from '../components/EventCard';

const eventsData = [
  { id: '1', name: 'Community Meetup', date: 'January 1, 2023', time: '10:00 AM', address: '123 Main St, Anytown' },
  { id: '2', name: 'Tech Conference', date: 'February 12, 2023', time: '9:00 AM', address: '456 Tech Rd, Innova City' },
];

export default function MyEventsScreen({ navigation }) {
  
  return (
    <SafeAreaView style={styles.container}>
        <FlatList
          data={eventsData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <EventCard name={item.name} date={item.date} time={item.time} address={item.address} onPress={() => navigation.navigate("EventDetail", item)} />
          )}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
});
