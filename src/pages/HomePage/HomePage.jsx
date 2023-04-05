import { useCallback, useContext, useEffect, useState } from 'react';
import List from '../../components/List/List';
import { AppContext } from '../../context';

function HomePage() {
	const appContext = useContext(AppContext);
	const [nextPage, setNextPage] = useState(null);

	const getTargets = useCallback(async (url) => {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	}, []);

	const getDetails = useCallback(async (targets) => {
		const promises = targets.map((target) => {
			return fetch(target.url).then((response) => response.json());
		});
		return await Promise.all(promises);
	}, []);

	const getPokemons = useCallback(async () => {
		if (appContext.pokemons.length > 0) {
			return;
		}
		console.log('getPokemons');
		try {
			const { results, next } = await getTargets('https://pokeapi.co/api/v2/pokemon?limit=30');
			const details = await getDetails(results);
			const detailsMap = details.map(({ id, name, sprites }) => {
				return { id, name, sprites };
			});
			appContext.setPokemonsList(detailsMap);
			setNextPage(next);
		} catch(error) {
			console.error(error);
		}
	}, [appContext, getDetails, getTargets]);

	useEffect(() => {
		getPokemons();
	}, [getPokemons]);

	const loadMore = useCallback(async () => {
		try {
			const { results, next } = await getTargets(nextPage);
			const details = await getDetails(results);
			appContext.setPokemonsList([...appContext.pokemons, ...details]);
			setNextPage(next);
		} catch(error) {
			console.error(error);
		}

	}, [appContext, getDetails, getTargets, nextPage]);

	const handleItemFavorite = useCallback((value) => {
		const targetName = value.name;
		if (appContext.favorites.includes(targetName)) {
			appContext.removeFavorite(targetName);
		} else {
			appContext.addFavorite(targetName);
		}
	}, [appContext]);

  return (
    <div>
      <p>App</p>
			<List
				items={appContext.pokemons}
				favorites={appContext.favorites}
				onItemFavorite={handleItemFavorite}
			/>
			<button onClick={loadMore}>Carregar mais</button>
    </div>
  );
}

export default HomePage;
