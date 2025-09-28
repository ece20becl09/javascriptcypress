describe('Handling child tab with combination of cypress and jquery commands', () => {
          it('Handling child tab with combination of cypress and jquery commands', () => {
                    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

                    cy.wait(2000)
                    //To get the url of child tab using jquery commands and open in the same tab the child tab url
                    cy.get('#opentab').invoke('removeAttr', 'target').click()

                    //cypress will not allow to click any attribute if we switch the domain for security purpose so we have to use cy.origin command
                    cy.origin("https://www.qaclickacademy.com/", () => {
                              cy.get("#navbarSupportedContent a[href*='about']").click()
                              cy.get("div[class='section-title mt-50'] h2").should('contain', 'QAClick Academy')

                    })
          })

})