/// <reference types="cypress" />

/* 
  Remember you can run single test by using it.only
  .visit() command is not included in these tests
  Before each of these tests, all todos are deleted
  There is a LOT you can do with .request() command
  Read about it in documentation https://on.cypress.io/request
*/ 

describe.skip('HTTP requests sending challenge', () => {
  beforeEach(() => {
    cy.request('DELETE', '/todos');
  });
  
  /* 
    Challenge #1: create a new todo via request and open the app to check that the todo item was requested
  */
  it('creates a todo via api', () => {
    
  });
  
  /* 
    Challenge #2: create a new todo via request, but make the state of the todo to be completed
    You can just use POST /todos request to do that
    After you open the app, verify that the todo is there and it is completed
  */
  it('creates a completed todo item', () => {
    
  });
  
  /* 
    Challenge #3: send request for seeding the database POST /todos/seed
    Then write a simple test that verifies that you have seeded the app correctly
  */
  it('seeds data before opening the app', () => {
    
  });
  
  /* 
    Challenge #4: create a todo item in the application and then send the request to complete that item
    To see that item completed, you need to reload the application using .reload() command
    The real challenge in this test is to find the id of your todo
    Hint: use .route(), .wait() and .then() command to achieve this
  */
  it('deletes created todo item via api', () => {
    
  });
});
