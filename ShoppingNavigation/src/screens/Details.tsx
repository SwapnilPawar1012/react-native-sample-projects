import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

// Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import CartButtons from '../components/CartButtons';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({route}: DetailsProps) => {
  const {product} = route.params;

  return (
    <ScrollView style={styles.container}>
      <View>
        <Image source={{uri: product.imageUrl}} style={styles.image} />
        <View>
          <Text style={styles.name}>{product.name}</Text>
          <View style={[styles.rowContainer, styles.ratingContainer]}>
            <View style={styles.rating}>
              <Text style={styles.ratingText}>{product.rating} ★</Text>
            </View>
            <Text style={styles.ratingCount}>
              {product.ratingCount.toString()} ratings
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
          <View style={{marginBottom: 14}}>
            <CartButtons product={product} />
          </View>

          <View style={styles.badgeContainer}>
            {product.tags.map((tag, index) => (
              <View key={index} style={styles.badge}>
                <Text style={styles.tagBadge}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  image: {
    width: 225,
    height: 300,
    marginHorizontal: 'auto',
    marginVertical: 20,
    borderRadius: 28,
    // shadowOffset: {
    //   width: 5,
    //   height: 5,
    // },
    // shadowColor: 'black',
    // shadowOpacity: 0.3,
    // shadowRadius: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: '500',
    flexShrink: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  ratingContainer: {
    marginTop: 6,
  },
  priceContainer: {
    marginVertical: 8,
  },
  rating: {
    backgroundColor: 'green',
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  ratingText: {
    fontSize: 16,
    color: 'white',
  },
  ratingCount: {
    fontSize: 14,
    paddingLeft: 8,
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
  badgeContainer: {
    flex: 1,
  },
  badge: {
    borderWidth: 1,
    borderColor: '#999',
    paddingHorizontal: 5,
    paddingVertical: 3,
    marginVertical: 3,
  },
  tagBadge: {
    fontSize: 13,
  },
});

export default Details;
