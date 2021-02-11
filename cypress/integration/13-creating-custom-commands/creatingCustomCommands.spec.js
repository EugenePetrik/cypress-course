/// <reference types="cypress" />

import { toDoItemBuilder } from '../../support/generateData';

describe('Creating custom commands', () => {
  // const { toDoItemName } = toDoItemBuilder();

  const toDoItemName1 = toDoItemBuilder().toDoItemName;
  const toDoItemName2 = toDoItemBuilder().toDoItemName;
  const toDoItemName3 = toDoItemBuilder().toDoItemName;
  const toDoItemName4 = toDoItemBuilder().toDoItemName;

  before(() => {
    cy.task('resetDatabase');
  });

  beforeEach(() => {
    cy.request('DELETE', '/todos');
  
    cy.visit('/');
  });
  
  it('creates 4 todos', () => {
    // https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/

    // cy.addTodo(toDoItemName);
    // cy.addTodo(toDoItemName);
    // cy.addTodo(toDoItemName);
    // cy.addTodo(toDoItemName);

    cy.addTodo(toDoItemName1);
    cy.addTodo(toDoItemName2);
    cy.addTodo(toDoItemName3);
    cy.addTodo(toDoItemName4);
  });
});
