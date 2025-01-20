import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CartController} from '../controller/CartController';

const Header = (props: {navigation: {navigate: (arg0: string) => void}}) => {
  const {cartItemCount} = CartController();

  const HandleCartOnClick = () => {
    props.navigation.navigate('Cart');
  };

  return (
    <View style={styles.headerContainer}>
      <View>
        <TouchableOpacity onPress={HandleCartOnClick}>
          <View>
            <Text style={styles.headerText}>{cartItemCount}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'orange',
    padding: 10,
    alignItems: 'flex-end',
  },
  headerText: {
    fontSize: 24,
    textAlign: 'right',
    padding: 6,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: 'rgb(255, 85, 0)',
  },
});

export default Header;
