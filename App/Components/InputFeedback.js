import React, { useRef, useEffect, useContext } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  Animated,
  Platform,
} from "react-native";


import { DataContext } from "../Context/DataContext";

const InputFeedback = (props) => {

  useEffect(()=>{
    animation.start();
    return function cleanup() {
    }
  },[]);

  const { inputCoord, removeFinishInputCoord } = useContext(DataContext);

  let position = null;
  
  if (Platform.OS === "web") {
    position = new Animated.ValueXY({ 
      x: 250,
      y: 250
     });
  } else {
    position = new Animated.ValueXY({ x: props.x, y: props.y });
  }
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const animation = Animated.sequence([
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }),
    Animated.timing(position, {
      toValue: { x: 50, y: -50 },
      duration: 250,
      useNativeDriver: true,
    }),
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }),
  ]);

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
