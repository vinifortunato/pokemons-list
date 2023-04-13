import List from './List';

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

export default {
  title: 'Components/List',
  component: List,
  tags: ['autodocs'],
  argTypes: {
		items: {
			control: 'object'
		},
		favorites: {
			control: 'object'
		},
		onItemFavorite: {
			action: 'onItemFavorite'
		},
		onItemDetailsClick: {
			action: 'onItemDetailsClick'
		}
  },
};

export const Default = {
  args: {
		items: mockedItems,
		favorites: [mockedItems[0].name]
  },
};


