import { configureStore } from '@reduxjs/toolkit';
import { favoritesReducer } from './favorites';
import { pokemonsReducer } from './pokemons';

const store = configureStore({
	reducer: {
		favorites: favoritesReducer,
		pokemons: pokemonsReducer
	}
});

store.subscribe(() => {
	const state = store.getState();
	const data = JSON.stringify(state);
	localStorage.setItem('pokemons-list', data);
});

export default store;
