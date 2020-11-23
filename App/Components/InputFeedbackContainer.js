import React, {useContext, useEffect} from "react";
import inputFeedback from "./InputFeedback";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Animated,
} from "react-native";

import InputFeedback from "../Components/InputFeedback";
import { DataContext } from "../Context/DataContext";

const intKey = 0;

const key = () =>{
  intKey++;
  return intKey;
} 
const inputFeedbackContainer = (props) => {

  const { inputCoord } = useContext(DataContext);

  return inputCoord.map((inputFeedback) => (
    <InputFeedback
      key={inputFeedback.id}
      x={inputFeedback.xVal}
      y={inputFeedback.yVal}
    />
  ));
};

export default inputFeedbackContainer;
