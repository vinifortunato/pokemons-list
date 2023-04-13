describe('Favorites flow', () => {

	beforeEach(() => {
		cy.visit('/');
	});

  it('should render the list correctly', () => {
		cy.get('[data-testid=\'list\']').should('be.visible');
  });

	it ('should render items correctly', () => {
		cy.get('[data-testid="list-item-bulbasaur"]').should('be.visible');
		cy.get('[data-testid="list-item-ivysaur"]').should('be.visible');
	});

	it ('should add/remove items to favorite correctly', () => {
		// bulbasaur
		cy.get('[data-testid="heart-bulbasaur"]').should('not.have.class', 'heart-selected');
		cy.get('[data-testid="heart-bulbasaur"]').click();
		cy.get('[data-testid="heart-bulbasaur"]').should('have.class', 'heart-selected');
		// ivysaur
		cy.get('[data-testid="heart-ivysaur"]').should('not.have.class', 'heart-selected');
		cy.get('[data-testid="heart-ivysaur"]').click();
		cy.get('[data-testid="heart-ivysaur"]').should('have.class', 'heart-selected');
		cy.get('[data-testid="heart-ivysaur"]').click();
		cy.get('[data-testid="heart-ivysaur"]').should('not.have.class', 'heart-selected');
	});
});
