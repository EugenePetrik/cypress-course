/// <reference types="cypress" />

import { toDoItemBuilder } from '../../support/generateData';

describe('Headless mode', () => {
  const { toDoItemName: title } = toDoItemBuilder();

  before(() => {
    cy.task('resetDatabase');

    cy.request('POST', '/todos/seed', [
        {
          title,
          completed: false,
          id: 1
        }
      ]);
  
    cy.visit('/');
  });
  
  it('should pass', () => {
    cy.get('[data-cy=todo]').should('have.length', 1).and('contain.text', title);
  });
  
  it('should fail', {
    retries: {
      runMode: 2,
      openMode: 1,
    }
  }, () => {
    cy.get('[data-cy=todo]').should('have.length', 2).and('contain.text', title);
  });
});
