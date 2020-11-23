import { useFocusEffect } from "@react-navigation/native";
import React, {useContext, useEffect, useCallback} from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

import { DataContext } from "../Context/DataContext";

const Bank = () => {
  const { player, updatePlayer, upgrades } = useContext(DataContext);

  useEffect(() => {
    const interval = setInterval(() => {
      let tempPlayer = {...player}
      let amount =
        upgrades[3].bonusVariable * upgrades[3].lvl +
        upgrades[4].bonusVariable * upgrades[4].lvl +
        upgrades[5].bonusVariable * upgrades[5].lvl +
        upgrades[6].bonusVariable * upgrades[6].lvl +
        upgrades[7].bonusVariable * upgrades[7].lvl;

      let multi = (!(upgrades[9].lvl > 0))? 1 : upgrades[9].bonusVariable * upgrades[9].lvl;
      tempPlayer.montant += amount * multi;
      tempPlayer.montantTotal += amount * multi;
      tempPlayer.montantLifeTime += amount * multi;
      updatePlayer(tempPlayer);
    }, 1000);
    return () => clearInterval(interval);
  },[player]);

  return (
    <View style={styles.container}>
      <Text>Bank:...............{player.montant.toFixed(2)}$</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    justifyContent: "center",
  },
});

export default Bank;
