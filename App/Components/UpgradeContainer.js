import React, { useState, useContext } from "react";
import { View } from "react-native";
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
    <View>
      {localUpgrades().map((u) => {
        return (
          <Upgrade
            key={u.id}
            id={u.id}
          />
        );
      })}
    </View>
  );
};

export default UpgradeContainer;