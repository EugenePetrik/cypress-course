/// <reference types="cypress" />

/* 
  Remember you can run single test by using it.only
  Command server() needs to be called before route() command
  Command route() needs to be called soon enough to be registered
  In most situations, you want to register your routes before you open your app
  If you called .route() command after you do .visit() you may not be able to catch that GET /todos command soon enough 
  In this challenge, it is good to start each test with 0 todo items
*/ 

describe.skip('HTTP requests spying challenge', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  
  /* 
    Challenge #1: create a test that checks that GET /todos returns status 200
  */
  it('retreives a list of todo items', () => {
    
  });
  
  /* 
    Challenge #2: create a test that checks that POST /todos returns correct todo text
  */
  it('creates a todo item', () => {
    cy.get('[data-cy=new-todo-input]').type('buy milk{enter}');
  });
  
  /* 
    Challenge #3: check POST /todos again, but this time, check request body,
    instead of response body. Try to check correct text of the todo
  */
  it('creates a todo item', () => {
    cy.get('[data-cy=new-todo-input]').type('buy milk{enter}');
  });
  
  /* 
    Challenge #4: create test that checks a request that is sent when a todo item is completed
  */
  it('completes a todo item', () => {
    cy.get('[data-cy=new-todo-input]').type('buy milk{enter}');
  
    cy.get('[data-cy=todo-completed-checkbox]').click();
  });
  
  /* 
    Challenge #5: create two todos in your app and wait for both POST /todos requests to happen
    Use one .wait() command to test them both
    Example on how to do this can be found in documentation:
    https://on.cypress.io/wait#You-can-pass-an-array-of-aliases-that-will-be-waited-on-before-resolving
  */
  it('completes a todo item', () => {
    cy.get('[data-cy=new-todo-input]').type('buy milk{enter}');
    cy.get('[data-cy=new-todo-input]').type('wash dishes{enter}');
  
    cy.wait(); // wait for both requests and make assertions on titles
  });
});
