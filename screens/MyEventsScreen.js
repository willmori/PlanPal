import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import Colors from '../Colors';
import EventCard from '../components/EventCard';
import { Searchbar } from 'react-native-paper';
import { Image } from 'react-native';


const eventsData = [
  { id: '1', name: 'Community Meetup', date: 'January 1, 2023', time: '10:00 AM', address: '123 Main St, Anytown' },
  { id: '2', name: 'Tech Conference', date: 'February 12, 2023', time: '9:00 AM', address: '456 Tech Rd, Innova City' },
  { id: '3', name: 'Tech Conference', date: 'February 12, 2023', time: '9:00 AM', address: '456 Tech Rd, Innova City' },
  { id: '4', name: 'Tech Conference', date: 'February 12, 2023', time: '9:00 AM', address: '456 Tech Rd, Innova City' },
  { id: '5', name: 'Tech Conference', date: 'February 12, 2023', time: '9:00 AM', address: '456 Tech Rd, Innova City' },
  { id: '6', name: 'Tech Conference', date: 'February 12, 2023', time: '9:00 AM', address: '456 Tech Rd, Innova City' },
];

export default function MyEventsScreen({ navigation }) {

  /*
  const [testData, setTestData] = React.useState();

  React.useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then(response => response.json())
      .then(data => {setTestData(data); console.log(data)})
      .catch(error => console.log(error))
  }, [])
  */

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Searchbar
          placeholder="Search Your Events"
          onChangeText={onChangeSearch}
          value={searchQuery}
          mode="bar"
          style={{width: '90%', backgroundColor: Colors.contrast, borderRadius: 10}}
        />
      </View>
      <View style={styles.eventsContainer}>
        <View style={styles.halfBlueBackground}></View>
        <FlatList
          data={eventsData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <EventCard name={item.name} date={item.date} time={item.time} address={item.address} onPress={() => navigation.navigate("EventDetail", item)} />
          )}
        />  
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  eventsContainer: {
    flex: 1,
    backgroundColor: 'transparent', // Make sure this is transparent
  },
  halfBlueBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -20,
    top: '10%', // Adjust this to control where the blue part ends
    backgroundColor: Colors.background,
    borderRadius: 20
  },
  searchBarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '10%',
    paddingBottom: '10%'
  },
  
});
