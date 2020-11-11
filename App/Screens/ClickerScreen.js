import React, { useState, useContext, useCallback } from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import ResetBtn from "../Components/ResetBtn";
import Banks from "../Components/Banks";
import InputFeedbackContainer from "../Components/InputFeedbackContainer";
import { DataContext } from "../Context/DataContext";
import UpgradeContainer from "../Components/UpgradeContainer";
import DataManager from "../Context/DataManager";

const ClickerScreen = () => {

  const load = () => {
    //updatePlayer(DataManager.player());
    console.log("CliskScreen");
  } 
  useFocusEffect(useCallback(load))

  const [inputCoord, setInputCoord] = useState([]);
  const { player, updatePlayer } = useContext(DataContext);
  const ClickAction = (evt) => {
    while (inputCoord.length > 0) {
      inputCoord.shift();
      setInputCoord([...inputCoord]);
    }
    setInputCoord([
      ...inputCoord,
      {
        x: evt.nativeEvent.locationX,
        y: evt.nativeEvent.locationY,
      },
    ]);
    const tempPlayer = {...player};
    tempPlayer.montant++;
    tempPlayer.nbrClick++;
    updatePlayer(tempPlayer);
  };

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
          <InputFeedbackContainer input={inputCoord} />
        </View>
      </TouchableHighlight>
      <View style={styles.upgradeZone}>
          <UpgradeContainer upgradeType={"click"} />
          <ResetBtn />
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

export default ClickerScreen;
