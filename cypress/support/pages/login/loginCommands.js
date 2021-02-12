Cypress.Commands.add('login', ({ email, password }) => {
  cy.get('[data-cy=email-input]').type(email);
  cy.get('[data-cy=password-input]').type(password, { log: false });
  cy.get('[data-cy=login-button]').click();
});
