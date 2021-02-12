/// <reference types="cypress" />

describe('Select elements', () => {
  before(() => {
    cy.task('resetDatabase');
  });

  it('gets the same input element using different selectors', () => {
    cy.visit('/');

    // select via tag
    cy.get('input');

    // select via id
    cy.get('#add-todo');

    // select via class
    cy.get('.new-todo');

    // select via 'placeholder' attribute
    cy.get('[placeholder="What needs to be done?"]');

    // select via 'data-cy' attribute
    cy.get('[data-cy=new-todo-input]');

    // select via relation
    cy.get('header input');
  });
});
