/// <reference types="cypress" />

describe('Running task', () => {
  it('resets database before opening app', () => {
    cy.task('resetDatabase');

    cy.visit('/');
  });
});
