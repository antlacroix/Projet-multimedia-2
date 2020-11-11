import React, { useState }from "react";
import AsyncStorage from "@react-native-community/async-storage";

const savePlayer = async (newPlayer) => {
    try{
        let playerString = JSON.stringify(newPlayer)
        await AsyncStorage.setItem("player", playerString);
    }catch (e){
        console.log("Save Error: " + e);
    }
};

const saveUpgrade = async (newUpgrades) => {
    try{
        let upgradesString = JSON.stringify(newUpgrades);
        await AsyncStorage.setItem("upgrades", upgradesString);
    }catch(e){
        console.log("save error: " + e);
    }
}

const loadPlayer = async () => {
    try{
        let palyerJson = await AsyncStorage.getItem("player")
        return palyerJson != null ? JSON.parse(palyerJson) : null;
    }catch (e){
        console.log("load Error: " + e);
        return "load Error: " + e;
    }
};

const DataManager =  {

    loadPlayer: async() => {
        try{
            let palyerJson = await AsyncStorage.getItem("player");
            return palyerJson != null ? JSON.parse(palyerJson) : null;
        }catch (e){
            console.log("load Error: " + e);
            return "load Error: " + e;
        }
    },

    save: (newPlayer) =>{
        savePlayer(newPlayer);
    },
    
    saveUp: (newUpgrades) => {
        saveUpgrade(newUpgrades);
    },
    
    isDataExist: async () => {
        let player = loadPlayer()
        if(player !== null){
            return true;
        }else{
            return false;
        }
    },
}

export default DataManager;