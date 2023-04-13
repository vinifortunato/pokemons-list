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

describe('<List />', () => {
	it ('should render items correctly', () => {
		cy.mount(<List items={mockedItems} />);
		cy.get('[data-testid=\'list\']').should('be.visible');
		cy.get('[data-testid="list-item-bulbasaur"]').should('be.visible');
		cy.get('[data-testid="list-item-ivysaur"]').should('be.visible');
	});

	it ('should render favorites correctly', () => {
		cy.mount(<List items={mockedItems} favorites={['ivysaur']} />);
		cy.get('[data-testid=\'list\']').should('be.visible');
		cy.get('[data-testid="heart-bulbasaur"]').should('not.have.class', 'heart-selected');
		cy.get('[data-testid="heart-ivysaur"]').should('have.class', 'heart-selected');
	});
});
