import * as React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";

import Upgrade from "../Components/Upgrade";
import ResetBtn from "../Components/ResetBtn";

const ClickerScreen = () => {
  return (
    <View style={styles.screen}>
      <TouchableHighlight
        style={styles.clickZoneContainer}
        onPress={() => console.log("$++")}
      >
        <View style={styles.clickZone} />
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
  clickZoneContainer: { flex: 2, width: "100%" },
  clickZone: { flex: 1, backgroundColor: "gray", width: "100%" },
  upgradeZone: { flex: 3, flexDirection: "row", width: "100%" },
  upgradeCol: {
    width: "50%",
    justifyContent: "space-around",
  },
  screen: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default ClickerScreen;
