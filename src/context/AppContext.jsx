import { useCallback, useEffect, useState } from 'react';
import { createContext } from 'react';

export const AppContext = createContext({});

function getInitialContext() {
	const localData = localStorage.getItem('pokemons-list');
	if (!localData) {
		return {};
	}
	return JSON.parse(localData);
}

export function AppProvider({ children }) {
	const initialContext = getInitialContext();

	const [pokemons, setPokemons] = useState(initialContext.pokemons);
	const [favorites, setFavorites] = useState(initialContext.favorites);

	const setPokemonsList = useCallback((pokemons) => {
		setPokemons(pokemons);
	}, []);

	const addFavorite = useCallback((name) => {
		setFavorites([...favorites, name]);
	}, [favorites]);

	const removeFavorite = useCallback((name) => {
		const filtered = favorites.filter((element) => {
			return element !== name;
		});
		setFavorites(filtered);
	}, [favorites]);

	useEffect(() => {
		const data = {
			pokemons,
			favorites
		};
		const parsedData = JSON.stringify(data);
		localStorage.setItem('pokemons-list', parsedData);

	}, [pokemons, favorites]);

	return (
		<AppContext.Provider value={{ pokemons, favorites, setPokemonsList, addFavorite, removeFavorite  }}>
			{children}
		</AppContext.Provider>
	);

}

