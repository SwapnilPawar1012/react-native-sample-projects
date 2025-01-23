import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

// Navigation
import {useNavigation} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({route}: DetailsProps) => {
  const {ProductId} = route.params;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Details: {ProductId}</Text>
      // Simple Navigation
      <View style={styles.narigationBtn}>
        <Button
          title="Go To Home(Simple)"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      // Pops the current screen from the stack and navigates back to the
      previous screen. It takes one optional argument (count), which allows you
      to specify how many screens to pop back by.
      <View style={styles.narigationBtn}>
        <Button title="Go To Home(pop)" onPress={() => navigation.pop()} />
      </View>
      // Navigates back to a previous screen in the stack by popping screens
      after it. // arguments: name, params, merge
      <View style={styles.narigationBtn}>
        <Button title="Go To Home(popTo)" onPress={() => navigation.popTo('Home')} />
      </View>
      // Pops all of the screens in the stack except the first one and navigates
      to it.
      <View style={styles.narigationBtn}>
        <Button
          title="Go To Home(popToTop)"
          onPress={() => navigation.popToTop()}
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

export default Details;
