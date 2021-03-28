/// <reference types="cypress" />

describe('Control application DOM', () => {
  before(() => {
    cy.task('resetDatabase');
  });

  beforeEach(() => {
    cy.visit('/');
  });
  
  it('has a delete icon (solution 1)', () => {
    cy.get('[data-cy=new-todo-input]').type('wash dishes{enter}');

    cy.get('[data-cy=todo]')
      // trigger an event on a DOM element
      // Docs at https://docs.cypress.io/api/commands/trigger.html
      .trigger('mouseover');
      
    cy.get('[data-cy=remove-todo-button]').should('be.visible');
  
    cy.get('[data-cy=todo]')
      .trigger('mouseout');
  });
  
  it('has a delete icon (solution 2)', () => {
    cy.get('[data-cy=remove-todo-button]')
      // invoke a function on the previously yielded subject
      // Docs at https://docs.cypress.io/api/commands/invoke.html
      .invoke('show')
      .should('be.visible');
  });
  
  it('has a link to application author', () => {
    cy.contains('[data-cy=evan-you-link]', 'Evan You')
      .invoke('attr', 'href')
      .should('include', 'http://evanyou.me');

    cy.get('[data-cy=evan-you-link]').then(($link) => {
      const evanYouUrl = $link.attr('href');
      expect(evanYouUrl).to.eq('http://evanyou.me');
    });
  });

  it('removes target attribute from a link to application author', () => {
    cy.contains('[data-cy=evan-you-link]', 'Evan You')
      .invoke('removeAttr', 'target');
  });
});
