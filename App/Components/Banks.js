import * as React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

import Bank from "../Components/Bank";
import LegacyBank from "../Components/LegacyBank";

const Banks = () => {
  return (
    <View style={styles.container}>
      <Bank />
      <LegacyBank />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", flex: 1, justifyContent: "center" },
});

export default Banks;
