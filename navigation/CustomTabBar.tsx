import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Animated, {useAnimatedStyle, withSpring} from 'react-native-reanimated';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {colors} from '../constants/Colors';
import MonoText from '../components/MonoText';

const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel || options.title || route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const animatedStyles = useAnimatedStyle(() => {
          return {
            transform: [
              {
                translateY: withSpring(isFocused ? -10 : 0),
              },
            ],
          };
        });

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tabItem}>
            <Animated.View style={[animatedStyles]}>
              <View style={styles.center}>
                <View
                  style={[
                    styles.iconContainer &&
                      isFocused &&
                      styles.iconContainerActive,
                  ]}>
                
                  <MonoText style={[styles.tabText, isFocused && styles.tabTextFocused]}>
                    {label}
                  </MonoText>
                
                </View>
               
              </View>
            </Animated.View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};



const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 59, 
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    backgroundColor: colors.secondary,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingBottom: 10,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainerActive: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: colors.white,
  },
  circle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'black',
    position: 'absolute',
    bottom: -10, 
  },
  tabText: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5, 
  },
  tabTextFocused: {
    color: 'white',
    fontWeight: 'bold',
  },
  center: {alignItems: 'center'},
});

export default CustomTabBar;
