import React, {useState, useRef, useEffect, useCallback} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Animated,
  Platform,
  Image,
} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

const AdsHomeList = ({
  images = [],
  autoSlideInterval = 3000,
  top = Platform.OS === 'ios' ? 10 : 20,
}: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const timerRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const getItemLayout = useCallback(
    (_data, index) => ({
      length: screenWidth * 0.9,
      offset: screenWidth * 0.9 * index,
      index,
    }),
    [screenWidth], 
  );

  const scrollToNextIndex = useCallback(() => {
    if (!images || images.length === 0) return; 

    const nextIndex = (currentIndex + 1) % images.length;
    flatListRef.current?.scrollToIndex({index: nextIndex, animated: true});
    setCurrentIndex(nextIndex);
  }, [currentIndex, images]);

  // Auto-slide effect using useEffect
  useEffect(() => {
    if (autoSlideInterval > 0 && images && images.length > 0) {
      timerRef.current = setInterval(scrollToNextIndex, autoSlideInterval);
    }

    return () => {
      clearInterval(timerRef.current); 
    };
  }, [autoSlideInterval, scrollToNextIndex, images]); 

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const index = viewableItems[0].index;
      if (index !== currentIndex) {
        setCurrentIndex(index);
      }
    }
  }).current;

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={[styles.imageContainer, {marginTop: top}]}
      activeOpacity={1}>
      <Image
        style={styles.image}
        source={{
          uri: item, 
        }}
      />
    </TouchableOpacity>
  );

  const renderPagination = () => (
    <View style={styles.paginationContainer}>
      {images.map((_, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.paginationDot,
            index === currentIndex ? styles.paginationDotActive : null,
          ]}
          onPress={() => {
            flatListRef.current?.scrollToIndex({index, animated: true});
            setCurrentIndex(index);
          }}
        />
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50, // Adjust as needed
        }}
        initialScrollIndex={0}
        getItemLayout={getItemLayout}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        onMomentumScrollEnd={event => {
          const newIndex = Math.round(
            event.nativeEvent.contentOffset.x / screenWidth,
          );
          setCurrentIndex(newIndex);
        }}
      />

      {renderPagination()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative', 
  },
  imageContainer: {
    width: screenWidth * 0.9,
    height: 200, 
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    marginHorizontal: 5,
  },
  paginationDotActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
});

export default AdsHomeList;
