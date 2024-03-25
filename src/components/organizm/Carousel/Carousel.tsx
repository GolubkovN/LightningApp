import React, { memo, useCallback } from 'react';
import { TitleOne } from '../../atoms';
import {
  FlatList,
  FlatListProps,
  ListRenderItem,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { styles as BaseStyles } from './styles';

interface ICarouselProps<T> {
  data: T[];
  showControls?: boolean;
  xp?: {
    container: ViewStyle;
    title: TextStyle;
  };
  renderItem: ListRenderItem<T>;
  keyExtractor: FlatListProps<T>['keyExtractor'];
  title: string;
}

function Carousel<T extends unknown>({
  data,
  showControls = true,
  xp,
  renderItem,
  keyExtractor,
  title,
}: ICarouselProps<T>) {
  const carouselStyles = StyleSheet.flatten({
    ...BaseStyles,
    ...xp,
  });

  const renderControll = useCallback(() => {
    return <TouchableOpacity style={carouselStyles.container} />;
  }, [carouselStyles.container]);

  return (
    <View style={carouselStyles.container}>
      {title && <TitleOne text={title} xp={{ styles: carouselStyles.title }} />}
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={carouselStyles.list}
      />
      {showControls && (
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={data}
          renderItem={renderControll}
          keyExtractor={keyExtractor}
          style={carouselStyles.controls}
          contentContainerStyle={carouselStyles.controlsContainer}
          scrollEnabled={false}
        />
      )}
    </View>
  );
}

export default memo(Carousel);
