///<reference type="cypress">
import exitIntent from "../fixtures/exitIntentData.json"
import exitIntentCommands from "../support/stepObjects/exitIntentCommands"
describe("Entry Ad",()=>{
beforeEach(()=>{
   const exitIntentCommand = new exitIntentCommands()
   cy.clickOnAvailableExamples(exitIntent.elementName,exitIntent.urlPath)
   cy.pageTitleVerification(exitIntentCommand.getTitleLocator(),exitIntent.expectedTitle)
})
it("Verify modal window close",()=>{
    const exitIntentCommand = new exitIntentCommands()
    exitIntentCommand.getBodyLocator().trigger("mouseleave",0,0)
    exitIntentCommand.getModalTitleLocator().should('be.visible')    
    exitIntentCommand.getModalTitleLocator().should('contain',exitIntent.modalTitleText)  
    exitIntentCommand.getCloseLocator().click()
    exitIntentCommand.getModalTitleLocator().should('not.be.visible')
})


}) 