import { useCallback, useMemo } from 'react';
import Heart from '../Heart';
import './List.css';

function List({ items = [], favorites = [], onItemFavorite, onItemDetailsClick }) {
	const handleOnHeartClick = useCallback((value) => {
		onItemFavorite && onItemFavorite(value);
	}, [onItemFavorite]);

	const handleDetailsClick = useCallback((pokemon) => {
		onItemDetailsClick && onItemDetailsClick(pokemon);
	}, [onItemDetailsClick]);

	const itemsMap = useMemo(() => {
		return items.map((pokemon) => {
			const isFavorite = favorites.includes(pokemon.name);
			const sprite = pokemon.sprite;
			return (
				<div key={pokemon.name} className="list-item" data-testid={`list-item-${pokemon.name}`}>
					<div className="list-item-heart-adapter">
						<Heart
							selected={isFavorite}
							onClick={() => handleOnHeartClick(pokemon)}
							testId={`heart-${pokemon.name}`}
						/>
					</div>
					<div className="list-item-image-wrapper">
						<img alt={pokemon.name} src={sprite} className="list-item-image" />
					</div>
					<button data-testid={`list-item-${pokemon.name}-destails-button`} onClick={() => handleDetailsClick(pokemon)}>{pokemon.name}</button>
				</div>
			);
		});
	}, [items, handleOnHeartClick, handleDetailsClick, favorites]);

	return (
		<div className="list-wrapper" data-testid="list">
			{itemsMap}
		</div>
	);
}

export default List;
