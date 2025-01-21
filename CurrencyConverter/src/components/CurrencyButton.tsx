import React from 'react';
import type {PropsWithChildren} from 'react';

import {View, Text, StyleSheet} from 'react-native';

type CurrencyButtonProps = PropsWithChildren<{
  name: string;
  flag: string;
}>;

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'rgb(199, 208, 255)',
    flexDirection:'row',
    paddingVertical: 6,
    paddingLeft: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#888'
  },
  flag: {
    fontSize: 24,
  },
  country: {
    fontSize: 16,
    paddingLeft: 15,
    textAlignVertical: 'center',
  },
});

// const styles1 = StyleSheet.create({
//   buttonContainer: {
//     backgroundColor: 'rgb(199, 208, 255)',
//     paddingHorizontal: 8,
//     paddingVertical: 5,
//     width: 110,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   flag: {
//     fontSize: 24,
//     textAlign: 'center',
//   },
//   country: {
//     fontSize: 14,
//     paddingTop: 3,
//   },
// });

export default CurrencyButton;
