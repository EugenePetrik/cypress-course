/// <reference types="cypress" />

import { userBuilder } from '../../support/generateData';
import { screenResolutions, getCurrentResolution } from '../../support/screenResolutions';

describe('Login', () => {
  const { userEmail: email, userPassword: password } = userBuilder();

  before(() => {
    cy.task('resetDatabase');
  });

  beforeEach( () => {
    cy.request('POST', '/accounts/seed', [
        {
          email,
          password,
        }
      ]);
  });

	screenResolutions.forEach((resolution) => {
    it(`logs in a user on ${resolution} screen`, () => {
      getCurrentResolution(resolution);

      cy.visit('/login');
  
      cy.login({ email, password });
    
      cy.get('[data-cy=login-message]').should('be.visible')
        .and('contain.text', 'User is logged in');
      
      const baseUrl = Cypress.config().baseUrl;
      cy.url().should('eq', `${baseUrl}/`);
    
      cy.getCookie('auth').its('value').should('eq', 'true');
    });
	});
});
