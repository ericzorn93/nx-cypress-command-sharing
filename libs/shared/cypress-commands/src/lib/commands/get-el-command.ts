import { NxCypressCommandDefinition } from '../cypress-command-definition';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Chainable<Subject> {
      getEl: (identifier: string) => Chainable<Element>;
    }
  }
}

export const getElCommand: NxCypressCommandDefinition = {
  name: 'getEl',
  command: (identifier) => {
    return cy.get(`[data-testid="${identifier}"]`);
  },
};
