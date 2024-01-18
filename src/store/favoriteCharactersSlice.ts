import {createSlice} from '@reduxjs/toolkit';
import {CharacterType} from '../api/requests.api';

interface FavoriteCharacters {
  favoriteCharacters: CharacterType[];
}

const initialState: FavoriteCharacters = {
  favoriteCharacters: [],
};
export const favoriteCharactersSlice = createSlice({
  name: 'favoriteCharacters',
  initialState,
  reducers: {
    setFavoriteCharacter: (state, action) => {
      state.favoriteCharacters = [...state.favoriteCharacters, action.payload];
    },
    removeFavoriteCharacter: (state, action) => {
      state.favoriteCharacters = state.favoriteCharacters.filter(
        character => character.id !== action.payload.id,
      );
    },
  },
});

export const {setFavoriteCharacter, removeFavoriteCharacter} =
  favoriteCharactersSlice.actions;
export const favoriteCharactersReducer = favoriteCharactersSlice.reducer;
