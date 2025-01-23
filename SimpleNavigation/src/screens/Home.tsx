import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

// Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Home</Text>
      <View style={styles.narigationBtn}>
        <Button
          title="Go To Details"
          // Simple Navigation
          onPress={() =>
            navigation.navigate('Details', {
              ProductId: '6',
            })
          }
          // If Details is undefined in App.
          // onPress={() => navigation.navigate('Details')}   tsx
        />
      </View>
      <View style={styles.narigationBtn}>
        <Button
          title="Go To Details(replace)"
          // Replaces the current screen with a new screen in the stack.
          onPress={() =>
            navigation.replace('Details', {
              ProductId: '6',
            })
          }
        />
      </View>
      <View style={styles.narigationBtn}>
        <Button
          title="Go To Details(push)"
          // Pushes a new screen to the top of the stack and navigate to it.
          onPress={() =>
            navigation.push('Details', {
              ProductId: '6',
            })
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 24,
  },
  narigationBtn: {
    marginVertical: 5,
  },
});

export default Home;
