/// <reference types="cypress" />

/* 
  Remember you can run single test by using it.only
  Some of these challenges require you to start your application in a certain state,
  e.g. there should be checked todo item in list or there should be only one, etc.
  Find common assertions https://docs.cypress.io/guides/references/assertions.html#Common-Assertions
*/ 

describe.skip('Interacting with elements challenge', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  
  /*
    Challenge #1: check that there are 4 elements on page
    Start this test with 0 items in list
  */
  it('should create 4 elements', () => {
    
  });
  
  /*
    Challenge #2: test that toggle on todo item is checked
    Check documentation https://docs.cypress.io/guides/references/assertions.html#State
    Start this test with 1 unchecked item
  */
  it('has a checked todo item', () => {
    
  });
  
  /* 
    Challenge #3: test that todo does not exist after it is deleted
    You will find the right assertion in the documentation
  */
  it('should delete todo item and check it does not exist', () => {
    
  });
  
  /* 
    Challenge #4: check that the footer link has the text "Evan You"
    You can either use .should() command, or .contains() command
  */
  it('should check for text "Evan You"', () => {
    
  });
  
  /* 
    Challenge #5: check the color of heading
    The color code is rgb(184, 63, 69)
  */
  it('should check heading color', () => {
    
  });
  
  /*
    Challenge #6: check that there are more than 4 elements on page
    Start this test with at least 5 items in todo list
  */
  it('should have more than 4 elements', () => {

  });
});
