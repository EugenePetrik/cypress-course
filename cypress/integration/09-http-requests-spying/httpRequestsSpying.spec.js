/// <reference types="cypress" />

describe('HTTP requests spying', () => {
  beforeEach(() => {
    cy.task('resetDatabase');

    cy.server();
    cy.route('GET', '/todos').as('getTodos');
    cy.route('POST', '/todos').as('createTodo');
  
    cy.visit('/');
  });
  
  it('has no elements', () => {
    cy.wait('@getTodos').its('status').should('eq', 200);
  
    cy.get('[data-cy=todo]').should('have.length', 0);
  });
  
  it('adds an item to the list', () => {
    cy.get('[data-cy=new-todo-input]').type('wash dishes{enter}');
  
    cy.wait('@createTodo').then((todoItem) => {
        expect(todoItem.status).to.eq(201);
        expect(todoItem.statusMessage).to.eq('201 (Created)');
        expect(todoItem.method).to.eq('POST');

        expect(todoItem.response.headers['content-type']).to.eq('application/json; charset=utf-8');

        expect(todoItem.response.body.id).to.have.length.greaterThan(0);
        expect(todoItem.response.body.id).to.be.an('string');

        expect(todoItem.response.body.title).to.eq('wash dishes');
        expect(todoItem.response.body.completed).to.be.false;
      });
  });

  it('completes HTTP responses', () => {
    cy.get('[data-cy=new-todo-input]').type('buy milk{enter}');
    cy.get('[data-cy=new-todo-input]').type('wash dishes{enter}');
  
    cy.wait(['@createTodo', '@createTodo']).then((routes) => {
      expect(routes).to.have.length(2);

      expect(routes[0].status).to.equal(201);
      expect(routes[1].status).to.equal(201);

      const firstTodo = routes[0].response.body.title.trim();
      const secondTodo = routes[1].response.body.title.trim();

      cy.log(firstTodo);
      cy.log(secondTodo);

      cy.get('[data-cy=todo]').should('have.length', 2).then((todoItem) => {
        cy.wrap(todoItem).first().should('contain.text', firstTodo);
        cy.wrap(todoItem).last().should('contain.text', secondTodo);
      });
    });
  });
});
