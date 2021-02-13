/// <reference types="cypress" />

import { toDoItemBuilder } from '../../support/generateData';

describe('HTTP requests sending', () => {
  const { toDoItemName: name } = toDoItemBuilder();

  describe('creates todo', () => {
    before(() => {
      cy.task('resetDatabase');
    });
  
    it('creates a todo item via api', () => {
      cy.request('POST', '/todos', {
          title: name,
          completed: false
        });
    
      cy.visit('/');
  
      cy.get('[data-cy=todo]').should('contain.text', name);
    });
  });
      
  describe('resetting app state before each test', () => {
    beforeEach( () => {
      cy.request('DELETE', '/todos');
  
      cy.visit('/');
    });
  
    it('creates a todo item', () => {
      cy.get('[data-cy=new-todo-input]').type('buy milk{enter}');
  
      cy.get('[data-cy=todo]').should('have.length', 1);
    });
  
    it('completes a todo item', () => {
      cy.get('[data-cy=new-todo-input]').type('wash dishes{enter}');
  
      cy.get('[data-cy=todo-completed-checkbox]').click();
    });
  });

  describe.skip('sends request to petstore swagger', () => {
    it('should receive pet by id', () => {
      cy.request({
        method: 'GET',
        url: 'https://petstore.swagger.io/v2/pet/1',
        headers: {
          accept: 'application/json',
        },
      }).then((response) => {
        const body = JSON.parse(JSON.stringify(response.body));
  
        cy.log(body);   // {id: 1, category: {…}, name: "doggie", photoUrls: Array(1), tags: Array(1), …}
  
        expect(body.id).to.eq(1);
        expect(body.name).to.eq('Schnappi');
        expect(body.tags[0].name).to.eq('Bites');
  
        cy.log(Object.getOwnPropertyNames(body));   // ["id", "category", "name", "photoUrls", "tags", "status"]
      });
    });
  });
});
