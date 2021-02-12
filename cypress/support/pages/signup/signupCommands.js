Cypress.Commands.add('signup', ({ email, password }) => {
  cy.get('[data-cy=email-input]').type(email);
  cy.get('[data-cy=password-input]').type(password, { log: false });
  cy.get('[data-cy=signup-button]').click();
});
