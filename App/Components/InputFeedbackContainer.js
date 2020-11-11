import React from "react";
import inputFeedback from "./InputFeedback";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Animated,
} from "react-native";

import InputFeedback from "../Components/InputFeedback";
const intKey = 0;

const key = () =>{
  intKey++;
  return intKey;
} 
const inputFeedbackContainer = (props) => {
  return props.input.map((inputFeedback) => (
    <InputFeedback
      key={key}
      x={inputFeedback.x}
      y={inputFeedback.y}
    />
  ));
};

export default inputFeedbackContainer;
