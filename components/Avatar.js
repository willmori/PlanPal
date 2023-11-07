import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const Avatar = ({ blob }) => {
  return (
    <View>
      <Image
        source={blob}
        style={styles.avatar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 70, 
    height: 70, 
    borderRadius: 50, 
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default Avatar;
