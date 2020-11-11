import React, { useContext } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

import { DataContext } from "../Context/DataContext";

const Upgrade = (props) => {
  const { upgrades, updateUpgrade } = useContext(DataContext);
  const upgrade = upgrades.find(u => u.id === props.id);

  const onPressHandle = () => {
    console.log(upgrade.id + ": lvl-up");
    if(true){
      const tempUpgrade = {...upgrade};
      tempUpgrade.lvl++;
      updateUpgrade(tempUpgrade);
    }
  }

  return (
    <TouchableHighlight
      style={styles.upgradeBtn}
      onPress={() => onPressHandle()}
    >
      <View style={styles.upgradeContainer}>
        <Image
          source={require("../Assets/arr-up.png")}
          style={styles.upgradeImage}
        />
        <View style={styles.upgradeDescription}>
          <Text>Upgrade ID: {upgrade.id}</Text>
          <Text>Level: {upgrade.lvl}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  upgradeBtn: { height: 50, width: 200 },
  upgradeContainer: { flexDirection: "row" },
  upgradeImage: { width: 50, height: 50 },
  upgradeDescription: {
    width: 150,
    height: 50,
    borderWidth: 1,
    borderColor: "red",
  },
});

export default Upgrade;
