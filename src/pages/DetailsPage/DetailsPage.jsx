import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../styles/Pages.css';
import Header from '../../components/Header';

function DetailsPage() {
	const pokemons = useSelector(({ pokemons }) => pokemons.list);
	const favorites = useSelector(({ favorites }) => favorites);

	const params = useParams();

	const pokemon = pokemons.find((element) => {
		return element.name === params.name;
	});

	return (
		<div className='page-wrapper'>
			<Header favorites={favorites} />
			<div className='page-container'>
				<p>Details</p>
				{pokemon ? (
					<h1>{pokemon.name}</h1>
				) : (
					<h1>Pokemon não encontrado</h1>
				)}
				<Link to="/">Voltar</Link>
			</div>
		</div>
	);
}

export default DetailsPage;
