import React, { memo } from 'react';
import { ScrollView } from 'react-native';
import { styles } from './styles';
import { TitleOne } from '../../components/atoms';

const CatalogScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <TitleOne text="Catalog Screen" />
    </ScrollView>
  );
};

export default memo(CatalogScreen);
