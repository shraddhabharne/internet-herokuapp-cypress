///<reference type="cypress">
import entryAdData from "../fixtures/entryAdData.json"
import entryAdCommands from "../support/stepObjects/entryAdCommands"
describe("Entry Ad",()=>{
beforeEach(()=>{
    const entryAdCommand = new entryAdCommands()
    cy.clickOnAvailableExamples(entryAdData.elementName,entryAdData.urlPath)
    cy.pageTitleVerification(entryAdCommand.getTitleLocator(),entryAdData.expectedTitle)

})
it("Verify modal window close",()=>{
    const entryAdCommand = new entryAdCommands()
    entryAdCommand.getModalTitleLocator().should('be.visible')    
    entryAdCommand.getModalTitleLocator().should('contain',entryAdData.modalTitleText) 
    entryAdCommand.getCloseLocator().click()
    entryAdCommand.getModalTitleLocator().should('not.be.visible')
    entryAdCommand.getClickHereLocator().click()
    cy.reload()
    entryAdCommand.getModalTitleLocator().should('be.visible')
})

}) 