import * as React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

const Bank = () => {
  return (
    <View style={styles.container}>
      <Text>Bank:..................XX,XX$</Text>
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
