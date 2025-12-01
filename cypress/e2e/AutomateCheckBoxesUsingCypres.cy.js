describe('Handling automate check boxes using cypress', () => {
    it('Handling automate check boxes using cypress', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.wait(2000)


        //one check box selecting one time 
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption2').check().should('be.checked').and('have.value', 'option2')
        cy.get('#checkBoxOption3').check().should('be.checked').and('have.value', 'option3')
        //check() is a method which will help to click on check box using cypress and using assertion values are showing or not validate

        //Negative Assertion should not be checked
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value', 'option1')

        //selecting multiple check box at a time first we have to write what is the common to all check boxes then only cypres can automate the check boxes
        cy.get("input[type='checkbox']").uncheck(['option1', 'option2', 'option3'])


    })

})