Cypress.Commands.add('addTodo', (title) => {
  cy.get('[data-cy=new-todo-input]').type(`${title}{enter}`);
});
