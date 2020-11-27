import React, { useCallback, useContext, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

import ResetBtn from "../Components/ResetBtn";
import Banks from "../Components/Banks";
import UpgradeContainer from "../Components/UpgradeContainer";
import { useFocusEffect } from "@react-navigation/native";
import { DataContext } from "../Context/DataContext";

const AutomateScreen = () => {

  const { player, updatePlayer, canUpdate, setCanUpdate } = useContext(DataContext);
  const { upgrades, updateUpgrade } = useContext(DataContext);

  return (
    <View style={styles.screen}>
      <View style={styles.banksContainer}>
        <Banks />
      </View>
      <View style={styles.upgradeZone}>
        <UpgradeContainer upgradeType={"auto"} />
        <ResetBtn />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  banksContainer: { flex: 1, width: "100%" },
  screen: { flex: 1, width: "100%" },
  upgradeZone: { flex: 15, flexDirection: 'column', width: "100%"  },
  upgradeCol: { flex: 1, justifyContent: "space-around" },
});

export default AutomateScreen;
