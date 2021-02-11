/// <reference types="cypress" />

describe('Organize tests', () => {
  before(() => {
    cy.log('Create test data');
  });

  beforeEach(() => {
    cy.log('Open Home page');
  });

  afterEach(() => {
    cy.log('Clear browser session');
  });

  after(() => {
    cy.log('Close browser');
  });
  
  context('Group 1', () => {
    it('Test one', () => {
      cy.log('Run - "Test one"');
    });
    
    it('Test two', () => {
      cy.log('Run - "Test two"');
    });
  });
  
  context.only('Group 2', () => {
    before(() => {
      cy.log('Adding a new todo item');
    });

    after(() => {
      cy.log('DB cleanup');
    });

    it('Test three', () => {
      cy.log('Run - "Test three"');
    });

    it.skip('Test four', () => {
      cy.log('Run - "Test four"');
    });

    it('Test five', () => {
      cy.log('Run - "Test five"');
    });
  });
});
