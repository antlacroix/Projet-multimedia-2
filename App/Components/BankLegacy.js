import * as React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

import { DataContext } from "../Context/DataContext";

const LegacyBank = () => {
  const { player } = React.useContext(DataContext);

  return (
    <View style={styles.container}>
      <Text>Legacy:................{player.montantLegacy}$</Text>
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

export default LegacyBank;
