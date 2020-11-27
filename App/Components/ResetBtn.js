import React, { useContext } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  Button,
  Alert,
} from "react-native";

import { DataContext } from "../Context/DataContext";

const ResetBtn = () => {
  const { resetGame } = useContext(DataContext);

  return (
    <View style={styles.btnContainer}>
      <TouchableHighlight onPress={() => resetGame()}>
        <View style={styles.btn}>
          <Text>RESET</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 50,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "dodgerblue",
    backgroundColor: "lightblue",
    borderRadius: 25,
  },
  btnContainer: { alignItems: "center", marginBottom: 20 },
});

export default ResetBtn;
