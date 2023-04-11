import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function DetailsPage() {
	const pokemons = useSelector(({ pokemons }) => pokemons.list);
	const params = useParams();

	const pokemon = pokemons.find((element) => {
		return element.name === params.name;
	});

	return (
		<div>
			<p>Details</p>
			{pokemon ? (
				<h1>{pokemon.name}</h1>
			) : (
				<h1>Pokemon não encontrado</h1>
			)}
			<Link to="/">Voltar</Link>
		</div>
	);
}

export default DetailsPage;
