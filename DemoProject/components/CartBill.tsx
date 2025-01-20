import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CartController} from '../controller/CartController';

const CartBill = () => {
  const {cartItems, itemOccurrence, totalAmount, HandleTotalAmount} =
    CartController();

  useEffect(() => {
    HandleTotalAmount();
  }, [cartItems]);

  return (
    <View>
      <View style={styles.billContainer}>
        <View>
          <Text style={{fontSize: 20, fontWeight: '500', textAlign: 'center', marginVertical: 20}}>Bill Receipt</Text>
        </View>
        {cartItems.map((item: any, index: React.Key) => (
          <View key={index} style={styles.itemView}>
            <Text style={styles.itemText}>
              {item.name}
              {` (${itemOccurrence[item.id]} `}
              {itemOccurrence[item.id] > 1 ? 'units)' : 'unit)'}
            </Text>
            <Text style={styles.itemText}>
              {item.price * itemOccurrence[item.id]}
            </Text>
          </View>
        ))}
        <View style={styles.itemView}>
          <Text style={styles.itemText}>GST charges</Text>
          <Text style={styles.itemText}>{0}</Text>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.itemText}>Delivery charges</Text>
          <Text style={styles.itemText}>{0}</Text>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.itemText}>Platform charges</Text>
          <Text style={styles.itemText}>{0}</Text>
        </View>
        <View style={[styles.itemView, styles.totalAmountView]}>
          <Text style={styles.totalAmountText}>Total Amount</Text>
          <Text style={styles.totalAmountText}>{totalAmount}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  billContainer: {
    padding: 20,
    marginVertical: 50,
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 18,
  },
  totalAmountView: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#999',
    marginVertical: 10,
    paddingVertical: 10,
  },
  totalAmountText: {
    fontSize: 20,
    fontWeight: '500',
  },
});

export default CartBill;
