import React, { memo } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const ProductCard = ({ item: { url, displayName, price } }: any) => {
  return (
    <TouchableOpacity style={styles.cardContainer} activeOpacity={0.8}>
      <Image source={{ uri: url }} style={styles.cardImage} />
      <View style={styles.productInfo}>
        <Text style={styles.cardTextMain}>{displayName}</Text>
        <Text style={styles.cardTextMain}>${price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(ProductCard);
