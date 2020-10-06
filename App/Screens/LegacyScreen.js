import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

import Upgrade from "../Components/Upgrade";
import Statistic from "../Components/Statistic";
import ResetBtn from "../Components/ResetBtn";
import Bank from "../Components/Bank";
import LegacyBank from "../Components/LegacyBank";
import Banks from "../Components/Banks";

const LegacyScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.banksContainer}>
        <Banks />
      </View>
      <View style={styles.statContainer}>
        <Statistic />
      </View>
      <View style={styles.upgradeContainer}>
        <Upgrade />
        <Upgrade />
        <ResetBtn />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  banksContainer: { flex: 1, width: "100%" },
  screen: { flex: 1 },
  statContainer: { flex: 7.5, padding: 10 },
  upgradeContainer: {
    flex: 7.5,
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default LegacyScreen;
