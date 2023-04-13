import Heart from './Heart';

describe('<Heart />', () => {
	it('should render correctly', () => {
		cy.mount(<Heart />);
		cy.get('[data-testid=\'heart\']').should('be.visible');
	});

	it('should render correctly when selected', () => {
		cy.mount(<Heart selected />);
		cy.get('[data-testid=\'heart\']').should('be.visible');
		cy.get('[data-testid=\'heart\']').should('have.class', 'heart-selected');
	});
});
