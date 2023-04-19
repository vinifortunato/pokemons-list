import './Header.css';
import pokeballImg from '../../assets/pokeball.svg';

function Header({ favorites = [] }) {
	return (
		<div className="header-wrapper">
			<div className='header-menu-container'>
			</div>
			<div className='header-logo-container'>
				<p>Pokemons List</p>
			</div>
			<div className='header-utils-container'>
			  <p className='header-utils-pokeball-text'>{favorites.length}</p>
				<div className='header-icon-adapter'>
					<img className='header-icon' src={pokeballImg} alt="Pokeball" />
				</div>
			</div>
		</div>
	);
}

export default Header;
