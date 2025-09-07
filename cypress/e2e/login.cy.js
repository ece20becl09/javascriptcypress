/// <reference types="cypress" />

describe('Login and Add Product to Cart - Demo Web Shop', () => {
  const email = 'mytestuser123@test.com';
  const password = 'SecurePass123!';

  before(() => {
    // Visit the login page
    cy.visit('https://demowebshop.tricentis.com/login');
  });

  it('logs in successfully', () => {
    cy.get('#Email').clear().type(email);          // Enter email
    cy.get('#Password').clear().type(password);    // Enter password
    cy.get('input.login-button').click();         // Click login

    // Assert login success by checking presence of logout link
    cy.get('a[href="/logout"]').should('be.visible');
  });

  it('adds a product to the cart and takes a screenshot', () => {
    // Navigate to Computers > Desktops
    cy.get('ul.top-menu > li > a').contains('Computers').click();
    cy.get('div.sub-category-item > h2 > a').contains('Desktops').click();

    // Select the first product
    cy.get('.product-item').first().within(() => {
      cy.get('h2.product-title > a').click();
    });

    // Add the product to the cart
    cy.get('#add-to-cart-button-1').click(); // Make sure the button ID matches the product

    // Assert that product was added successfully
    cy.get('.bar-notification.success')
      .should('be.visible')
      .and('contain.text', 'The product has been added to your shopping cart');

    // Take a screenshot of the cart notification
    cy.screenshot('ProductAddedToCart');
  });
});
