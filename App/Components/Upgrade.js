import * as React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

const Upgrade = () => {
  return (
    <TouchableHighlight
      style={styles.upgradeBtn}
      onPress={() => console.log("lvl-up")}
    >
      <View style={styles.upgradeContainer}>
        <Image
          source={require("../Assets/arr-up.png")}
          style={styles.upgradeImage}
        />
        <View style={styles.upgradeDescription}></View>
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
