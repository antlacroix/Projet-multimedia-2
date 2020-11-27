import React, { useState, useContext, useCallback, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableHighlight,
  PanResponder,
  Platform,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import ResetBtn from "../Components/ResetBtn";
import Banks from "../Components/Banks";
import InputFeedbackContainer from "../Components/InputFeedbackContainer";
import { DataContext } from "../Context/DataContext";
import UpgradeContainer from "../Components/UpgradeContainer";
import DataManager from "../Context/DataManager";
import Animated from "react-native-reanimated";

import { AnimatedCircles } from "../Components/BouncingBall/AnimatedCircles.component";

const ClickerScreen = () => {
  const [inputCoord, setInputCoord] = useState([]);
  const { clickAdd } = useContext(DataContext);

  const ClickAction = (evt) => {
    if (Platform.OS === "web") {
      clickAdd(evt.pageX, evt.pageY - 100);
    } else {
      clickAdd(evt.nativeEvent.locationX, evt.nativeEvent.locationY);
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.banksContainer}>
        <Banks />
      </View>
      <TouchableHighlight
        style={styles.clickZoneContainer}
        onPress={(evt) => ClickAction(evt)}
      >
        <View style={styles.clickZone}>
          <AnimatedCircles style={styles.balls} />
          <InputFeedbackContainer />
        </View>
      </TouchableHighlight>
      <View style={styles.upgradeZone}>
        <UpgradeContainer
          style={styles.upgradeContainer}
          upgradeType={"click"}
        />
        <ResetBtn />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  banksContainer: { flex: 1, width: "100%" },
  clickZoneContainer: { flex: 10, width: "100%" },
  clickZone: { flex: 1, backgroundColor: "gray", width: "100%" },
  feedBack: {
    position: "absolute",
    left: 50,
    top: 50,
    backgroundColor: "pink",
    height: 50,
    width: 50,
  },
  upgradeZone: { flex: 5, flexDirection: "column", width: "100%" },
  screen: { flex: 1, justifyContent: "center", alignItems: "center" },
  balls: { zIndex: 0 },
});

export default ClickerScreen;
