import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

import Upgrade from "../Components/Upgrade";
import ResetBtn from "../Components/ResetBtn";

const AutomateScreen = () => {
  return (
    <View style={styles.screen}>
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
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, flexDirection: "row", width: "100%" },
  upgradeCol: { flex: 1, justifyContent: "space-around" },
});

export default AutomateScreen;
