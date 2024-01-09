///<reference type='cypress'>
import multipleWindowsData from '../fixtures/multipleWindowsData.json'
import multipleWindowsCommands from '../support/stepObjects/multipleWindowsCommands'
describe("Multiple Windows",()=>{
    beforeEach(()=>{
       const multipleWindowsCommand = new multipleWindowsCommands()
       cy.clickOnAvailableExamples(multipleWindowsData.elementName,multipleWindowsData.urlPath)
       cy.pageTitleVerification(multipleWindowsCommand.getTitleLocator(),multipleWindowsData.expectedTitle)
    })
  
    it("confirms title on New window",()=>{
        const multipleWindowsCommand = new multipleWindowsCommands()
        cy.get('a').contains(multipleWindowsData.clickHereLink)
            .invoke('removeAttr','target')
            .click()
            cy.pageTitleVerification(multipleWindowsCommand.getTitleOfNewWindow(),multipleWindowsData.expectedTitleOfNewWindow)
            cy.url().should('contains',multipleWindowsData.urlPathOfNewWindow)
            cy.go('back')
     })
})