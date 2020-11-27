import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { DataContext } from "./../Context/DataContext";
import Upgrade from "./Upgrade";

const UpgradeContainer = (props) => {
  const { upgrades } = useContext(DataContext);
  
  const localUpgrades = () => {
    const tempUpgrades = [];
      if(upgrades !== null){
      for (let i = 0; i < upgrades.length; i++) {
        const element = upgrades[i];
        if (element.type === props.upgradeType){
          tempUpgrades.push(element);
        }
      }
    }
    return tempUpgrades;
  }

  return (
    <View style={styles.container}>
      {localUpgrades().map((u) => {
        return (
          <Upgrade
            style={styles.contant}
            key={u.id}
            id={u.id}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container:{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start'},
  contant:{ width: '50%' },
})

export default UpgradeContainer;