/// <reference types="cypress" />

/* 
  Remember you can run single test by using it.only
  Most of the work on this challenge will take place in beforeEach() hook
  You need to call .server() and .route() commands before you open your app,
  or more precisely - before the request you want to route occurs
  In case of GET /todos request, it is at the moment of opening our application
*/ 

describe.skip('HTTP requests stubbing challenge', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  
  /* 
    Challenge #1: stub GET /todos request to return 0 items
    You can do that manually or using a fixture
  */
  it('has 0 todo items', () => {
    
  });
  
  /* 
    Challenge #2: create your own fixture and use it in your test
    Try to include a compled todo item too
  */
  it('has n todo items (loaded from fixture)', () => {
    
  });
  
  /* 
    Challenge #3: write a test that will check error message when server returns error with status code 500
  */
  it('shows error when adding new item', () => {
    cy.get('[data-cy=new-todo-input]').type('buy milk{enter}');
  });
  
  /* 
    Challenge #4: manipulate the POST /todos request in such a way that 
    it will create a completed todo item instead of incomplete one
  */
  it('creates completed todo item', () => {
    cy.get('[data-cy=new-todo-input]').type('buy milk{enter}');
  });
});
