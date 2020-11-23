import React, { createContext, useEffect, useState } from "react";

import DataManager from "./../Context/DataManager"
import AsyncStorage from "@react-native-community/async-storage";

export const DataContext = createContext();


const DataContextProvider = (props) =>{

    const defaultPlayer = {
        nbrClick: 0,
        nbrClickLifeTime: 0,

        montant: 0,
        montantTotal: 0,
        montantLifeTime: 0,

        nbrUpgrade: 0,
        nbrUpgradeLifeTime: 0,

        nbrReset: 0,

        montantSpent: 0,
        montantSpentLifeTime: 0,

        montantLegacy: 0,
        montantLegacyLifeTime: 0,

        montantLegacySpent: 0,
        montantLegacySpentLifeTime: 0,
    };

    const defaultUpgrades = [
        //upgrades click
        {id:"c01" , type:"click" , cost:10 , costRule:"+" , bonus:"click" , bonusVariable: 1, lvl: 0 ,},
        {id:"c02" , type:"click" , cost:100 , costRule:"+" , bonus:"click" , bonusVariable: 5, lvl: 0 ,},
        {id:"c03" , type:"click" , cost:1000 , costRule:"+" , bonus:"click" , bonusVariable: 10, lvl: 0 ,},
        //upgrades auto
        {id:"a01" , type:"auto" , cost:100 , costRule:"+" , bonus:"auto" , bonusVariable: 1, lvl: 0 ,},
        {id:"a02" , type:"auto" , cost:1000 , costRule:"+" , bonus:"auto" , bonusVariable: 2, lvl: 0 ,},
        {id:"a03" , type:"auto" , cost:10000 , costRule:"+" , bonus:"auto" , bonusVariable: 5, lvl: 0 ,},
        {id:"a04" , type:"auto" , cost:100000 , costRule:"+" , bonus:"auto" , bonusVariable: 10, lvl: 0 ,},
        {id:"a05" , type:"auto" , cost:1000000 , costRule:"+" , bonus:"auto" , bonusVariable: 100, lvl: 0 ,},
        //upgrades legacy
        {id:"l01" , type:"legacy" , cost:5 , costRule:"+" , bonus:"legacy" , bonusVariable: 1000, lvl: 0 ,},
        {id:"l02" , type:"legacy" , cost:10 , costRule:"+" , bonus:"legacy" , bonusVariable: 2, lvl: 0 ,},
    ]

    useEffect(() => {loadPlayer(); loadUpgrades();}, []);
    
    const loadPlayer = async() => {
        try{
            let playerJson = await AsyncStorage.getItem("player");
            let players = playerJson != null ? JSON.parse(playerJson) : defaultPlayer;
            setPlayer(players);
        }catch (e){
            console.log("load Error: " + e);
            return "load Error: " + e;
        }
    }

    const loadUpgrades = async () => {
        try{
            let upgradesJson = await AsyncStorage.getItem("upgrades");
            let upgrades = upgradesJson != null ? JSON.parse(upgradesJson) : defaultUpgrades;
            setUpgrades(upgrades);
        }catch(e){
            console.log("load Error: " + e);
            return "load Error: " + e;
        }
    }

    const [player, setPlayer] = useState(defaultPlayer);

    const updatePlayer = (newPlayer) => {
        setPlayer(newPlayer);
        DataManager.save(newPlayer);
    } 

    const [canUpdate, setCanUpdate] = useState(false);

    const [upgrades, setUpgrades] = useState(defaultUpgrades)
    
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
    
    const updateUpgrades = (newUpgrades) => {
        setUpgrades(newUpgrades);
    }

    const newGame = () => {
        let newPlayer = defaultPlayer;
        let newUpgrades = defaultUpgrades;

        setPlayer(newPlayer);
        setUpgrades(newUpgrades);

        DataManager.save(newPlayer);
        DataManager.saveUp(newUpgrades);
    }

    const resetGame = () => {
        let tempUpgrades = [];
        let tempPlayer = {...player}
        for (let i = 0; i < upgrades.length; i++) {
            const item = upgrades[i];
            if(item.type !== "legacy"){
                item.lvl = 0;
            }
            tempUpgrades.push(item);         
        }

        tempPlayer.montantLegacy += tempPlayer.montant / 1000;
        tempPlayer.montantLegacyLifeTime += tempPlayer.montant / 1000;
        tempPlayer.nbrClick = 0;
        tempPlayer.nbrUpgrade = 0;
        tempPlayer.nbrReset += 1;
        tempPlayer.montant = tempUpgrades[8].bonusVariable * tempUpgrades[8].lvl;
        tempPlayer.montantTotal = 0;
        tempPlayer.montantSpent = 0;
        tempPlayer.montantLegacySpent = 0;

        updatePlayer(tempPlayer);
        updateUpgrades(tempUpgrades);
    }

    const clickAdd = (x, y) => {
        const tempInputCoord = [...inputCoord, {
            id : Math.floor(Math.random() * Math.random() * 1000000),
            isFinished : false,
            xVal : x,
            yVal : y
        }];

        setInputCoord(tempInputCoord);

        if(player != null){
            const tempPlayer = {...player};

            let clickbonus = 
            (upgrades[0].bonusVariable * upgrades[0].lvl) +
            (upgrades[1].bonusVariable * upgrades[1].lvl) +
            (upgrades[2].bonusVariable * upgrades[2].lvl);

            let multi = (!(upgrades[9].lvl > 0))? 1 : upgrades[9].bonusVariable * upgrades[9].lvl;
            tempPlayer.montant += (1 + clickbonus) * multi;
            tempPlayer.montantLifeTime += (1 + clickbonus) * multi;
            tempPlayer.montantTotal += (1 + clickbonus) * multi;
            tempPlayer.nbrClick++;
            tempPlayer.nbrClickLifeTime++;
            updatePlayer(tempPlayer);
        }
    }

    const [inputCoord, setInputCoord] = useState([]);

    const removeFinishInputCoord = (id) => {
        const tempInputCoord = [...inputCoord];
        let indexToRemove = -1;
        for (let i = 0; i < tempInputCoord.length; i++) {
            const element = tempInputCoord[i];
            if (inputCoord[i].id === id){
                indexToRemove = i;
            }
        }
        if(indexToRemove > -1){
            tempInputCoord.splice(indexToRemove, 1);
        }
        setInputCoord(tempInputCoord);
    }

    return(
        <DataContext.Provider value={{upgrades, player, updatePlayer, updateUpgrade, updateUpgrades, newGame, clickAdd, canUpdate, setCanUpdate, resetGame, inputCoord, removeFinishInputCoord}}>
            {props.children}
        </DataContext.Provider>
    );

    
};

export default DataContextProvider;