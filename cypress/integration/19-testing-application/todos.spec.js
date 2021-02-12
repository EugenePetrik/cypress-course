/// <reference types="cypress" />

import { toDoItemBuilder } from '../../support/generateData';

describe('Todos', () => {
  const toDoItemName1 = toDoItemBuilder().toDoItemName;
  const toDoItemName2 = toDoItemBuilder().toDoItemName;

  beforeEach(() => {
    cy.request('DELETE', '/todos');

    cy.visit('/');
  });

  it('adds two items', () => {
    cy.addTodo(toDoItemName1);
    cy.addTodo(toDoItemName2);

    cy.get('[data-cy=todo]').should('have.length', 2);
  });
  
  it('marks item as completed', () => {
    cy.addTodo(toDoItemName1);
  
    cy.contains(toDoItemName1).should('exist');
  
    cy.get('[data-cy=todo-completed-checkbox]').click();
  
    cy.get('[data-cy=todo]').should('have.class', 'completed');
  });
  
  it('have no items', () => {
    cy.get('[data-cy=todo]').should('have.length', 0);
  });
});
