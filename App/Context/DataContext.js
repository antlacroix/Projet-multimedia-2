import React, { createContext, useEffect, useState } from "react";

import DataManager from "./../Context/DataManager"
import AsyncStorage from "@react-native-community/async-storage";

export const DataContext = createContext();


const DataContextProvider = (props) =>{

    useEffect(() => {loadPlayer(); loadUpgrades()}, []);
    const loadPlayer = async() => {
        try{
            let playerJson = await AsyncStorage.getItem("player");
            let players = playerJson != null ? JSON.parse(playerJson) : null;
            setPlayer(players);
        }catch (e){
            console.log("load Error: " + e);
            return "load Error: " + e;
        }
    }

    const loadUpgrades = async () => {
        try{
            let upgradesJson = await AsyncStorage.getItem("upgrades");
            let upgrades = upgradesJson != null ? JSON.parse(upgradesJson) : null;
            setUpgrades(upgrades);
        }catch(e){
            console.log("load Error: " + e);
            return "load Error: " + e;
        }
    }

    const [player, setPlayer] = useState({
        nbrClick: 0,
        nbrUpgrade: 0,
        nbrReset: 0,
        montant: 0,
        montantTotal: 0,
        montantLifeTime: 0,
        montantSpent: 0,
        montantSpentLifeTime: 0,
        montantLegacy: 0,
        montantLegacyTotal: 0,
        montantLegacySpent: 0,
    } );

    
    
    const updatePlayer = (newPlayer) => {
        setPlayer(newPlayer);
        DataManager.save(newPlayer);
    } 

    const [upgrades, setUpgrades] = useState([
        //upgrades click
        {id:"c01" , type:"click" , cost:1 , costRule:"+" , bonus:"click" , bonusVariable: 1, lvl: 0 ,},
        {id:"c02" , type:"click" , cost:1 , costRule:"+" , bonus:"click" , bonusVariable: 1, lvl: 0 ,},
        {id:"c03" , type:"click" , cost:1 , costRule:"+" , bonus:"click" , bonusVariable: 1, lvl: 0 ,},
        //upgrades auto
        {id:"a01" , type:"auto" , cost:1 , costRule:"+" , bonus:"auto" , bonusVariable: 1, lvl: 0 ,},
        {id:"a02" , type:"auto" , cost:1 , costRule:"+" , bonus:"auto" , bonusVariable: 1, lvl: 0 ,},
        {id:"a03" , type:"auto" , cost:1 , costRule:"+" , bonus:"auto" , bonusVariable: 1, lvl: 0 ,},
        {id:"a04" , type:"auto" , cost:1 , costRule:"+" , bonus:"auto" , bonusVariable: 1, lvl: 0 ,},
        {id:"a05" , type:"auto" , cost:1 , costRule:"+" , bonus:"auto" , bonusVariable: 1, lvl: 0 ,},
        //upgrades legacy
        {id:"l01" , type:"legacy" , cost:1 , costRule:"+" , bonus:"legacy" , bonusVariable: 1, lvl: 0 ,},
        {id:"l02" , type:"legacy" , cost:1 , costRule:"+" , bonus:"legacy" , bonusVariable: 1, lvl: 0 ,},
    ])
    
    const updateUpgrade = (newUpgrade) => {
        const tempUpgradeArray = [];
        for (let i = 0; i < upgrades.length; i++){
            if(upgrades[i].id === newUpgrade.id){
                tempUpgradeArray.push(newUpgrade);
            }else{
                tempUpgradeArray.push(upgrades[i]);
            }        
        }
        setUpgrades(tempUpgradeArray);
        DataManager.saveUp(tempUpgradeArray);
    }


    return(
        <DataContext.Provider value={{upgrades, player, updatePlayer, updateUpgrade}}>
            {props.children}
        </DataContext.Provider>
    );

    
};

export default DataContextProvider;