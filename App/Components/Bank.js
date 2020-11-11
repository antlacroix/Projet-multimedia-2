import { useFocusEffect } from "@react-navigation/native";
import React, {useContext} from "react";
import { useCallback } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

import { DataContext } from "../Context/DataContext";

const Bank = () => {
  const { player } = useContext(DataContext);

  const load = () => {
    console.log("bank")
  }

  //useFocusEffect(useCallback(load))

  return (
    <View style={styles.container}>
      <Text>Bank:...............{player.montant}$</Text>
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
