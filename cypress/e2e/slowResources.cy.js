///<reference type="cypress">
import slowResourcesData from '../fixtures/slowResourcesData.json'
import slowResourcesCommands from '../support/stepObjects/slowResourcesCommands'

//Reference: https://filiphric.com/testing-frontend-performance-with-cypress
//https://filiphric.com/how-to-wait-for-page-to-load-in-cypress

describe("Slow Resources",()=>{
    it('gets count of all requests', () => {
        const slowResourcesCommand = new slowResourcesCommands()
        cy.intercept('**').as('requests')
        cy.clickOnAvailableExamples(slowResourcesData.elementName,slowResourcesData.urlPath)
        cy.pageTitleVerification(slowResourcesCommand.getTitleLocator(),slowResourcesData.expectedTitle)
        cy.window()
        .its('performance')
        .invoke('mark', 'modalOpen')
        // set longer timeout
        cy.get('@requests.all', { timeout: 100 })
          .should('have.length.greaterThan',2)

        cy.window()
          .its('performance')
          .invoke('measure', 'modalOpen')  
          .its('duration', { timeout: 0 })
         .should('be.lessThan', 2000)
    }) 

    
})
