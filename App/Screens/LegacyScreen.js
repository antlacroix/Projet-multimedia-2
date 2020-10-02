import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

import Upgrade from "../Components/Upgrade";
import Statistic from "../Components/Statistic";
import ResetBtn from "../Components/ResetBtn";

const LegacyScreen = () => {
  return (
    <View style={styles.screen}>
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
  screen: { flex: 1 },
  statContainer: { flex: 1, padding: 10 },
  upgradeContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default LegacyScreen;
