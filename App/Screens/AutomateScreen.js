import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

import Upgrade from "../Components/Upgrade";
import ResetBtn from "../Components/ResetBtn";
import Banks from "../Components/Banks";

const AutomateScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.banksContainer}>
        <Banks />
      </View>
      <View style={styles.upgradeZone}>
        <View style={styles.upgradeCol}>
          <Upgrade />
          <Upgrade />
          <Upgrade />
        </View>
        <View style={styles.upgradeCol}>
          <Upgrade />
          <Upgrade />
          <ResetBtn />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  banksContainer: { flex: 1, width: "100%" },
  screen: { flex: 1, width: "100%" },
  upgradeZone: { flex: 15, flexDirection: "row", width: "100%" },
  upgradeCol: { flex: 1, justifyContent: "space-around" },
});

export default AutomateScreen;
