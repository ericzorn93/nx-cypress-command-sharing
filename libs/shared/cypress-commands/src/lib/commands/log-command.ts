import { NxCypressCommandDefinition } from '../cypress-command-definition';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Chainable<Subject> {
      logMessage: (message: string) => void;
    }
  }
}

export const logMessageCommand: NxCypressCommandDefinition = {
  name: 'logMessage',
  command: (message: string) => {
    return cy.log(`NX: ${message}`);
  },
};
