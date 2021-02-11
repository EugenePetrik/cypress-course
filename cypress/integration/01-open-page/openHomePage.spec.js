/// <reference types="cypress" />

describe('Open Home page', () => {
  it('visits todoMVC app', () => {
    cy.visit('http://localhost:3000');

    // cy.visit('/');
  });
});
