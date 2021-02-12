/// <reference types="cypress" />

describe('Testing emails', () => {
  before(() => {
    cy.task('resetDatabase');
  });

  beforeEach(() => {
    cy.request('DELETE', '/accounts');
  });
  
  it('sends a welcome email', () => {
    cy.visit('/signup');

    cy.get('[data-cy=signup-title]').should('have.text', 'signup');
  
    cy.get('[data-cy=email-input]').type('email.123456@mailosaur.io');
    cy.get('[data-cy=password-input]').type('admin');

    cy.contains('Send me a welcome email')
      .prev()
      .check();
  
    cy.get('[data-cy=signup-button]').click();
  
    cy.request({
        method: 'POST',
        url: 'https://mailosaur.com/api/messages/await?server=123456',
        headers: {
          authorization: 'Basic ' + Buffer.from('1q2w3e4r5t6y7u8i9o0p').toString('base64')
        },
        body: {
          sentTo: 'email.123456@mailosaur.io'
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.equal(401);
        expect(response.headers['www-authenticate']).to.equal('Bearer');
        expect(response.body).to.be.undefined;
      });
  });
});
