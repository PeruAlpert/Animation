import * as React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedReaction,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Layout from '../../constants/Layout';

const {width, height} = Dimensions.get('window');

const _flagSize = Math.floor(width * 0.2);
const _spacing = 4;
const _flatSizeWithMargins = _flagSize + _spacing * 2;
const _selectedFlagBorder = 2;
const _selectedFlagContainer = _flagSize + _selectedFlagBorder * 4;
const _flatlistInnerSpacing = width / 2 - _flagSize / 2 - _spacing;
const scaleFactor = 0.2;

const snapTo = (value, step) => {
  'worklet';
  return Math.round(value / step) * step;
};

const Flag = ({item, index, scrollX}) => {
  const stylez = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            scrollX.value / _flatSizeWithMargins,
            [index - 1, index, index + 1],
            [1 - scaleFactor, 1, 1 - scaleFactor],
          ),
        },
      ],
      opacity: interpolate(
        scrollX.value / _flatSizeWithMargins,
        [index - 1, index, index + 1],
        [1 - scaleFactor, 1, 1 - scaleFactor],
      ),
    };
  });
  return (
    <Animated.View
      style={[
        {
          width: _flagSize,
          height: _flagSize,
          marginHorizontal: _spacing,
        },
        stylez,
      ]}>
      <Image
        source={{uri: item.image}}
        style={{flex: 1, resizeMode: 'contain'}}
      />
      <Text
        style={{
          color: '#000',
          fontSize: 12,
          fontWeight: 'bold',
          textAlign: 'center',
        }}
        numberOfLines={1}>
        {item.name}
      </Text>
    </Animated.View>
  );
};

export default function FlagsList({flags}: any) {
  const scrollX = useSharedValue(0);
  const activeIndicator = useSharedValue(1);
  const aref = useAnimatedRef();
  const onScroll = useAnimatedScrollHandler({
    onScroll: ev => {
      if (Platform.OS === 'web') {
        activeIndicator.value = scrollX.value === ev.contentOffset.x ? 1 : 0;
      }
      scrollX.value = ev.contentOffset.x;
      if (activeIndicator.value !== 0 && Platform.OS !== 'web') {
        activeIndicator.value = 0;
      }
    },
    onMomentumEnd: () => {
      activeIndicator.value = 1;
    },
  });

  useAnimatedReaction(
    () => {
      return {activeIndicator: activeIndicator.value, scrollX: scrollX.value};
    },
    (result, previous) => {
      if (
        (result.activeIndicator === 1 || result.scrollX === previous.scrollX) &&
        Platform.OS === 'web'
      ) {
        aref.current?.scrollToOffset({
          offset: snapTo(scrollX.value, _flatSizeWithMargins),
          animated: true,
        });
      }
    },
  );
  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        {/* <ActiveIndex activeIndicator={activeIndicator} /> */}
        <Animated.FlatList
          ref={aref}
          data={flags}
          horizontal
          style={{flexGrow: 0}}
          scrollEventThrottle={16}
          onScroll={onScroll}
          snapToInterval={_flatSizeWithMargins}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: _flatlistInnerSpacing}}
          keyExtractor={(item, index) => `${item.name}-${index}`}
          renderItem={({item, index}) => (
            <Flag item={item} index={index} scrollX={scrollX} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: Layout.width,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
