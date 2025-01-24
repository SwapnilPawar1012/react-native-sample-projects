import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CartController} from '../controller/CartController';
import CartButtons from '../components/CartButtons';
import CartBill from '../components/CartBill';

const Cart = () => {
  const {cartItems, itemOccurrence} = CartController();
  console.log('itemOccurrence: ', itemOccurrence);

  return (
    <View>
      {cartItems.map(product => (
        <View key={product.id} style={styles.container}>
          <Image source={{uri: product.imageUrl}} style={styles.image} />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{product.name}</Text>

            <View style={[styles.rowContainer, styles.ratingContainer]}>
              <View style={styles.rating}>
                <Text style={styles.ratingText}>{product.rating} ★</Text>
              </View>
              <Text style={styles.ratingCount}>
                ({product.ratingCount.toString()})
              </Text>
            </View>

            <View style={[styles.rowContainer, styles.priceContainer]}>
              <Text style={styles.originalPrice}>
                ₹{product.originalPrice.toString()}
              </Text>
              <Text style={styles.discountPrice}>
                ₹{product.discountPrice.toString()}
              </Text>
              <Text style={styles.offerPercentage}>
                %{product.offerPercentage.toString()} off
              </Text>
            </View>
            {/* Action Buttons */}
            <CartButtons product={product} />
          </View>
        </View>
      ))}
      <CartBill />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 135,
  },
  infoContainer: {
    marginLeft: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
  },
  rowContainer: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  ratingContainer: {},
  priceContainer: {},
  rating: {
    fontSize: 14,
    paddingHorizontal: 5,
    paddingBottom: 2,
    borderRadius: 5,
    backgroundColor: 'green',
  },
  ratingText: {
    color: '#ffffff',
  },
  ratingCount: {
    marginLeft: 8,
  },
  originalPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: 'rgba(0,0,0,0.5)',
    textDecorationLine: 'line-through',
  },
  discountPrice: {
    fontSize: 18,
    fontWeight: '500',
    marginHorizontal: 8,
  },
  offerPercentage: {
    fontSize: 18,
    fontWeight: '700',
    color: 'rgb(0, 160, 0)',
  },
});

export default Cart;
