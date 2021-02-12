/// <reference types="cypress" />

import { userBuilder } from '../../support/generateData';

describe('Setting up cookies', () => {
  const { userEmail: email, userPassword: password } = userBuilder();

  // const email = 'admin@example.com';
  // const password = 'admin';

  before(() => {
    cy.task('resetDatabase');
  });

  beforeEach(() => {
    cy.request('POST', '/accounts/seed', [
        {
          'email': email,
          'password': password
        }
      ]);
  });
  
  it('logs in a user', () => {
    cy.visit('/login');

    cy.get('[data-cy=login-title]').should('have.text', 'login');
  
    cy.get('[data-cy=email-input]').type(email);
    cy.get('[data-cy=password-input]').type(password, { log: false });
    cy.get('[data-cy=login-button]').click();
  
    cy.get('[data-cy=login-message]').should('be.visible')
      .and('contain.text', 'User is logged in');
    
    const baseUrl = Cypress.config().baseUrl;
    cy.url().should('eq', `${baseUrl}/`);
  
    cy.getCookie('auth').its('value').should('eq', 'true');
  });
  
  it('is logged in', () => {
    cy.setCookie('auth', 'true');
  
    cy.visit('/');
  
    cy.get('[data-cy=login-message]').should('be.visible')
      .and('contain.text', 'User is logged in');
  });
});
