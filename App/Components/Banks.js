import React, { useContext } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

import Bank from "../Components/Bank";
import BankLegacy from "./BankLegacy";

const Banks = () => {
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
