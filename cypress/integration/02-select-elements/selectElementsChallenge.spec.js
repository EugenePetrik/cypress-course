/// <reference types="cypress" />

/* 
  Before you start this challenge, please create at least one todo item
  There is a LOT that can be learned about selectors, I recommend
  Looking into W3Schools https://www.w3schools.com/cssref/css_selectors.asp
*/

describe.skip('Select elements challenge', () => {
  after(() => {
    cy.task('resetDatabase');
  });

  it('gets element on page', () => {
    cy.visit('/');

    // Challenge #1: select a todo element using tag "li" (list item)
    cy.get('');

    // Challenge #2: select a todo element using class
    cy.get('');

    // Challenge #3: select checkbox inside todo element by using class
    cy.get('');

    // Challenge #4: select checkbox inside todo element by using "checkbox" attribute
    cy.get('');

    // Challenge #5: select a todo element by relation (complete selector, don’t delete "ul")
    cy.get('ul');
  });
});
