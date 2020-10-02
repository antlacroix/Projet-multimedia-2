import * as React from "react";
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

const ResetBtn = () => {
  return (
    <TouchableHighlight
      onPress={() =>
        Alert.alert(
          "RESET!",
          "voulez-vous reset l'instance?",
          [
            { text: "Oui", onPress: () => console.log("yes") },
            { text: "Non", onPress: () => console.log("no") },
          ],
          { cancelable: true }
        )
      }
    >
      <View style={styles.btn}>
        <Text>RESET</Text>
      </View>
    </TouchableHighlight>
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
});

export default ResetBtn;
