import React, { useRef, useEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  Animated,
} from "react-native";

const InputFeedback = (props) => {
  const position = new Animated.ValueXY({ x: props.x, y: props.y });
  const fadeAnim = useRef(new Animated.Value(0)).current;

  Animated.sequence([
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }),
    Animated.timing(position, {
      toValue: { x: 50, y: -50 },
      duration: 2000,
      useNativeDriver: true,
    }),
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }),
  ]).start();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          backgroundColor: "pink",
          height: 50,
          width: 50,
          opacity: fadeAnim,
          transform: position.getTranslateTransform(),
        }}
      >
        <Text>salut</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default InputFeedback;
