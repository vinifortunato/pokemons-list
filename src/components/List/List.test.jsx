import { render, screen } from '@testing-library/react';
import List from './';
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
		render(<List items={mockedItems} />);

		expect(screen.getByTestId('list')).toBeInTheDocument();
		expect(screen.getByTestId('list-item-bulbasaur')).toBeInTheDocument();
		expect(screen.getByTestId('list-item-ivysaur')).toBeInTheDocument();
	});

	it('should call onItemFavorite correctly', async () => {
		const mockedCallback = jest.fn();

		render(<List items={mockedItems} onItemFavorite={mockedCallback} />);

		expect(screen.getByTestId('list')).toBeInTheDocument();
		expect(screen.getByTestId('list-item-bulbasaur')).toBeInTheDocument();
		expect(screen.getByTestId('list-item-ivysaur')).toBeInTheDocument();

		await userEvent.click(screen.getByTestId('heart-ivysaur'));

		expect(mockedCallback).toBeCalledTimes(1);
		expect(mockedCallback).toBeCalledWith(mockedItems[1]);
	});

	it('should call onItemDetailsClick correctly', async () => {
		const mockedCallback = jest.fn();

		render(<List items={mockedItems} onItemDetailsClick={mockedCallback} />);

		expect(screen.getByTestId('list')).toBeInTheDocument();
		expect(screen.getByTestId('list-item-bulbasaur')).toBeInTheDocument();
		expect(screen.getByTestId('list-item-ivysaur')).toBeInTheDocument();

		await userEvent.click(screen.getByTestId('list-item-ivysaur-destails-button'));

		expect(mockedCallback).toBeCalledTimes(1);
		expect(mockedCallback).toBeCalledWith(mockedItems[1]);
	});
});
