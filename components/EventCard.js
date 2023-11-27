import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../Colors';

const EventCard = ({ name, date, time, address, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.info}>
              <View>
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.time}>{time}</Text>
              </View>
              <View style={styles.icon}>
                <FontAwesome5 name={'car'} solid size={28} color={Colors.contrast} />
                <Text style={styles.travelTime}>1h 20m</Text>
              </View>
              
            </View>
            <Text style={styles.address}>{address}</Text>
        </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.secondary,
    borderRadius: 22,
    padding: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    marginVertical: 10,
    width: '90%',
    marginLeft: 21
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.gray,
    marginBottom: 20
  },
  date: {
    fontSize: 14,
    marginBottom: 2,
  },
  time: {
    fontSize: 14,
  },
  address: {
    fontSize: 14,
    color: Colors.gray,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  icon: {
    position: 'absolute',
    left: 250,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  travelTime: {
    marginTop: 2
  }
});

export default EventCard;
