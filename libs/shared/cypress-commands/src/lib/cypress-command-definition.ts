export interface NxCypressCommandDefinition {
  name: string;
  options?: Cypress.CommandOptions;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  command: (...args: any[]) => Cypress.CanReturnChainable;
}
