import React from 'react';
import {Button, ScrollView, StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import Product from '../components/Product';
import products from '../database/ProductsDB';

const ProductWrapper = (props: {
  navigation: {navigate: (arg0: string) => void};
}) => {
  
  const goToUserList = () => {
    // Only navigate, don't trigger any cart logic here
    props.navigation.navigate('User');
  };

  return (
    <View style={styles.container}>
      <View>
        <Button title="Go To User List" onPress={goToUserList} />
      </View>
      <View>
        <Header navigation={props.navigation} />
      </View>
      <ScrollView>
        {products.map((item, index) => (
          <View key={index}>
            <Product item={item} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textField: {
    fontSize: 24,
  },
});

export default ProductWrapper;
