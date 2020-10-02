import * as React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableNativeFeedback,
  ScrollView,
} from "react-native";

const Statistic = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text>STATISTIQUE</Text>
      </View>
      <ScrollView style={styles.statContainer}>
        <Text></Text>
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
