/// <reference types="cypress" />

describe('Advanced assertions (BDD style assertions)', () => {
  before(() => {
    cy.task('resetDatabase');
  });

  beforeEach(() => {
    cy.visit('/');
  });
  
  it('checks text of todo item', () => {
    cy.get('[data-cy=new-todo-input]').type('wash dishes{enter}');

    // then - enables you to work with the subject yielded from the previous command
    // Docs at https://docs.cypress.io/api/commands/then.html
    cy.get('[data-cy=todo]').then((items) => {
        expect(items).to.contain.text('wash dishes');
        // wrap yields the object passed into .wrap(). If the object is a promise, yield its resolved value
        // Docs at https://docs.cypress.io/api/commands/wrap.html
        cy.wrap(items).should('contain.text', 'wash dishes');
      });
  });
  
  it('should check texts of todo items', () => {
    cy.get('[data-cy=new-todo-input]').type('buy milk{enter}');
    cy.get('[data-cy=new-todo-input]').type('create todos list{enter}');

    cy.get('[data-cy=todo]').should('have.length', 3).then((items) => {
        expect(items[0]).to.contain.text('wash dishes');
        expect(items[1]).to.contain.text('buy milk');
        expect(items[2]).to.contain.text('create todos list');
      });
  });
  
  it('should have todo item with text "wash dishes" on first position (solution 1)', () => {
    cy.get('[data-cy=todo]', { timeout: 30000 })
      .should('have.length', 3)
      .first()
      .contains('wash dishes');
  });
  
  it('should have todo item with text "wash dishes" on first position (solution 2)', () => {
    cy.get('[data-cy=todo]', { timeout: 30000 })
      // then command does not have retry logic
      .should((items) => {
        expect(items[0]).to.contain.text('wash dishes');
        expect(items[1]).to.contain.text('buy milk');
        expect(items[2]).to.contain.text('create todos list');
      });
  });
});
