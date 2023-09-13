import {configureStore}  from '@reduxjs/toolkit';
import { gamesReducer } from './Slice';


const store = configureStore({
      reducer : {
        allGames : gamesReducer
      }
})

export default store;

