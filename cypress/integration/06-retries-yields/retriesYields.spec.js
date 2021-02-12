/// <reference types="cypress" />

describe('Retries yields', () => {
  before(() => {
    cy.task('resetDatabase');
  });

  beforeEach(() => {
    cy.visit('/');
  });
  
  it('should have todo item with text "create a list of todos"', () => {
    cy.get('[data-cy=new-todo-input]').type('create a list of todos{enter}');

    cy.get('[data-cy=todo]') // parent command
      .contains('todos') // child command (find by pertial text)
      .should('be.visible').and('contain.text', 'create a list of todos');
  
    cy.contains('todos'); // parent command
  });
  
  it('should have todo item with text "buy milk"', () => {
    cy.get('[data-cy=new-todo-input]').type('buy milk{enter}');

    cy.get('[data-cy=todo-list]') // yields ul element
      .find('li[data-cy=todo]') // yields 2 li elements
      .eq(1) // yields li element 1
      .should('contain.text', 'buy milk'); // makes assertion on element 1
  });
  
  it('should have one todo item', () => {
    cy.get('[data-cy=todo]', { timeout: 30000 }) // retries until [data-cy=todo] element is found
      .should('have.length', 2); // retries until number of yielded elements is 2
  });
});
