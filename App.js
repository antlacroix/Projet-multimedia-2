import * as React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Audio } from 'expo-av';

import ClickerScreen from "./App/Screens/ClickerScreen";
import AutomateScreen from "./App/Screens/AutomateScreen";
import LegacyScreen from "./App/Screens/LegacyScreen";
import DataContextProvider from "./App/Context/DataContext";

const Tab = createMaterialTopTabNavigator();

export default function App() {

  

  const blurEffect = async () => {
    const soundPageTurn = new Audio.Sound();
    try{
      await soundPageTurn.loadAsync(require('./assets/Sounds/63318__flag2__page-turn-please-turn-over-pto-paper-turn-over.wav'))
      await soundPageTurn.playAsync();
      await soundPageTurn.unloadAsync();
    }catch(error){
      console.log(error);
    }
  }

  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
        <DataContextProvider>
          <Tab.Navigator>
            <Tab.Screen name="Clicker" component={ClickerScreen} listeners={{blur: e => blurEffect()}}/>
            <Tab.Screen name="Automate" component={AutomateScreen} listeners={{blur: e => blurEffect()}}/>
            <Tab.Screen name="Legacy" component={LegacyScreen} listeners={{blur: e => blurEffect()}}/>
          </Tab.Navigator>
        </DataContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "center", alignItems: "center" },
});
