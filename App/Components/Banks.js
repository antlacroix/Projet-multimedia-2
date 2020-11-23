import React, { useContext, useEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

import Bank from "../Components/Bank";
import BankLegacy from "./BankLegacy";
import { DataContext } from "../Context/DataContext";

const Banks = () => {
  
  const { player, updatePlayer } = useContext(DataContext);
  const { upgrades, updateUpgrade } = useContext(DataContext);

  return (
    <View style={styles.container}>
      <Bank />
      <BankLegacy />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", flex: 1, justifyContent: "center" },
});

export default Banks;
