import React, { useContext } from "react";

import { Audio } from "expo-av";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

import { DataContext } from "../Context/DataContext";

const Upgrade = (props) => {
  const playSound = async () => {
    const soundPageTurn = new Audio.Sound();
    try {
      await soundPageTurn.loadAsync(
        require("../../assets/Sounds/126422__cabeeno-rossley__level-up.wav")
      );
      await soundPageTurn.playAsync();
    } catch (error) {
      console.log(error);
    }
  };

  const { player, updatePlayer } = useContext(DataContext);
  const { upgrades, updateUpgrade } = useContext(DataContext);
  const upgrade = upgrades.find((u) => u.id === props.id);

  const onPressHandle = () => {
    if (upgrade.type === "legacy" && isUpgradeAvailable(upgrade)) {
      playSound();
      const tempPlayer = { ...player };
      const tempUpgrade = { ...upgrade };

      tempUpgrade.lvl++;
      tempPlayer.montantLegacy -= upgradeCost();
      tempPlayer.montantLegacySpent += upgradeCost();
      tempPlayer.montantLegacySpentLifeTime += upgradeCost();
      tempPlayer.nbrUpgrade++;
      tempPlayer.nbrUpgradeLifeTime++;

      updatePlayer(tempPlayer);
      updateUpgrade(tempUpgrade);
    } else if (isUpgradeAvailable(upgrade)) {
      playSound();
      const tempUpgrade = { ...upgrade };
      tempUpgrade.lvl++;

      const tempPlayer = { ...player };
      tempPlayer.montant -= upgradeCost();
      tempPlayer.montantSpent += upgradeCost();
      tempPlayer.montantSpentLifeTime += upgradeCost();
      tempPlayer.nbrUpgrade++;
      tempPlayer.nbrUpgradeLifeTime++;

      updatePlayer(tempPlayer);
      updateUpgrade(tempUpgrade);
    } else {
      console.log("upgrade failled");
    }
  };

  const isUpgradeAvailable = (candidate) => {
    if (candidate.type === "legacy") {
      if (player.montantLegacy >= upgradeCost()) {
        return true;
      }
    } else if (player.montant >= upgradeCost()) {
      return true;
    }
    return false;
  };

  const upgradeCost = () => {
    if (upgrade.type === "legacy") {
      return upgrade.cost * (upgrade.lvl * 2 + 1);
    }
    return upgrade.cost * (upgrade.lvl * 1.5 + 1);
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={
          isUpgradeAvailable(upgrade)
            ? styles.usableUpgradeBtn
            : styles.unusableUpgradeBtn
        }
        onPress={() => onPressHandle()}
      >
        <View style={styles.upgradeContainer}>
          <Image
            source={require("../Assets/arr-up.png")}
            style={styles.upgradeImage}
          />
          <View style={styles.upgradeDescription}>
            <Text>Level: {upgrade.lvl}</Text>
            <Text>Cost: {upgradeCost()}$</Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: "50%", alignItems: "center" },
  usableUpgradeBtn: {
    height: 50,
    width: 200,
    margin: 5,
    borderColor: "blue",
    borderWidth: 1,
  },
  unusableUpgradeBtn: {
    height: 50,
    width: 200,
    margin: 5,
    borderColor: "red",
    borderWidth: 1,
  },
  upgradeContainer: { flexDirection: "row" },
  upgradeImage: { width: 50, height: 50 },
  upgradeDescription: {
    width: 150,
    height: 50,
  },
});

export default Upgrade;
