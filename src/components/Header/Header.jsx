import './Header.css';
import pokeballImg from '../../assets/pokeball.svg';
import { useCallback, useMemo } from 'react';
import { useState } from 'react';

function Header({ favorites = [] }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleFavoritesClick = useCallback(() => {
		setIsOpen(true);
	}, []);

	const toggleFavorites = useCallback((value) => {
		setIsOpen(value);
	}, []);

	const favoritesMap = useMemo(() => {
		return favorites.map((element) => {
			return (
				<div className='header-favorites-list-item'>
					<div className='header-favorites-list-item-image-adapter'>
						<img alt={element.name} src={element.sprite} className='header-favorites-list-item-image' />
					</div>
					<p>{element.name}</p>
				</div>
			);
		});
	}, [favorites]);

	return (
		<>
			<div className="header-wrapper">
				<div className='header-menu-container'>
				</div>
				<div className='header-logo-container'>
					<p>Pokemons List</p>
				</div>
				<div className='header-utils-container'>
					<p className='header-utils-pokeball-text' onClick={handleFavoritesClick}>{favorites.length}</p>
					<div className='header-icon-adapter' onClick={handleFavoritesClick}>
						<img className='header-icon' src={pokeballImg} alt="Pokeball" />
					</div>
				</div>
			</div>
			<div className={`header-favorites-wrapper ${isOpen ? 'header-favorites-open' : ''}`}>
				<button onClick={() => toggleFavorites(false)}>Fechar</button>
				<div className='header-favorites-list'>
					{favoritesMap}
				</div>
			</div>
		</>
	);
}

export default Header;
