import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {PropsWithChildren, useEffect} from 'react';
import {CartController} from '../controller/CartController';

type CartButtonsProps = PropsWithChildren<{
  product: Product;
}>;

const CartButtons = ({product}: CartButtonsProps) => {
  const {
    cartData,
    isAdded,
    itemOccurrence,
    HandleAddToCart,
    HandleRemoveFromCart,
    HandleCartItemStatus,
  } = CartController();

  useEffect(() => {
    HandleCartItemStatus(product);
  }, [cartData]);

  return (
    <View>
      {isAdded ? (
        <View style={[styles.btnContainer, styles.btnBox1]}>
          <View>
            <TouchableOpacity onPress={() => HandleRemoveFromCart(product)}>
              <View style={styles.counterIDBtn}>
                <Text style={styles.btnTextField}>-</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.counter}>
            <Text style={styles.counterText}>
              {itemOccurrence ? itemOccurrence[`${product.id}`] : 0}
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => HandleAddToCart(product)}>
              <View style={styles.counterIDBtn}>
                <Text style={styles.btnTextField}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={[styles.btnContainer, styles.btnBox2]}>
          <TouchableOpacity onPress={() => HandleAddToCart(product)}>
            <View style={styles.counterBtn}>
              <Text style={[styles.btnTextField, {fontSize: 16}]}>
                Add To Cart
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    width: 100,
  },
  btnBox1: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#999',
  },
  btnBox2: {},
  counterIDBtn: {
    backgroundColor: 'rgb(65, 135, 247)',
    alignItems: 'center',
    paddingBottom: 3,
    width: 32,
  },
  counterBtn: {
    backgroundColor: 'rgb(65, 135, 247)',
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 4,
  },
  btnTextField: {
    fontSize: 18,
    color: 'white',
  },
  counter: {
    width: 35,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  counterText: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default CartButtons;
