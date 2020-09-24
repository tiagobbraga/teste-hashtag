import React, { Children } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, GestureResponderEvent, Image } from 'react-native';

interface Props {
  title: string;
  color?: string;
  onPress: (event: GestureResponderEvent) => void;
}

export default ({ title, color = '#2ea44f', onPress }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, { backgroundColor: color }]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    borderRadius: 10,
  },
});
