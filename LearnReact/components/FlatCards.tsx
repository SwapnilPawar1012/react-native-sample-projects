import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8
  },
  card: {
    flex: 1, // works for a componet
    justifyContent: 'center',
    alignItems: 'center',
    width: 100, // '50%'
    height: 100,
    margin: 8,
    borderRadius: 8,
  },
  cardOne: {
    backgroundColor: '#EF5354',
  },
  cardTwo: {
    backgroundColor: '#50DBB4',
  },
  cardThree: {
    backgroundColor: '#5DA3FA',
  },
});

export default FlatCards;
