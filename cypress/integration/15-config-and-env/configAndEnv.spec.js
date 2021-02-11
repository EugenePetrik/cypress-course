/// <reference types="cypress" />

import { toDoItemBuilder } from '../../support/generateData';

describe('Config and env', () => {
  const { toDoItemName, toDoItemCompleted } = toDoItemBuilder();

  before(() => {
    cy.task('resetDatabase');
  });

  it('creates a todo item via api', () => {
    cy.request('POST', '/todos', {
        title: toDoItemName,
        completed: toDoItemCompleted,
      }).then( item => {
        Cypress.env('todoItem', item.body);
      });
  
    cy.visit('/');
  });
});
