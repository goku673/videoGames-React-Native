
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import gamesReducer from './Slice';

const store = configureStore({
  reducer: {
    allGames: gamesReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
});


export default store;

