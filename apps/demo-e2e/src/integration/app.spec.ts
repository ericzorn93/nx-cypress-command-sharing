describe('demo', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.getEl('message').should('contain', '❤️ Cypress');
    cy.logMessage('Done 🎉');
  });
});
