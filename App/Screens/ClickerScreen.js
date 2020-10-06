import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Animated,
} from "react-native";

import Upgrade from "../Components/Upgrade";
import ResetBtn from "../Components/ResetBtn";
import Banks from "../Components/Banks";
import InputFeedback from "../Components/InputFeedback";

let InputCoord = [{ x: 10, y: 10 }];
const clicksFeedbackComponents = InputCoord.map((input) => (
  <InputFeedback x={input.x} y={input} />
));

const ClickerScreen = () => {
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
          <InputFeedback x={100} y={100} />
        </View>
      </TouchableHighlight>
      <View style={styles.upgradeZone}>
        <View style={styles.upgradeCol}>
          <Upgrade />
          <Upgrade />
        </View>
        <View style={styles.upgradeCol}>
          <Upgrade />
          <ResetBtn />
        </View>
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
  upgradeZone: { flex: 5, flexDirection: "row", width: "100%" },
  upgradeCol: {
    width: "50%",
    justifyContent: "space-around",
  },
  screen: { flex: 1, justifyContent: "center", alignItems: "center" },
});

function ClickAction(evt) {
  InputCoord.push({
    x: evt.nativeEvent.locationX,
    y: evt.nativeEvent.locationY,
  });
  for (let i = 0; i < InputCoord.length; i++) {
    const element = InputCoord[i];
    console.log("(" + element.x + ", " + element.y + ")");
  }
  if (InputCoord.length > 5) {
    InputCoord.shift();
  }
}

export default ClickerScreen;
