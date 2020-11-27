import React, {useCallback} from "react";
import { Text, View, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import Statistic from "../Components/Statistic";
import ResetBtn from "../Components/ResetBtn";
import NewGameBtn from "../Components/NewGameBtn";
import Banks from "../Components/Banks";
import UpgradeContainer from "../Components/UpgradeContainer";

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
          <UpgradeContainer upgradeType={"legacy"}/>
        <ResetBtn />
        <NewGameBtn />
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
    flexDirection: 'column',
    width: "100%" 
  },
});

export default LegacyScreen;
