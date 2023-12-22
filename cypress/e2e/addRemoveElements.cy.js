/// <reference types="cypress"/>
import addremoveElements from '../fixtures/addRemoveElementsData.json'
import addRemoveElementsCommands from '../support/stepObjects/addRemoveElementsCommands'
describe('Internet Elements first five ', () => {
  beforeEach(()=>{
          const addRemoveCommand = new addRemoveElementsCommands()
          cy.clickOnAvailableExamples(addremoveElements.elementName,addremoveElements.urlPath)
          cy.pageTitleVerification(addRemoveCommand.getTitleLocator(),addremoveElements.expectedTitle)          
  })
  it('Add Remove elements: Add', () => {
    const addRemoveCommand = new addRemoveElementsCommands()
    //cy.visit('/add_remove_elements/')
    
    addRemoveCommand.getAddElementButtonLocator()
      .contains(addremoveElements.addElementButtonText)
      .click()

    // Element exits 
    addRemoveCommand.getDeleteButtonLocator().should('be.visible').and('contain',addremoveElements.deleteButtonText)
    cy.contains('button','Add Element').click()
    addRemoveCommand.getDeleteButtonLocator().should('have.length','2')

    // Element can be deleted
    addRemoveCommand.getDeleteButtonLocator().first().click()
    addRemoveCommand.getDeleteButtonLocator().should('have.length','1')
    // Confirm element is deleted
    addRemoveCommand.getDeleteButtonLocator().click()
    addRemoveCommand.getDeleteButtonLocator().should("not.exist")

  })

})