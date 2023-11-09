import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const EventCard = ({ name, date, time, address, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.time}>{time}</Text>
            <Text style={styles.address}>{address}</Text>
        </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 10,
    width: '90%',
    marginLeft: 21
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    marginBottom: 2,
  },
  time: {
    fontSize: 14,
    marginBottom: 2,
  },
  address: {
    fontSize: 14,
    color: '#666',
  },
});

export default EventCard;
