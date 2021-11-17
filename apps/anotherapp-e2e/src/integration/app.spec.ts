describe('anotherapp', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.getEl('message').should('contain', '❤️ Cypress');
  });
});
