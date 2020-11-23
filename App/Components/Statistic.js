import { useFocusEffect } from "@react-navigation/native";
import React, {useContext, useCallback, useEffect} from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

import { DataContext } from "../Context/DataContext";

const Statistic = () => {
  const { player } = useContext(DataContext);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text>STATISTIQUE</Text>
      </View>
      <ScrollView style={styles.statContainer}>
        <Text>nbrClick: {player.nbrClick}</Text>
        <Text>nbrClickLifeTime: {player.nbrClickLifeTime}</Text>
        <Text> </Text>
        <Text>montantTotal: {player.montantTotal}</Text>
        <Text>montantLifeTime: {player.montantLifeTime}</Text>
        <Text> </Text>
        <Text>montantSpent: {player.montantSpent}</Text>
        <Text>montantSpentLifeTime: {player.montantSpentLifeTime}</Text>
        <Text> </Text>
        <Text>nbrUpgrade: {player.nbrUpgrade}</Text>
        <Text>nbrUpgradeLifeTime: {player.nbrUpgradeLifeTime}</Text>
        <Text> </Text>
        <Text>nbrReset: {player.nbrReset}</Text>
        <Text> </Text>
        <Text>montantLegacyLifeTime: {player.montantLegacyLifeTime}</Text>
        <Text> </Text>
        <Text>montantLegacySpent: {player.montantLegacySpent}</Text>
        <Text>montantLegacySpentLifeTime: {player.montantLegacySpentLifeTime}</Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, margin: 5 },
  titleContainer: {
    // margin: 10,
    padding: 5,
    width: "30%",
    backgroundColor: "lightgray",
    borderWidth: 2,
    borderBottomWidth: 0,
    borderColor: "black",
    alignItems: "center",
  },
  title: {},
  statContainer: {
    // margin: 10,
    padding: 5,
    flex: 1,
    backgroundColor: "lightgray",
    borderWidth: 2,
    borderColor: "black",
  },
  statText: {},
});

export default Statistic;
