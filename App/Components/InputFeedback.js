import React, { useRef, useEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  Animated,
  Platform,
} from "react-native";

const InputFeedback = (props) => {
  let position = null;

  if (Platform.OS === "web") {
    position = new Animated.ValueXY({ x: 10, y: 10 });
  } else {
    position = new Animated.ValueXY({ x: props.x, y: props.y });
  }
  const fadeAnim = useRef(new Animated.Value(0)).current;

  Animated.sequence([
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }),
    Animated.timing(position, {
      toValue: { x: 50, y: -50 },
      duration: 500,
      useNativeDriver: true,
    }),
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }),
  ]).start();

  return (
    <Animated.View
      style={{
        position: "absolute",
        backgroundColor: "pink",
        height: 50,
        width: 50,
        opacity: fadeAnim,
        transform: position.getTranslateTransform(),
      }}
    >
      <Text>salut</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default InputFeedback;
