

import * as React from "react";
import {
  Animated,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MonoText from "../MonoText";


const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 7;

 const PostsList=({data}) => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const [newData, setNewData] = React.useState([])
React.useEffect(() => {
    setNewData(data)
}, [data])

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Animated.FlatList
        data={newData}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{
          padding: SPACING,
          paddingTop: StatusBar.currentHeight || 42,
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          const scale = scrollY.interpolate({
            inputRange: [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)],
            outputRange: [1, 1, 1, 0],
          });
          const opacity = scrollY.interpolate({
            inputRange: [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 1)],
            outputRange: [1, 1, 1, 0],
          });
          return (
            <Animated.View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "rgba(255,255,255,1)",
                marginBottom: SPACING,
                padding: SPACING,
                borderRadius: 12,
                shadowColor: "#000",
                shadowRadius: 30,
                shadowOpacity: 0.2,
                shadowOffset: {
                  width: 0,
                  height: 40,
                },
                elevation: 10,
                opacity,
                transform: [{ scale }],
              }}>
              <View>
                <MonoText
                bold
                size={20}
                  style={{
                    marginBottom: 5,
                  }}>
                  {item?.title}
                </MonoText>
                <MonoText
                size={13}
                  style={{
                    marginBottom: 8,
                    letterSpacing: 1,
                    opacity: 0.7,
                  }}>
                  {item?.body}
                </MonoText>
              </View>
            </Animated.View>
          );
        }}
      />
    </View>
  );
};
export default PostsList;