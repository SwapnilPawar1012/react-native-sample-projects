import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CartController} from '../controller/CartController';

const Product = (props: any) => {
  const item = props.item;
  const {
    cartData,
    isAdded,
    itemOccurrence,
    HandleAddToCart,
    HandleRemoveFromCart,
    HandleCartItemStatus,
  } = CartController();

  useEffect(() => {
    HandleCartItemStatus(item);
  }, [cartData]);

  return (
    <View style={styles.productContainer}>
      <View style={{justifyContent: 'center'}}>
        <Image style={{width: 100, height: 100}} source={{uri: item.image}} />
      </View>
      <View style={{}}>
        <Text style={styles.textField}>{item.name}</Text>
        <Text style={styles.textField}>{item.color}</Text>
        <Text style={styles.textField}>${item.price}</Text>
        {isAdded ? (
          <View style={styles.btnContainer}>
            <View style={styles.counterBtn}>
              <TouchableOpacity onPress={() => HandleRemoveFromCart(item)}>
                <View>
                  <Text style={styles.btnTextField}>-</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.counter}>
              <Text style={[styles.btnTextField, {color: 'black'}]}>
                {itemOccurrence ? itemOccurrence[`${item.id}`] : 0}
              </Text>
            </View>
            <View style={styles.counterBtn}>
              <TouchableOpacity onPress={() => HandleAddToCart(item)}>
                <View>
                  <Text style={styles.btnTextField}>+</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.btnContainer}>
            <View style={styles.counterBtn}>
              <TouchableOpacity onPress={() => HandleAddToCart(item)}>
                <View>
                  <Text style={[styles.btnTextField, {fontSize: 18}]}>
                    Add To Cart
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    // alignItems: 'center',
    borderBottomColor: '#999',
    borderBottomWidth: 2,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textField: {
    fontSize: 20,
  },
  btnContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#999',
    marginTop: 8,
  },
  btnTextField: {
    fontSize: 20,
    padding: 3,
    fontWeight: '400',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'top',
  },
  counterBtn: {
    flex: 1,
    backgroundColor: 'rgba(23, 141, 238, 0.85)',
  },
  counter: {
    flex: 1,
  },
});

export default Product;
