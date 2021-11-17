import { NxCypressCommandDefinition } from './cypress-command-definition';

export function registerCommands(
  availableCommands: NxCypressCommandDefinition[]
) {
  availableCommands.forEach((commandDefinition) => {
    if (commandDefinition.options) {
      Cypress.Commands.add(
        commandDefinition.name,
        commandDefinition.options,
        commandDefinition.command
      );
    } else {
      Cypress.Commands.add(commandDefinition.name, commandDefinition.command);
    }
  });
}
