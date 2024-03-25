import React, { memo, useCallback } from 'react';
import { styles as homeStyles } from './styles';
import { Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Carousel, ProductCard } from '../../components/organizm';

const mockData = [
  {
    id: 'bd1',
    price: '10.00',
    displayName: 'displayName',
    url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'bd2',
    price: '10.00',
    displayName: 'displayName',
    url: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'bd3',
    price: '10.00',
    displayName: 'displayName',
    url: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'bd4',
    price: '10.00',
    displayName: 'displayName',
    url: 'https://images.unsplash.com/photo-1622831617330-bc799d6236b4?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];
const HomeScreen = () => {
  const keyExtractor = ({ id }: any): string => String(id);
  const renderItem = useCallback(({ item }: { item: any }) => {
    const { url } = item;
    return (
      <TouchableOpacity style={homeStyles.bannerContainer} activeOpacity={0.8}>
        <Image source={{ uri: url }} style={homeStyles.bunnerImage} />
      </TouchableOpacity>
    );
  }, []);

  const renderProductItem = useCallback(({ item }: { item: any }) => {
    return <ProductCard item={item} />;
  }, []);

  return (
    <ScrollView style={homeStyles.container} showsVerticalScrollIndicator={false}>
      <Carousel data={mockData} keyExtractor={keyExtractor} renderItem={renderItem} title="What's New" />
      <Carousel data={mockData} keyExtractor={keyExtractor} renderItem={renderProductItem} title="For You" />
    </ScrollView>
  );
};

export default memo(HomeScreen);
