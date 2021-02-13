/// <reference types="cypress" />

describe('Using plugin', () => {
  beforeEach(() => {
    cy.task('resetDatabase');
  });

  describe('drag and drop', () => {
    beforeEach(() => {
      cy.request('POST', 'localhost:3000/todos/seed', [
          {
            'title': 'take over the world',
            'completed': false,
            'id': 1
          },
          {
            'title': 'take a nap',
            'completed': true,
            'id': 2
          }
        ]);
    
      cy.visit('/');
    });
    
    it('drags item to second position', () => {
      cy.get('[data-cy=todo]').eq(0).as('first');
      cy.get('[data-cy=todo]').eq(1).as('second');
    
      cy.get('@first').drag('@second');
    });
  });

  describe('retrying test', () => {
    beforeEach(() => {
      cy.request('POST', '/todos/seed', [
          {
            'title': 'take over the world',
            'completed': false,
            'id': Math.round(Math.random()) // random id will be 1 or 0
          }
        ]);

      cy.server();
      cy.route('GET', '/todos').as('todosList');
    
      cy.visit('/');
    });

    it.skip('checks item of todo', {
      retries: {
        runMode: 3,
        openMode: 1,
      }
    }, () => {
      cy.wait('@todosList').then((todo) => {
          // always expecting todo id to be 0 which will cause this test to fail sometimes
          expect(todo.response.body[0].id).to.eq(0); 
        });
    });
  });
});
