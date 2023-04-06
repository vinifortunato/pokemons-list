import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	nextPage: null,
	list: []
};

const pokemonsSlice = createSlice({
	name: 'pokemons',
	initialState,
	reducers: {
		init: (state, action) => {
			return action.payload;
		},
		set: (state, action) => {
			return action.payload;
		}
	}
});

export const actions = pokemonsSlice.actions;
export const reducer = pokemonsSlice.reducer;

export default pokemonsSlice;
