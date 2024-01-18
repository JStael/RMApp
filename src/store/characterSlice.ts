import {createSlice} from '@reduxjs/toolkit';
import {CharacterType} from '../api/requests.api';

interface CharacterState {
  character: CharacterType;
}

const initialState: CharacterState = {
  character: {} as CharacterType,
};
export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setCharacter: (state, action) => {
      state.character = action.payload;
      return state;
    },
  },
});

export const {setCharacter} = characterSlice.actions;
export const characterReducer = characterSlice.reducer;
