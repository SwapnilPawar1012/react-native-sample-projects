import React, {useState} from 'react';

import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

//Constants
import {currencyByRupee} from './constants';
//Component
import CurrencyButton from './components/CurrencyButton';

import Snackbar from 'react-native-snackbar';

const App = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Enter a value to convert',
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }

    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
      setResultValue(result);
      setTargetCurrency(targetValue.name);
    } else {
      return Snackbar.show({
        text: 'NOt a valid number to convert',
        backgroundColor: '#F4BE2C',
        textColor: '#000000',
      });
    }
  };

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
              maxLength={14}
              value={inputValue}
              style={styles.inputText}
              clearButtonMode="always" //only for iOS
              onChangeText={setInputValue}
              keyboardType="number-pad"
              placeholder="Enter amount in Rupees"
            />
          </View>
          <View style={styles.resultContainer}>
            {resultValue && (
              <Text style={styles.resultText}>{resultValue}</Text>
            )}
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={1} // 3
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <Pressable
                style={[
                  styles.button,
                  targetCurrency === item.name && styles.selected,
                ]}
                onPress={() => buttonPressed(item)}>
                <CurrencyButton {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  rupeesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rupee: {
    fontSize: 24,
    fontWeight: '700',
  },
  inputText: {
    fontSize: 20,
    paddingLeft: 4,
  },
  resultContainer: {
    marginVertical: 20,
  },
  resultText: {
    fontSize: 28,
    fontWeight: 'bold',
    padding: 20,
    backgroundColor: 'rgb(255, 199, 199)',
  },
  bottomContainer: {
    marginHorizontal: 20,
  },
  button: {
    margin: 3,
  },
  selected: {
    backgroundColor: 'rgb(199, 208, 255)',
  },
});

// const styles1 = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   topContainer: {
//     alignItems: 'center',
//     marginTop: 50,
//   },
//   rupeesContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   rupee: {
//     fontSize: 24,
//     fontWeight: '700',
//   },
//   inputText: {
//     fontSize: 20,
//     paddingLeft: 4
//   },
//   resultContainer: {
//     marginVertical: 50,
//   },
//   resultText: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     padding: 20,
//     backgroundColor: 'rgb(255, 199, 199)',
//   },
//   bottomContainer: {
//     alignItems: 'center',
//   },
//   button: {
//     margin: 10,
//   },
//   selected: {
//     backgroundColor: 'rgb(199, 208, 255)',
//   },
// });

export default App;
