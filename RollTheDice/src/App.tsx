import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
// Or import { trigger } from "react-native-haptic-feedback";

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({ imageUrl }: DiceProps): React.JSX.Element => {
  return (
    <View>
      <Image source={imageUrl} style={styles.diceImage} />
    </View>
  )
}

function App(): React.JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

  const RollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6);

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;

      case 2:
        setDiceImage(DiceTwo);
        break;

      case 3:
        setDiceImage(DiceThree);
        break;

      case 4:
        setDiceImage(DiceFour);
        break;

      case 5:
        setDiceImage(DiceFive);
        break;

      case 6:
        setDiceImage(DiceSix);
        break;

      default:
        setDiceImage(DiceOne);
        break;
    }

    // Trigger haptic feedback
    ReactNativeHapticFeedback.trigger("impactLight", options); 
    // or trigger("impactLight", options);
  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable onPress={RollDiceOnTap}>
        <Text style={styles.rollDiceBtnText}>Roll The Dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  diceImage: {
    width: 200,
    height: 200,
    // backgroundColor: 'red'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rollDiceBtnText: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#999',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    backgroundColor: 'rgb(255, 173, 173)'
  },
});

export default App;
