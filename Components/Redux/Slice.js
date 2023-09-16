import { createSlice } from "@reduxjs/toolkit";


// en redux toolkit cas slice de estado se maneja de forma  independiente 
// esto quiere decir que cada estado tiene su valor y sus métodos
//  cada uno tien su propio estado inical  sus acciones y ru reducer asociado y cada uno tendra su propio ciclo. 
// https://www.freetogame.com/api-doc 
const gamesSlice = createSlice({
    name : 'allGames',
    initialState : [],
      reducers : {
         addGames(state,action){
            return [...state,action.payload];
         }
      }
});

export const { addGames} = gamesSlice.actions;//1
 /*......................  */

 export  const gamesReducer  = gamesSlice.reducer;//1
 