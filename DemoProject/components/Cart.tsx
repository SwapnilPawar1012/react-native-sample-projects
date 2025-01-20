import React, {useEffect} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CartController} from '../controller/CartController';
import CartBill from './CartBill';
import ProductRecommend from './ProductRecommend';

const Cart = () => {
  const {cartItems, recommendItems, itemOccurrence, HandleAddToCart, HandleRemoveFromCart} =
    CartController();

  return (
    <View>
      <ScrollView>
        <View>
          {cartItems.length ? (
            <View>
              <View>
                {cartItems.map((item: any, index: React.Key) => (
                  <View key={index}>
                    <View style={styles.productContainer}>
                      <View>
                        <Image
                          style={{width: 100, height: 100}}
                          source={{uri: item.image}}
                        />
                      </View>
                      <View>
                        <Text style={styles.textField}>{item.name}</Text>
                        <Text style={styles.textField}>{item.color}</Text>
                        <Text style={styles.textField}>${item.price}</Text>
                        <View style={styles.btnContainer}>
                          <View style={styles.counterBtn}>
                            <TouchableOpacity
                              onPress={() => HandleRemoveFromCart(item)}>
                              <View>
                                <Text style={styles.btnTextField}>-</Text>
                              </View>
                            </TouchableOpacity>
                          </View>
                          <View style={styles.counter}>
                            <Text
                              style={[styles.btnTextField, {color: 'black'}]}>
                              {itemOccurrence
                                ? itemOccurrence[`${item.id}`]
                                : 0}
                            </Text>
                          </View>
                          <View style={styles.counterBtn}>
                            <TouchableOpacity
                              onPress={() => HandleAddToCart(item)}>
                              <View>
                                <Text style={styles.btnTextField}>+</Text>
                              </View>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
              <View>
                <CartBill />
              </View>
            </View>
          ) : (
            <View style={styles.productNotFoundContainer}>
              <Text style={{fontSize: 20}}>Product Not Found!</Text>
            </View>
          )}
        </View>

        <View style={{marginVertical: 50}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row'}}>
              {recommendItems.map((item, index) => (
                <View key={index}>
                  <ProductRecommend item={item} />
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    alignItems: 'center',
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
  productNotFoundContainer: {
    alignItems: 'center',
    paddingVertical: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
  },
});

export default Cart;
