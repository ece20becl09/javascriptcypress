describe('Handling Mouse Over Popups', () => {
    it('Handling Mouse Over Popups', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //cy.get('div.mouse-hover-content').invoke('show')
        // //this will work for if the popup is displaying or not using jquery method we can verify

        cy.contains('Top').click({ force: true })
        cy.url().should('include', 'top')



    })
})         