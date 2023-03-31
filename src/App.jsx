import { useCallback, useEffect, useState } from 'react';
import List from './components/List';

function App() {
	const [pokemons, setPokemons] = useState([]);
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
		try {
			const { results, next } = await getTargets('https://pokeapi.co/api/v2/pokemon?limit=30');
			const details = await getDetails(results);
			setPokemons(details);
			setNextPage(next);
		} catch(error) {
			console.error(error);
		}
	}, [getDetails, getTargets]);

	useEffect(() => {
		getPokemons();
	}, [getPokemons]);

	const loadMore = useCallback(async () => {
		try {
			const { results, next } = await getTargets(nextPage);
			const details = await getDetails(results);
			setPokemons([...pokemons, ...details]);
			setNextPage(next);
		} catch(error) {
			console.error(error);
		}

	}, [getDetails, getTargets, nextPage, pokemons]);

  return (
    <div>
      <p>App</p>
			<List items={pokemons} />

			<button onClick={loadMore}>Carregar mais</button>
    </div>
  );
}

export default App;
