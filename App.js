import * as React from "react";
import { Text, View, StyleSheet, Platform, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import ClickerScreen from "./App/Screens/ClickerScreen";
import AutomateScreen from "./App/Screens/AutomateScreen";
import LegacyScreen from "./App/Screens/LegacyScreen";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Tab.Navigator>
        <Tab.Screen name="Clicker" component={ClickerScreen} />
        <Tab.Screen name="Automate" component={AutomateScreen} />
        <Tab.Screen name="Legacy" component={LegacyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "center", alignItems: "center" },
});
