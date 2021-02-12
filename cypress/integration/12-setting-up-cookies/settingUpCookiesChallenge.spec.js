/// <reference types="cypress" />

import { userBuilder } from '../../support/generateData';

describe.skip('Setting up cookies challenge', () => {
  const { userEmail: email, userPassword: password } = userBuilder();

  beforeEach(() => {
    cy.request('POST', '/accounts/seed', [
        {
          'email': email,
          'password': password
        }
      ]);
  });
  
  /* 
    Challenge #1: log in and check cookie
  */
  it('saves auth cookie after login', () => {
    
  });
  
  /* 
    Challenge #2: test some other properties of saved cookie, like location, path, etc.
  */
  it('has correct auth cookie properties', () => {
    
  });
  
  /* 
    Challenge #3: save auth cookie using .setCookie() commandand then open the app
    Check if "logged in" message appears in application
  */
  it('authenticates by storing cookie in browser', () => {
    
  });
  
  /* 
    Challenge #4: try to store your own cookie
    Have some fun with it and play around with different properties
    Make sure you’ll check out the docs: https://on.cypress.io/setcookie
  */
  it('authenticates by storing cookie in browser', () => {
    
  });
  
  /* 
    Challenge #4: there is a setting that can be changed in order to not delete certain cookies between tests
    1. Read about it in a documentation: https://on.cypress.io/cookies
    2. Try test if it works in following describe block
  */
  describe('storing cookies between tests', () => {
    beforeEach(() => {
      cy.request('POST', '/accounts/seed', [
          {
            'email': email,
            'password': password
          }
        ]);

      Cypress.Cookies.preserveOnce('auth');
    });
  
    it('logs a user in', () => {
      cy.visit('/login');
  
      cy.get('[data-cy=email-input]').type(email);
      cy.get('[data-cy=password-input]').type(password, { log: false });
      cy.get('[data-cy=login-button]').click();
    });
  
    it('has auth cookie stored', () => {
      cy.getCookie('auth').its('value').should('eq', 'true');
    });
  });
});
