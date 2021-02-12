/// <reference types="cypress" />

describe('Interacting with elements', () => {
  before(() => {
    cy.task('resetDatabase');
  });

  beforeEach(() => {
    cy.visit('/');
  });

  it('adds a new todo item', () => {
    // Docs at https://docs.cypress.io/api/commands/type.html
    cy.get('[data-cy=new-todo-input]').type('buy milk{enter}');
  });
  
  it('completes todo item', () => {
    cy.get('[data-cy=todo-completed-checkbox]').click();
  });
  
  it('deletes todo item', () => {
    cy.get('[data-cy=remove-todo-button]').click({ force: true });
  });
});
