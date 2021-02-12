/// <reference types="cypress" />

describe('HTTP requests stubbing', () => {
  before(() => {
    cy.task('resetDatabase');
  });

  beforeEach(() => {
    cy.server();

    cy.route('GET', '/todos', 'fx:three-items').as('todosList');

    cy.visit('/');
  });

  it('has zero items in list', () => {
    cy.wait('@todosList');

    cy.get('[data-cy=todo]').should('have.length', 3);
  });

  it('has stubbed items in todo list', () => {
    cy.wait('@todosList').should((routes) => {
      expect(routes.status).to.eq(200);
      expect(routes.method).to.eq('GET');
      expect(routes.response.body).to.have.length(3);

      const responseBodyLength = routes.response.body.length;
      const responseBody = routes.response.body;

      for (let i = 0; i < responseBodyLength; i++ ) {
        expect(Object.getOwnPropertyNames(responseBody[i])).to.eql([ 'title', 'completed', 'id' ]);
      }
    });
  });

  it('shows error when adding new item', () => {
    cy.route({
      method: 'POST',
      url: '/todos',
      response: [],
      status: 500,
    }).as('todoCreate');

    cy.get('[data-cy=new-todo-input]').type('wash dishes{enter}');

    cy.wait('@todoCreate');

    cy.get('[data-cy=error-message]').should('be.visible')
      .and('contain.text', 'Sorry. There was an error creating todo item.');
  });

  it('creates completed todo item', () => {
    const todoTitle = 'buy milk';

    cy.route({
      method: 'POST',
      url: '/todos',
      response: {
        'completed': true,
        'id': 10,
        'title': todoTitle,
      },
      status: 201,
    }).as('todoCreate');

    cy.get('[data-cy=new-todo-input]').type(`${todoTitle}{enter}`);

    cy.wait('@todoCreate');

    cy.get('[data-cy=todo]').should('have.length', 4).then((todoItem) => {
      cy.wrap(todoItem).first().should('contain.text', 'take over the world');
      cy.wrap(todoItem).eq(1).should('have.class', 'completed').and('contain.text', 'take a nap');
      cy.wrap(todoItem).eq(2).should('contain.text', 'create world peace');
      cy.wrap(todoItem).last().should('have.class', 'completed').and('contain.text', todoTitle);
    });
  });
});
