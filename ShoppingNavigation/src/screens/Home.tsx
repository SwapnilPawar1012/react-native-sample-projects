import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';

// Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

// components
import ProductItem from '../components/ProductItem';
import Separator from '../components/Separator';

// Data
import {PRODUCTS_LIST} from '../data/constants';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {

  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS_LIST}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate('Details', {
                product: item,
              });
            }}>
            <ProductItem product={item} />
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Home;
