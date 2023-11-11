import React from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import styles from "./styles";

type SwipeableProps = {
  onSwipe: () => void;
  name: string;
};

export default function Swipeable({ onSwipe, name }: SwipeableProps) {
  function onScroll(e: NativeSyntheticEvent<NativeScrollEvent>) {
    e.nativeEvent.contentOffset.x === 200 && onSwipe();
  }

  return (
    <View style={styles.swipeContainer}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={10}
        onScroll={onScroll}
      >
        <TouchableOpacity>
          <View style={styles.swipeItem}>
            <Text style={styles.swipeItemText}>{name}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.swipeBlank} />
      </ScrollView>
    </View>
  );
}
