import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

 export const traerJuegos = createAsyncThunk('games/fetchGames', async () => {
   const respuesta = await  axios.get('https://www.freetogame.com/api/games');
   return respuesta.data;
})

export const traerJuegosPorCategoria = createAsyncThunk ('games/fetchGameByCategory', async (category) => {
     const respuesta = await axios.get(`https://www.freetogame.com/api/games?category=${category}`);
     return respuesta.data;
})   

export const traerJuegosPorPlataforma = createAsyncThunk ('game/fetchgameByPlataform', async (plataform) => {
     const respuesta = await axios.get(`https://www.freetogame.com/api/games?platform=${plataform}`);
     return respuesta.data;
})
// en redux toolkit cas slice de estado se maneja de forma  independiente 
// esto quiere decir que cada estado tiene su valor y sus métodos
//  cada uno tien su propio estado inical  sus acciones y ru reducer asociado y cada uno tendra su propio ciclo. 
const gamesSlice = createSlice({
    name : 'allGames',
    initialState : {games : [], filteredGames : [] ,filteredGamesByPlataform :[] ,status : 'idle' , error : null},
      reducers : {},
      extraReducers :  builder => {
         builder
         .addCase(traerJuegos.pending, (state) => {
             state.status = ' loading';
         })
         .addCase(traerJuegos.fulfilled, (state, action) => {
             state.status  = 'succeeded';
             state.games = action.payload;
         })
         .addCase(traerJuegos.rejected, (state,action) => {
              state.status ='failed';
              state.error = action.error.message;
         })
         .addCase(traerJuegosPorCategoria.fulfilled, (state, action) => {
             state.filteredGames = action.payload;
         })
         .addCase(traerJuegosPorPlataforma.fulfilled, (state,action) => {
             state.filteredGamesByPlataform = action.payload;
         })
      }
});


 export  default gamesSlice.reducer;
 