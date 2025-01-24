import React from 'react';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CartController} from './src/controller/CartController';
import Cart from './src/screens/Cart';

export type RootStackParamList = {
  Home: undefined;
  Details: {product: Product};
  Cart: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
  const {cartItemCount} = CartController();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={({navigation}) => ({
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Cart');
                }}>
                <Text style={styles.cartItemText}>{cartItemCount}</Text>
                <FontAwesomeIcon
                  style={styles.cartIcon}
                  icon={faCartShopping}
                  size={34}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({navigation}) => ({
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Cart');
                }}>
                <Text style={styles.cartItemText}>{cartItemCount}</Text>
                <FontAwesomeIcon
                  style={styles.cartIcon}
                  icon={faCartShopping}
                  size={34}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  cartContainer: {},
  cartItemText: {
    position: 'absolute',
    zIndex: 1,
    marginLeft: 12,
    fontSize: 18,
    fontWeight: '600',
  },
  cartIcon: {
    color: 'rgb(167, 243, 222)',
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 5,
  },
});

export default App;
