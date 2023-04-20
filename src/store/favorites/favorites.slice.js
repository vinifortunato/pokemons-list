import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		init: (state, action) => {
			return action.payload;
		},
		add: (state, action) => {
			const item = action.payload;
			return [...state, item];
		},
		remove: (state, action) => {
			const filtered = state.filter((element) => element.name !== action.payload.name);
			return filtered;
		}
	}
});

export const actions = favoritesSlice.actions;
export const reducer = favoritesSlice.reducer;

export default favoritesSlice;
