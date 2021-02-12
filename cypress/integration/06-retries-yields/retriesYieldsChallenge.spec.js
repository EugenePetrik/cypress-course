/// <reference types="cypress" />

/* 
  Remember you can run single test by using it.only
  This challenge includes working with documentation.
  You can find it on https://docs.cypress.io, use https://on.cypress.io/<command> or find a command via autocomplete.
*/ 

describe.skip('Retries yields challenge', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  
  /*
    Сhalenge #1: use command .first() to select the first element in todos list
    Start by first geting [data-cy=todo]
    Before starting this test, make sure you have at least two todo items
  */
  it('selects first item in list', () => {
    cy.get('[data-cy=todo]');
  });
  
  /*
    Chalenge #2: based on your the last test, try to find a command in documentation that will select last todo item
    Start the test by first geting [data-cy=todo]
    Before starting this test, make sure you have at least two todo items
  */
  it('selects last item in list', () => {
    cy.get('[data-cy=todo]');
  });
  
  /*
    Challenge #3: select third todo item
    Start the test by first geting [data-cy=todo]
    Before starting this test, have at least four items in to do list
  */
  it('selects third todo item', () => {
    cy.get('[data-cy=todo]');
  });
  
  /*
    Challenge #4: there are commands for selecting previous and next elements
    Find them in documentation and try them out
    Start the test by first geting [data-cy=todo]
  */
  it('selects the first item and then the next or previous item', () => {
    cy.get('[data-cy=todo]');
  });
  
  /* 
    Challenge #5: start test with no todo in list and add timeout to .get()
  */
  it('has one element in todo list', () => {
    cy.get('[data-cy=todo]').should('have.length', 1);
  });
});
