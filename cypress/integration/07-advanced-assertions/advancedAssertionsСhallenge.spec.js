/// <reference types="cypress" />

/* 
  Remember you can run single test by using it.only
  I encourage you to use cypress documentation, especially https://on.cypress.io/assertions
*/ 

describe.skip('Advanced assertions challenge', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  
  /*
    Challenge #1: check the text using .then() command
  */
  it('checks a text todo item', () => {
    cy.get('[data-cy=todo]');
  });
  
  /*
    Challenge #2: check the whole todo list using .then() command
    Make sure you have some todo items in the list before you start this test
  */
  it('сhecks a texts of all todo items', () => {
    cy.get('[data-cy=todo]');
  });
  
  /* 
    Challenge #3: check texts of only first and last todo item using .then()  command
    Make sure you have some todo items in the list before you start this test
  */
  it('checks a texts of first and last todo items', () => {
    cy.get('[data-cy=todo]');
  });
  
  /* 
    Challenge #4: try to look more into why the test is failing and what can we do to make it pass   
    Make sure you have a todo item with the text "wash dishes" but it is not in the first position
  */
  it('has first todo item with text "wash dishes"', () => {
    cy.get('[data-cy=todo]')
      .eq(0)
      .should('contain.text', 'wash dishes');
  });
  
  /* 
    Challenge #5: check texts of two items in todo list
    Start test with no todos in list and add them while test is running
    Use this test to examine how using .should() command works when using function
  */
  it('have two todo items with particular texts', () => {
    cy.get('[data-cy=todo]', { timeout: 30000 })
      // eslint-disable-next-line no-unused-vars
      .should((items) => {
        // check item 1
        // check item 2
      });
  });
});
