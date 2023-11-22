import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import Colors from '../Colors';
import EventCard from '../components/EventCard';
import { Searchbar } from 'react-native-paper';
import { Image } from 'react-native';


export default function MyEventsScreen({ navigation }) {
  const [eventsData, setEventsData] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then(response => response.json())
      .then(data => setEventsData(data))
      .catch(error => console.log(error))
  }, [])
  
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = () => {
   console.log(eventsData)
  }
  
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
