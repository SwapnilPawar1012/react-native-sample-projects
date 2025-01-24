import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {CartController} from '../controller/CartController';

const CartBill = () => {
  const {
    cartItems,
    cartItemCount,
    itemOccurrence,
    totalAmount,
    totalOriginalAmount,
    totalDiscountAmount,
    HandleTotalAmount,
    HandleTotalOriginalAmount,
    HandleTotalDiscountAmount,
  } = CartController();

  useEffect(() => {
    HandleTotalAmount();
    HandleTotalOriginalAmount();
    HandleTotalDiscountAmount();
  }, [cartItems]);

  return (
    <View>
      <View style={styles.billContainer}>
        <View>
          <Text style={styles.billHeadingText}>Bill Receipt</Text>
        </View>
        <View>
          <View style={styles.itemView}>
            <Text style={styles.itemText}>
              Total Original Amount {` (${cartItemCount} `}
              {cartItemCount > 1 ? 'units)' : 'unit)'}
            </Text>
            <Text style={styles.itemText}>₹{totalOriginalAmount}</Text>
          </View>
          <View style={styles.itemView}>
            <Text style={styles.itemText}>
              Total Discount Amount {` (${cartItemCount} `}
              {cartItemCount > 1 ? 'units)' : 'unit)'}
            </Text>
            <Text style={styles.itemText}>₹{totalDiscountAmount}</Text>
          </View>
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
            <Text style={styles.totalAmountText}>₹{totalAmount}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  billContainer: {
    marginHorizontal: 20,
    marginVertical: 50,
  },
  billHeadingText: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  itemView: {
    flexDirection: 'row',
    marginVertical: 3,
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 16,
  },
  totalAmountView: {
    marginVertical: 8,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#999'
  },
  totalAmountText: {
    fontSize: 20,
    fontWeight: '600'
  },
});

export default CartBill;
