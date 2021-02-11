/// <reference types="cypress" />

/* 
  Remember you can run single test by using it.only
  Some of these challenges require you to start your application 
  in a certain state, e.g. there should be no todo item in list, or there should be only one, etc.
  Do not forget about documentation https://docs.cypress.io
*/ 

describe.skip('Interacting with elements challenge', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  /*
    Challenge #1: create one todo item 
  */
  it('creates a todo item', () => {
    
  });

  /* 
    Challenge #2: check off a todo item 
  */
  it('completes a todo item (using .click() command)', () => {
    
  });

  /* 
    Challenge #3: check off a todo item using .check() command (docs at http://on.cypress.io/check)
  */
  it('completes a todo item (using .check() command)', () => {
    
  });

  /*
    Challenge #4: uncheck a completed todo item using .uncheck() command (docs at http://on.cypress.io/uncheck)
  */
  it('marks a todo item as not completed (using .uncheck() command)', () => {
    
  });
});
