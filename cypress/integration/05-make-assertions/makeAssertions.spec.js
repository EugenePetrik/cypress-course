/// <reference types="cypress" />

describe('Make assertions', () => {
  beforeEach(() => {
    cy.task('resetDatabase');
    cy.visit('/');
  });

  it('opens Home page', () => {
    cy.url().should('eq', 'http://localhost:3000/');

    const baseUrl = Cypress.config().baseUrl;
    cy.log(baseUrl);   // returns http://localhost:3000

    cy.url().should('eq', `${baseUrl}/`);

    cy.title().should('eq', 'TodoMVC - Test automation in Cypress');

    cy.get('[data-cy=app-title]').should('have.text', 'todos');

    const placeholderText = 'What needs to be done?';
    cy.get('[data-cy=new-todo-input]').should('have.attr', 'placeholder', placeholderText);
  });

  it('adds one item', () => {
    cy.get('[data-cy=new-todo-input]').type('buy milk{enter}');

    cy.get('[data-cy=todo]').first().should('be.visible');
    cy.get('[data-cy=todo]').eq(0).should('be.visible');
  });
  
  it('adds two items', () => {
    // Add first todo
    cy.get('[data-cy=new-todo-input]').type('buy milk{enter}');
  
    // Add second todo
    cy.get('[data-cy=new-todo-input]').type('wash dishes{enter}');
  
    cy.get('[data-cy=todo]').should('have.length', 2);

    // its - get a property’s value on the previously yielded subject
    // Docs at https://docs.cypress.io/api/commands/its.html
    cy.get('[data-cy=todo]').its('length').should('eq', 2);
  });

  it('marks item as completed', () => {
    cy.get('[data-cy=new-todo-input]').type('buy milk{enter}');
  
    // Approach #1
    cy.contains('buy milk').should('exist');

    // Approach #2
    cy.get('[data-cy=todo]').contains('buy milk').should('exist');

    // Approach #3
    cy.contains('[data-cy=todo]', 'buy milk').should('exist');
  
    cy.get('[data-cy=todo-completed-checkbox]').click();
  
    // Approach #1
    cy.get('[data-cy=todo]').should('have.class', 'completed');
    cy.get('[data-cy=todo]').find('[data-cy=todo-label]')
      .should('have.css', 'text-decoration', 'line-through solid rgb(217, 217, 217)')
      .and('have.css', 'color', 'rgb(217, 217, 217)');

    // Approach #2
    // then - enables you to work with the subject yielded from the previous command
    // Docs at https://docs.cypress.io/api/commands/then.html
    cy.get('[data-cy=todo]').then((todo) => {
      // wrap - yield the object passed into .wrap(). If the object is a promise, yield its resolved value
      // Docs at https://docs.cypress.io/api/commands/wrap.html
      cy.wrap(todo).should('have.class', 'completed');
      cy.wrap(todo).find('[data-cy=todo-label]')
        .should('have.css', 'text-decoration', 'line-through solid rgb(217, 217, 217)')
        .and('have.css', 'color', 'rgb(217, 217, 217)');
    });
  });
});
