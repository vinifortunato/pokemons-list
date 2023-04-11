import { render, screen } from '@testing-library/react';
import List from './';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const mockedItems = [
	{
		name: 'bulbasaur',
		sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
	},
	{
		name: 'ivysaur',
		sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png'
	},
];

describe('<List />', () => {
	it('should render correctly', () => {
		render(<List />);
		expect(screen.getByTestId('list')).toBeInTheDocument();
	});

	it('should render items correctly', () => {
		render(
			<BrowserRouter>
				<List items={mockedItems} />
			</BrowserRouter>
		);

		expect(screen.getByTestId('list')).toBeInTheDocument();
		expect(screen.getByTestId('list-item-bulbasaur')).toBeInTheDocument();
		expect(screen.getByTestId('list-item-ivysaur')).toBeInTheDocument();
	});

	it('should call onItemFavorite correctly', async () => {
		const mockedCallback = jest.fn();

		render(
			<BrowserRouter>
				<List items={mockedItems} onItemFavorite={mockedCallback} />
			</BrowserRouter>
		);

		expect(screen.getByTestId('list')).toBeInTheDocument();
		expect(screen.getByTestId('list-item-bulbasaur')).toBeInTheDocument();
		expect(screen.getByTestId('list-item-ivysaur')).toBeInTheDocument();

		await userEvent.click(screen.getByTestId('heart-ivysaur'));

		expect(mockedCallback).toBeCalledTimes(1);
		expect(mockedCallback).toBeCalledWith(mockedItems[1]);
	});
});
