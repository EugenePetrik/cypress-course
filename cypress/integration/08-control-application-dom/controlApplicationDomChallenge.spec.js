/// <reference types="cypress" />

/* 
  Remember you can run single test by using it.only
  Some of these test require you to have some todo items already in app
  You can probably figure out which these are
*/ 

describe.skip('Control application DOM challenge', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  
  /* 
    Challenge #1: make the ".destroy" element disappear
  */
  it('have delete icon', () => {
    cy.get('[data-cy=remove-todo-button]')
      .invoke('show');
      
    cy.get('[data-cy=remove-todo-button]')
      .should('be.visible');
  
    // add code here
  
    cy.get('[data-cy=remove-todo-button]')
      .should('not.be.visible');
  });
  
  /* 
    Challenge #2: try to delete a todo item using .trigger() command
    Use DevTools to look into event listeners on "[data-cy=todo]" item
  */
  it('deletes a todo item', () => {
    cy.get('[data-cy=todo]').find('[data-cy=remove-todo-button]').trigger('click');
      
    cy.get('[data-cy=remove-todo-button]').should('not.be.visible');
  });
  
  /* 
    Challenge #3: check item as completed, without actually clicking on checkbox
    you can do this by adding class ".completed" to a todo item, look into documentation on how to do it
   */
  it('completes a todo item', () => {
    cy.get('[data-cy=todo]')
      .invoke('addClass', 'completed');
  });
  
  /* 
    Challenge #4: you can use invoke to add text into the input field, 
    without using the command .type() all you need to do is to invoke value of the "[data-cy=new-todo-input]" element
  */
  it('add text into new todo field', () => {
    cy.get('[data-cy=new-todo-input]')
      .invoke('val', 'new todo');
  });
});
