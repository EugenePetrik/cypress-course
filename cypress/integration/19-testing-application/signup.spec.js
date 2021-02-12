/// <reference types="cypress" />

import { userBuilder } from '../../support/generateData';
import { screenResolutions, getCurrentResolution } from '../../support/screenResolutions';

describe('Sign Up', () => {
  const { userEmail: email, userPassword: password } = userBuilder();

  beforeEach(() => {
    cy.request('DELETE', '/accounts');
  });

  screenResolutions.forEach((resolution) => {
    it(`does a signup on ${resolution} screen`, () => {
      getCurrentResolution(resolution);

      cy.visit('/signup');
  
      cy.signup({ email, password });
  
      cy.get('[data-cy=login-message]').should('be.visible')
        .and('contain.text', 'User is logged in');
      
      const baseUrl = Cypress.config().baseUrl;
      cy.url().should('eq', `${baseUrl}/`);
    
      cy.getCookie('auth').its('value').should('eq', 'true');
    });
  });
});
