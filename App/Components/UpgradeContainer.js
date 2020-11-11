import React, { useState, useContext } from "react";
import { View } from "react-native";
import { DataContext } from "./../Context/DataContext";
import Upgrade from "./Upgrade";

const UpgradeContainer = (props) => {
  const { upgrades } = useContext(DataContext);

  return (
    <View>
      {upgrades.filter(u => u.type === props.upgradeType).map((u) => {
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