/// <reference types="cypress" />

describe('User Registration - Demo Web Shop', () => {
  const email = 'mytestuser123@test.com'; // fixed email you can remember
  const password = 'SecurePass123!';      // fixed password you can remember

  beforeEach(() => {
    cy.visit('https://demowebshop.tricentis.com/register');
  });

  it('registers a new user successfully', () => {
    cy.get('#gender-male').check();
    cy.get('#FirstName').type('John');
    cy.get('#LastName').type('Doe');
    cy.get('#Email').clear().type(email);
    cy.get('#Password').clear().type(password);
    cy.get('#ConfirmPassword').clear().type(password);
    cy.get('#register-button').click();

    // Assert registration success
    cy.get('h1').should('contain.text', 'Register');
    cy.get('.result').should('contain.text', 'Your registration completed');
  });

  it('shows error when passwords do not match', () => {
    cy.get('#gender-female').check();
    cy.get('#FirstName').type('Jane');
    cy.get('#LastName').type('Smith');
    cy.get('#Email').clear().type('anotheruser123@test.com'); // different fixed email
    cy.get('#Password').type('Password123!');
    cy.get('#ConfirmPassword').type('Mismatch123!');
    cy.get('#register-button').click();

    // Assert error is shown for password mismatch
    cy.get('.field-validation-error > span')
      .should('be.visible')
      .and('contain.text', 'The password and confirmation password do not match.');
  });
});
